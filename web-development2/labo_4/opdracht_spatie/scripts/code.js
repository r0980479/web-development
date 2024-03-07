const setup = () => {

const submitBut = document.getElementById("submitBut");
submitBut.addEventListener("click", splitText)
}

const splitText = () =>{
    let tekstvak = document.getElementById("tekst").value

    let splitText = tekstvak.split("").join(" ");
    console.log("gesplitste tekst:", splitText)
}


window.addEventListener("load", setup);

