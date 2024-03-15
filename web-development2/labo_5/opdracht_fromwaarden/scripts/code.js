const setup = () => {
    let bSubmit = document.getElementById("button")
    bSubmit.addEventListener("click", printInfo)
}

const printInfo= () =>{
    let isRoker = document.getElementById("isroker")
    if (isRoker.checked){
        console.log("is een roker")
    }else{
        console.log("is geen roker")
    }

let moederTaal = document.getElementsByName("taal")
    for (let i = 0; i < moederTaal.length; i++ ){
        if (moederTaal[i].checked){
            console.log(`moedertaal is ${moederTaal[i].value}.`);
            break;
        }
    }


let favBuurland = document.getElementById("fBuurland").options
        for ( let i = 0; i < favBuurland.length; i++){
            if(favBuurland[i].selected) {
                console.log(`favoriete buurland is ${favBuurland[i].value}.`);
            }
        }

let bestellingen = document.getElementById("bestelling").options
    nietChecked = true
    for (let i = 0; i < bestellingen.length; ++i){
        if(bestellingen[i].selected){
            bestelling += `${bestellingen[i].value} `
            nietChecked = false
        }
    }
    if(nietChecked) {
        console.log('Er is geen bestelling')
    } else {
        console.log(`Bestelling bestaat uit ${bestelling.trim()}`)
    }

}





window.addEventListener("load", setup);