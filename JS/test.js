function changeFontSizeTo30pxAndLog(someDiv) {
    someDiv.style.fontSize = "30px";
    console.log(someDiv.style.fontSize);
}

function changeFontSizeOnClick() {
    let someDiv = document.querySelector("div");
    changeFontSizeTo30pxAndLog(someDiv);
}

console.log('Esto tiene"comillas dobles"');
let pagina = document;
const divs = document.querySelectorAll("div");
console.log(divs);

document.addEventListener("click", changeFontSizeOnClick);

for (let div of divs) {
    div.style.background = "red";
    div.addEventListener("pointerover", function (event) {
        event.currentTarget.style.background = "blue";
    });
    div.addEventListener("pointerout", function (event) {
        event.currentTarget.style.background = "Yellow";
    });
}
divs = [];
document.head;