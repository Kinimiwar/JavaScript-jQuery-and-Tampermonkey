// ==UserScript==
// @name         completeroms.com
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*.completeroms.com/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

var jQuery = window.jQuery

//-- Always show download button
jQuery('.download-button').removeAttr('style')

//-- Remove countdown text and bottom alert
jQuery('.margin-bottom-30, .alert-danger').remove()

//-- Clean top spacing
jQuery('.text-center').toggleClass('margin-top-50 padding-top-30')

//-- Removes iframes
setInterval(function(){ jQuery('iframe').remove() }, 100);

//-- Remove pop-up behavior
window.K200 = undefined
