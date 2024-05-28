function Auto() {
    var audio = document.getElementById("parado");
    audio.play();
}

function StopDrags() {
    var home = document.getElementById("home");
    window.addEventListener("dragstart", (e) => {
        e.preventDefault();
    })
}

function NoSelect() {
    window.addEventListener("select", (e) => {
        e.preventDefault();
    })
}

function CursorTransformation() {
    var cursor = document.getElementById("cursor");
    cursor.src = "../icon/pointer.png";
    cursor.width = "50";
    cursor.height = "50";
}

function PointerTransformation() {
    var cursor = document.getElementById("cursor");
    cursor.src = "../icon/cursor.png";
    cursor.width = "30";
    cursor.height = "30";
}

function SearchBar() {
    var search = document.getElementById("search");
    search.style.display = "flex";
    search.style.borderBottomWidth = "100%";
    search.style.transition = "1s ease-in-out";
}