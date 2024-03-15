const setup = () => {
    let fruiten = ["banaan", "kiwi", "appel", "mango"];
    fruiten.sort((a,b) => a.localeCompare(b));
    console.log(fruiten);
}
window.addEventListener("load", setup);