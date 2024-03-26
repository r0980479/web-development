let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};


const setup = () => {
    let img = document.getElementById('target')
    img.addEventListener('click',verplaatsFoto);
    img.addEventListener('click', veranderFoto)
};

const verplaatsFoto = () =>{
    let target = document.getElementById('target')
    let playfield = document.getElementById('playField')

    let maxLeft=playfield.clientWidth - global.IMAGE_SIZE;
    let maxHeight=playfield.clientHeight - global.IMAGE_SIZE;

    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    target.style.left=left+"px";
    target.style.top=top+"px";
}

const veranderFoto = () =>{
let img = document.getElementById('target')
let random = Math.floor(Math.random()* global.IMAGE_COUNT)
let path =    global.IMAGE_PATH_PREFIX + random + global.IMAGE_PATH_SUFFIX;

img.setAttribute('src',path);
}


window.addEventListener("load", setup);


