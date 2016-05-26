var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs");


function handleError(res, err) {
    res.writeHead(404, {"Content-Type": "text/plain"});
    if (err !== undefined) {
        res.write(err + "\n");
    }
    res.end();
}

function handleCors(req, res) {
    var originHeader = req.headers['origin'];
    if (originHeader !== undefined) {
        res.setHeader("Access-Control-Allow-Origin", originHeader);
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    }
}


var vastServer = http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    var filename = path.join(process.cwd(), pathname);

    handleCors(req, res);

    if (pathname === "/favicon.ico") {
        res.end("");
        return;
    }


    if (pathname !== "/impression") {
        fs.exists(filename, function (exists) {
            if (!exists) {
                handleError(res);
                return;
            }

            if (!fs.statSync(filename).isDirectory()) {
                fs.readFile(filename, "binary", function (err, file) {
                    if (err) {
                        handleError(res, err);
                        return;
                    }

                    // perhaps use a real web server in future to work this out
                    if (filename.indexOf("mp4") > -1) {
                        res.setHeader("content-type", "video/mp4");
                    }
                    else if (filename.indexOf("webm") > -1) {
                        res.setHeader("content-type", "video/webm");

                    }
                    else if (filename.indexOf("m3u8") > -1) {
                        res.setHeader("content-type", "application/vnd.apple.mpegurl");
                    }
                    else if (filename.indexOf("html") > -1) {
                        res.setHeader("content-type", "text/html");
                    }
                    else if (filename.indexOf("xml") > -1) {
                        res.setHeader("Set-Cookie", "test=123; Path=/");    
                    }                   

                    res.writeHead(200);

                    res.write(file, "binary");
                    
                    res.end("");
                });
            }

        });
    }
    else {
        console.log("Received impression.");
        res.end("");
    }

});

var pageServer = http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    var filename = path.join(process.cwd(), pathname);

    if (pathname === "/favicon.ico") {
        res.end("");
        return;
    }

    fs.exists(filename, function (exists) {
        if (!exists) {
            handleError(res);
            return;
        }
        if (!fs.statSync(filename).isDirectory()) {
            fs.readFile(filename, "binary", function (err, file) {
                if (err) {
                    handleError(res, err);
                    return;
                }

                // brittle
                if (filename.indexOf(".css") > -1) {
                    res.setHeader("Content-type", "text/css");
                }
                else if (filename.indexOf(".js") > -1) {
                    res.setHeader("Content-type", "text/javascript");
                }
                else if (filename.indexOf(".html") > -1) {
                    res.setHeader("Content-type", "text/html");
                }

                res.writeHead(200);
                res.write(file, "binary");
                res.end("");
            });
        }
    });
});


// different port to test cross-domain requests (i.e., third party cookie)
pageServer.listen(9998, function() {
    console.log("Page server listening on port 9998");
});

vastServer.listen(9999, function() {
    console.log("Vast server listening on port 9999");
});

