var images = document.images;
//var gifsArray = [];
for (var i = 0, l = images.length; i < l; i++) {
    var img = document.images[i];
    var src = img.src;
    if (src.lastIndexOf('.gif') > -1) {
        //gifsArray.push(img);
        img.classList.add("js-updateSrc-processed");
        img.addEventListener('click', updateSrc, false);
    }
}

function updateSrc(e) {
    var target = e.target;
    target.src = copyImage(target).toDataURL('img/png');
}

function copyImage(img) {
    var w = img.width;
    var h = img.height;

    var canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;

    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, w, h);

    return canvas;
}
