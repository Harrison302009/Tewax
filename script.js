function Brightness() {
    var slogan = document.getElementById("slogan");
    slogan.style.color = "#fff";
    slogan.style.textShadow = "0 0 5px #fff, 0 0 15px #fff, 0 0 30px rgb(214, 94, 214), 0 0 45px rgb(214, 94, 214), 0 0 65px rgb(214, 94, 214), 0 0 78px rgb(214, 94, 214)";
    slogan.style.transition = "0.5s ease-in-out";
}
function Dim() {
    var slogan = document.getElementById("slogan");
    slogan.style.color = "#000";
    slogan.style.textShadow = "none";
    slogan.style.transition = "0.5s ease-in-out";
}