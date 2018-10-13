/*
 ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ----------
 ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ----------
 ---------- ----- DEFINE closing of window  ---------- -----
 ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ----------
 ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ----------
 */

var args = arguments[0] || {};

/* GET TITLE AND URL from ARGS*/
var windowTitle = args.title || '';
var homeURL = args.url || '';
var webview = $.webview;

webview.reload();
webview.url = homeURL;

$.web.addEventListener('android:back', function(e) {
	Ti.API.info('Android go BACK Button');
	e.cancelBubble = true;
	webview.goBack();
});

function goBack() {
	webview.goBack();
}
function reload() {
	webview.reload();
}



