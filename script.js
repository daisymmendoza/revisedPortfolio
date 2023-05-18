var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos || window.pageYOffset < 10) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.opacity = "1";
} else {
    document.getElementById("navbar").style.top = "-65px";
    document.getElementById("navbar").style.opacity = "0.5";
}
prevScrollpos = currentScrollPos;
}
