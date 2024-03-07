const setup = () => {
    const textInput = document.getElementById("text");
    const buttonIndexOf = document.getElementById("buttonIndexOf");
    const buttonLastIndexOf = document.getElementById("buttonLastIndexOf");

    buttonIndexOf.addEventListener("click", () => {
        const tekst = textInput.value.toLowerCase();
        const doel = "an";

        let countIndexOf = 0;
        let index = tekst.indexOf(doel);
        while (index !== -1) {
            countIndexOf++;
            index = tekst.indexOf(doel, index + 1);
        }

        console.log("Het aantal keer dat 'an' voorkomt met indexOf: " + countIndexOf);
    });

    buttonLastIndexOf.addEventListener("click", () => {
        const tekst = textInput.value.toLowerCase();
        const doel = "an";

        let countLastIndexOf = 0;
        let index = tekst.lastIndexOf(doel);
        while (index !== -1) {
            countLastIndexOf++;
            index = tekst.lastIndexOf(doel, index - 1);
        }

        console.log("Het aantal keer dat 'an' voorkomt met lastIndexOf: " + countLastIndexOf);
    });
}
window.addEventListener("load", setup);