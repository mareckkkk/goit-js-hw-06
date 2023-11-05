const fontControl = document.querySelector("input#font-size-control");
const changeTextSize = document.querySelector("span#text");

fontControl.addEventListener("change", (e) => {
    changeTextSize.style.fontSize = `${e.target.value}px`
})