console.log('Loaded!');
var img = document.getElementById('madi');
Function moveRight () {
    marginLeft = marginLeft + 10;
}
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
    
    //img.style.marginleft = '100px';
};
