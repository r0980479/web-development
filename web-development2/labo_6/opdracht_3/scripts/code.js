const setup = () => {
    let button = document.querySelector("button")
    button.addEventListener("click", update)
}
const update =() =>{
    let div = document.getElementById('myDIV')
    let p = document.createElement('p');
    p.textContent= "TEST"
    div.appendChild(p);
}
window.addEventListener("load", setup);