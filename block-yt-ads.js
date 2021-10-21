// ==UserScript==
// @name         block-yt-ads
// @namespace    paulobtn's userscripts
// @description  skips youtube ads automatically
// @include     /^http(s|)://(www\.|)youtube\.com/.*$/
// @include     /^http(s|)://youtu\.be/.*$/
// @exclude      *://*.youtube.com/subscribe_embed?*
// @version      1.0
// ==/UserScript==

var observer;
var moviePlayer;

//press skip button if available
var checkBtn=function(){
    var button=moviePlayer.querySelector(".ytp-ad-skip-button");
    if(button){
        button.click();
    }
};

// When the movie player is available, starts the observer that 
// waits for the button to be available
var init=function(){
    if(moviePlayer=document.getElementById("movie_player")){
        observer.disconnect();
        new MutationObserver(checkBtn).observe(moviePlayer,{childList:true,subtree:true});
        checkBtn();
    }
};

observer=new MutationObserver(init);
observer.observe(document.body,{childList:true,subtree:true});
init();
