var bender = document.getElementById('container');
bender.addEventListener('click', function (e) {
    var id = e.target.id;
    console.log(e.target, id);
    var bannedId = ['container', 'body'];
    if (bannedId.indexOf(id) === -1 || id === undefined) {
        e.target.style.display = 'none';
    }
});

//function goMagick(e) {
//    var img = e.target || e.currentTarget;
//    var benderWrapper = document.getElementById('goMagick');
//
//
//    var tid = setInterval(function () {
//        if (benderWrapper && benderWrapper.classList.contains('active')) {
//            clearInterval(tid);
//            img.classList.add('hidden');
//            benderWrapper.style.visibility = 'visible';
//        }
//    }, 2000);
//}

//var fullscreenButton = document.getElementById("fullscreen-button");
//var fullscreenDiv    = document.getElementById("fullscreen");
//var fullscreenFunc   = fullscreenDiv.requestFullscreen;
//if (!fullscreenFunc) {
//    ['mozRequestFullScreen',
//        'msRequestFullscreen',
//        'webkitRequestFullScreen'].forEach(function (req) {
//        fullscreenFunc = fullscreenFunc || fullscreenDiv[req];
//    });
//}
//function enterFullscreen() {
//    fullscreenFunc.call(fullscreenDiv);
//}
//fullscreenButton.addEventListener('click', enterFullscreen);