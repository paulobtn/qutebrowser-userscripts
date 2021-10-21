// ==UserScript==
// @name           twitter to nitter proxy
// @namespace      paulobtn's userscripts
// @include        /^http(s|)://(www\.|)twitter\.com/.*$/
// @run-at         document-start
// ==/UserScript==

var instance='nitter.net'; 

var url=new URL(window.location.href);        
url.hostname=instance;
location.href=url;
