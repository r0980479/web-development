const setup = () => {
    let sliderR = document.getElementById("red")/*[0]*/;
    let sliderG = document.getElementById("green")/*[0]*/;
    let sliderB = document.getElementById("blue")/*[0]*/;


    sliderR.addEventListener("input", update);
    sliderR.addEventListener("change", update);
    sliderG.addEventListener("input", update);
    sliderG.addEventListener("change", update);
    sliderB.addEventListener("input", update);
    sliderB.addEventListener("change", update);

    update();
}
const update =()=> {
    let txtRed = document.getElementById("txtRed");
    let txtGreen = document.getElementById("txtGreen")
    let txtBlue = document.getElementById("txtBlue")
    let sliderR = document.getElementById("red")/*[0]*/;
    let sliderG = document.getElementById("green")/*[0]*/;
    let sliderB = document.getElementById("blue")
    let colorPallete = document.getElementById("colorpallete");

    txtRed.textContent = "Red " + sliderR.value;
    txtGreen.textContent = "green " + sliderG.value;
    txtBlue.textContent = "Blue " + sliderB.value;

    colorPallete.style.backgroundColor = `rgb(${sliderR.value}, ${sliderG.value}, ${sliderB.value})`;

}

window.addEventListener("load", setup);