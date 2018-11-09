$(document).mouseleave(function () {
    chrome.storage.sync.get('cursorMute', function (obj) {
        if(obj.cursorMute) {
            if($(".qa-control-volume>span").hasClass("mute-button")){
                $(".qa-control-volume").click();
            }
        }
    });
});

$(document).mouseenter(function () {
    chrome.storage.sync.get('cursorMute', function (obj) {
        if(obj.cursorMute) {
            if($(".qa-control-volume>span").hasClass("unmute-button")){
                $(".qa-control-volume").click();
            }
        }
    });
});

setInterval(function(){ 
    chrome.storage.sync.get('hideExtensions', function (obj) {
        if(obj.hideExtensions){
            $("[class^=extension]").hide(); 
        } else {
            console.log("show");
            $("[class^=extension]").show(); 
        }
    });
}, 1000);

var path;
setInterval(function(){ 
    if(path!=window.location.pathname){
        path = window.location.pathname;
        chrome.storage.sync.get('autoTheatre', function (obj) {
            if(obj.autoTheatre){
                $(".qa-theatre-mode-button").click();
            }
        });
    }
}, 500);

$( document ).ready(function() {
    path = window.location.pathname;
    chrome.storage.sync.get('autoTheatre', function (obj) {
        if(obj.autoTheatre){
            $(".qa-theatre-mode-button").click();
        }
    });
});