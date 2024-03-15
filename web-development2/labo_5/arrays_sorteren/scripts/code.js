const setup = () => {
    const compare = (a,b) =>{
        return a-b;
    }
    const numbers = [35, 8, 19, 72, 66, 88, 3, 7, 21];
    numbers.sort(compare);

    console.log(numbers)
}
window.addEventListener("load", setup);