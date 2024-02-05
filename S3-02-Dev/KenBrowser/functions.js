


//点击图片放大
function zoomOut(img_src) {
    if (img_src!="") {      //显示图片放大div
        document.getElementById("img_to_zoom").src=img_src;
        document.getElementById("pic_zoom_out").style.display="flex";
    } else {                //隐藏图片div
        document.getElementById("pic_zoom_out").style.display="none";
    }
}



//百度统计代码
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?ce1a07844daef172634dc087a31b5cce";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();



