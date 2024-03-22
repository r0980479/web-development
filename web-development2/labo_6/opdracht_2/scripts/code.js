const setup = () => {
    let list = document.querySelectorAll('li')
        for(let i=0; i< list.length; i++){
            list.item(i).classlist.add('listitem');
        }
        let img =document.createElement('img')
    img.setAttribute('src', 'img/419067320_1065547977873116_1040514110926735621_n.jpg')
    document.body.appendChild(img);
}
window.addEventListener("load", setup);