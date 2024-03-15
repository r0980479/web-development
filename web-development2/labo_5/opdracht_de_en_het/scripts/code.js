const setup = () => {
    let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let zinmethet = zin.replace( /de /g, 'het ').replace(/^het /, 'het ').replace(/ $het/, 'het ')
    console.log(zinmethet)
}

window.addEventListener("load", setup);