let mode = document.querySelector("#mode");
// console.log(mode);

let cuurentMode = "light";

mode.addEventListener("click", () => {
    if (cuurentMode === "light") {
        cuurentMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        cuurentMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
});