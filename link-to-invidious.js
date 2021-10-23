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
var title=document.getElementsByTagName('h1')[0];

//observe changes and add button if it doesn't exist
var observer=new MutationObserver(function(mutations){
  mutations.forEach(function(mutation){
      let invbtn = mutation.target.querySelector('.inv-btn');
      if(!invbtn){
          title=mutation.target.getElementsByTagName('h1')[0];
          addbtn();
      }
  });
});

addbtn();
observer.observe(document.body,{childList:true,subtree:true});

function addbtn(){
      if(title){
        var btn=document.createElement('a');
        btn.innerHTML=`<h2 style="color:#3ea6ff;
                                  text-decoration:none;
                                  border: 1px solid #3ea6ff;
                                  display:inline-block;font-weight:400;
                                  padding:.3rem;"
                       >Watch on ${instance}</h2>`;
        btn.href='javascript:void(0)';
        btn.onclick=function(){redir();};
        btn.className='inv-btn';
        title.parentNode.appendChild(btn);
      }
}

function redir(){
    var url=new URL(window.location.href);
    url.hostname=instance;
    location.href=url;
}
