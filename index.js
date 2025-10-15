 function languageSwitch(){
        var englishVersion = document.getElementById("englishVersion");
        var swedishVersion = document.getElementById("swedishVersion");
        if (englishVersion.hidden) {
            englishVersion.hidden = false;
            swedishVersion.hidden = true;
        }
        else {
            englishVersion.hidden = true;
            swedishVersion.hidden = false;
        }
    }
    document.getElementById("englishVersion").hidden = false;
    document.getElementById("swedishVersion").hidden = true;