const setup = () => {
    const word = "onhoorbaar";

    const trigrams = [];
    for(let i = 0; i < word.length -2; i++){
        const substring = word.substring(i,i+3);
        trigrams.push(substring)
    }
 console.log(trigrams);
}
window.addEventListener("load", setup);