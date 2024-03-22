const setup = () => {
    let tekst = document.querySelectorAll('p')
    for( let i=0; i<tekst.length; i++){
        tekst[i].textContent = "Good job";
    }
}
window.addEventListener("load", setup);