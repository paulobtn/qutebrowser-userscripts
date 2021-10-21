// ==UserScript==
// @name           twitter to nitter proxy
// @namespace      paulobtn's userscripts
// @include        /^http(s|)://(www\.|)reddit\.com/.*$/
// @run-at         document-start
// ==/UserScript==

var instance='teddit.net'; 

var url=new URL(window.location.href);        
url.hostname=instance;
location.href=url;
