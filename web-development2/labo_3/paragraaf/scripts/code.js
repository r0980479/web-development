const setup = () => {
let belangrijkeParagrafen = document.querySelectorAll(".belangrijk");
for(let i= 0; i <belangrijkeParagrafen.length; i++){
    belangrijkeParagrafen[i].classList.add("opvallend");
    }
}
window.addEventListener("load", setup);