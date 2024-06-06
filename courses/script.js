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
function FilterCaretSwitch() {
    var caret = document.getElementById("caret");
    var classList = document.getElementById("allClasses");
    var smallers = classList.getElementsByTagName("h4");
    caret.style.transform = "rotate(180deg)";
    caret.style.transition = "0.4s ease-in-out";
    classList.style.height = "100%";
    smallers.style.display = "flex";
    classList.style.backgroundColor = "green";
    classList.style.transition = "1s ease-in-out";
}