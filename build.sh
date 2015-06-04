#!/bin/bash

PAGES="Home FrontConf"
select k in $PAGES;
    do
        if [ "$k" = "Home" ]; then
            echo $k.md is watched..
            markdown-html -w -t 'FrontendConf 2015, Moscow' -s './css/md.css' -w ./review/frontendconfmsk2015/README.md -o ./review/frontendconfmsk2015/index.html
            exit
        elif [ "$k" = "FrontConf" ]; then
            echo $k.md is watched..
            markdown-html -w -t 'leikam.github.io' -s './css/md.css' -w ./README.md -o ./index.html
            exit;
        else
            echo bad choice.
            exit
        fi
    done