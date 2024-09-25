'use strict';

var img = new Array("img/shop/ことぶき調整.png",
    "img/shop/ことぶき店内画像調整.png");
var element = document.getElementById('slideshow');
var count = -1;
imgTimer();

function imgTimer() {
    count++;
    if (count == img.length) count = 0;
    element.src = img[count];
    setTimeout("imgTimer()", 5000);
}