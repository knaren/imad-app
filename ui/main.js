console.log('Loaded!');
var img = document.getElementById('madi');
img.onclick = function () {
    var interval = setInterval(moveleft, 50);
    img.style.marginleft = '100px';
};
