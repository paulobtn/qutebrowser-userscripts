// ==UserScript==
// @name           medium to scribe proxy
// @namespace      paulobtn's userscripts
// @include        /(^|^[^:]+:\/\/|[^\.]+\.)medium\.com/.*$/
// @run-at         document-start
// ==/UserScript==

var instance='scribe.rip';

var url=new URL(window.location.href);        
url.hostname=instance;
location.href=url;
