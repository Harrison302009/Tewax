function Settler() {
    window.sessionStorage.setItem("flipped", null);
    console.log(window.sessionStorage.getItem("flipped"));
}
function SearchBarC() {
    var search = document.getElementById("search");
    if (search.value === "") {
        search.style.display = "flex";
    search.style.position = "relative";
    search.style.textAlign = "center";
    search.style.width = "100%";
    search.style.height = 40;
    search.style.background = "linear-gradient(#bb443b 0 0) bottom/0% 2px no-repeat";
    search.style.borderBottomLeftRadius = "20px";
    search.style.borderBottomRightRadius =  "20px";
    search.style.border = "transparent";
    search.style.borderBottom = "1px solid #b63b3b";
    search.style.borderBottomWidth = 0;
    search.style.borderBottomColor = "red";
    search.style.outline = "none";
    search.style.transition = "1s ease-in-out";
    } else {
        search.style.backgroundSize = "100% 2px";
        console.log("It is not empty")
    }
}

function Check() {
    var search = document.getElementById("search");
    search.style.display = "flex"
}
function Klam() {
    var validator = window.sessionStorage.getItem("flipped");
    console.log(validator);
    if (validator === "true") {
        CaretAway()
    } else if (validator === "false") {
        FilterCaretSwitch()
    } else {
        FilterCaretSwitch()
    }
}

function FilterCaretSwitch() {
    var caret = document.getElementById("caret");
    var classList = document.getElementById("allClasses");
    var small = document.getElementById("js1");
    var smallers = document.getElementById("js2");
    var smallest = document.getElementById("js3");
    caret.style.transform = "rotate(180deg)";
    caret.style.transition = "0.4s ease-in-out";
    classList.style.height = "100%";
    small.style.fontSize = "12px";
    small.style.transition = "0.7 ease-in-out";
    smallers.style.fontSize = "12px";
    smallers.style.transition = "0.7s ease-in-out";
    smallest.style.fontSize = "12px";
    smallest.style.transition = "0.7s ease-in-out";
    classList.style.backgroundColor = "wheat";
    classList.style.transition = "1s ease-in-out";
    window.sessionStorage.setItem("flipped", true);
}

function CaretAway() {
    var caret = document.getElementById("caret");
    var classList = document.getElementById("allClasses");
    var small = document.getElementById("js1");
    var smallers = document.getElementById("js2");
    var smallest = document.getElementById("js3");
    caret.style.transform = "rotate(0deg)";
    caret.style.transition = "0.7s ease-in-out";
    classList.style.height = "0";
    small.style.fontSize = "0";
    small.style.transition = "0.7s ease-in-out";
    smallers.style.fontSize = "0";
    smallers.style.transition = "0.7s ease-in-out";
    smallest.style.fontSize = "0";
    smallest.style.transition = "0.7s ease-in-out";
    classList.style.backgroundColor = "wheat";
    classList.style.transition = "1s ease-in-out";
    window.sessionStorage.setItem("flipped", false);
}