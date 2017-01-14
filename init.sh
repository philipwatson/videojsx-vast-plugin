#!/bin/bash

function program_is_installed {
    local return_=1
    type $1 > /dev/null 2>&1 || { local return_=0; }
    echo "$return_"
}

function npm_package_is_installed {
  local return_=1

  # try globally first
  npm list -g $1 > /dev/null 2>&1
  if [ $? -eq 1 ]; then
    # else try locally
    if [ -d node_modules ]; then
        ls node_modules | grep $1 >/dev/null 2>&1 || { local return_=0; }
    else
        local return_=0;
    fi
  fi
  echo "$return_"
}

function exit_when_fail {
    if [ "$1" == 0 ]; then
        echo $2
        exit 1
    fi
}

programs=(node wget)
npms=(bower)

for p in "${programs[@]}"
do
    exit_when_fail `program_is_installed $p` "FAILURE: $p program is not installed."
done


for p in "${npms[@]}"
do
    exit_when_fail `npm_package_is_installed $p` "FAILURE: $p npm package is not installed."
done


# download clips (because we don't want to store in git repository)
if [ ! -d clips ]; then
    mkdir clips
    wget -O clips/content.mp4 http://www.w3schools.com/html/mov_bbb.mp4

    wget -O clips/mp4ad.mp4 http://v.theonion.com/onionwebtech/videoads/525/sd.mp4
    wget -O clips/webmad.webm http://v.theonion.com/onionwebtech/videoads/525/sd.webm
    wget -O clips/m3u8ad.m3u8 http://v.theonion.com/onionwebtech/videoads/525/hls_playlist.m3u8
fi


bower install

echo "note: be sure to build videojs-contrib-ads in bower_components (see its README.md)"
echo "done."
