function SearchBarC() {
    var search = document.getElementById("search");
    if (search.value !== "") {
        search.style.backgroundPosition = "100% 2px"
        console.log("It is not empty")
    } else {
        search.style.background = "linear-gradient(#000 0 0) bottom/0% 2px no-repeat";
        search.style.transition = "1s ease-in-out";
        console.log("It is empty")
    }
}

function Check() {
    var search = document.getElementById("search");
    search.style.display = "flex"
}