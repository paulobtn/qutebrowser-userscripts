// ==UserScript==
// @name        link-to-invidious
// @namespace   paulobtn's userscripts
// @description add a link to indivious on youtube pages
// @include     /^http(s|)://(www\.|)youtube\.com/.*$/
// @include     /^http(s|)://youtu\.be/.*$/
// @exclude      *://*.youtube.com/subscribe_embed?*
// @version     1.0
// ==/UserScript==

//set your favorite Invidious instance
var instance='vid.puffyan.us';

//find the video name
var title=Array.prototype.slice.call(document.getElementsByTagName('h1'));

//observe changes and add link to invidious if it doesn't exist
var observer=new MutationObserver(function(mutations){
  mutations.forEach(function(mutation){
      var skip=Array.prototype.slice.call(mutation.target.getElementsByClassName('inv-btn'));
      if(skip<1){
          title=Array.prototype.slice.call(mutation.target.getElementsByTagName('h1'));
          addbtn();
      }
  });
});

addbtn();
observer.observe(document.body,{childList:true,subtree:true});

// add link to invidious
function addbtn(){
    for(var i=0;i<title.length;i++){
        var btn=document.createElement('a');
        btn.innerHTML=`<h2 style="color:#3ea6ff;
                                  text-decoration:none;
                                  border: 1px solid #3ea6ff;
                                  display:inline-block;font-weight:400;
                                  padding:.3rem;"
                       >Watch on ${instance}</h2>`;
        btn.className='inv-btn';
        var url=new URL(window.location.href);
        url.hostname=instance;
        btn.href=url;
        title[i].parentNode.appendChild(btn);
    }
}
