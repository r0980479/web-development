const setup = () => {
    let Bbereken = document.getElementById("herbereken");

    Bbereken.addEventListener("click", updateTable);
}

const updateTable = () => {
    let parameter1 = document.getElementsByClassName("parameter");
    let text1 = document.getElementsByClassName("text");
    let value1 = document.getElementsByClassName("waarde");
    let btw = document.getElementsByClassName("BTW");

    let totaal = 0;
    for(let i=0; i< parameter1.length; i++){
        let subtotaal= parseFloat(value1[i].textContent) * parameter1[i].value;
        let BTW = subtotaal * (parseFloat (btw[i].textContent) / 100);
        let subtotaalBTW = subtotaal + BTW;
        text1[i].textContent = `${subtotaalBTW.toFixed(2)} EURO`;

        totaal = totaal + subtotaal;
    }
    text1[text1.length-1].textContent =  `${totaal.toFixed(2)} EURO`;

}
window.addEventListener("load", setup);