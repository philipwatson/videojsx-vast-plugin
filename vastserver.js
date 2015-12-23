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
    var originHeader = req.headers['Origin'];
    if (originHeader !== undefined) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    }

}

var server = http.createServer(function(req, res) {
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
                    if (file.indexOf("mp4") > -1) {
                        res.setHeader("content-type", "video/mp4");
                    }
                    else if (file.indexOf("webm") > -1) {
                        res.setHeader("content-type", "video/webm");

                    }
                    else if (file.indexOf("m3u8") > -1) {
                        res.setHeader("content-type", "application/vnd.apple.mpegurl");
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
    }
});


server.listen(9999, function() {
    console.log("Server listening on port 9999");
});