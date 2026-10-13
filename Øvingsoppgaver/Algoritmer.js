// let tall = [13, 77, 91, 98, 9]

// let søk = Math.ceil(Math.random()*100);
// //let søk = 77
// let funnet = false
// let antallsøk = 0

// for(let verdi of tall) {
//     antallsøk++
//     if(verdi == søk){
//         funnet = true;
//         break
//     }
// }

// if(funnet == true){
//     console.log("fant tallet", søk)
// }
// else{
//     console.log("fant ikke tallet")
// }

// console.log(søk)
// console.log(antallsøk)

let produkter = [
    { navn: "Mus", pris: 299 },
    { navn: "Tastatur", pris: 599 },
    { navn: "Skjerm", pris: 2499 },
    { navn: "Webkamera", pris: 749 }
];


function finnprodukt(produkter, navn) {
    let søk = navn;
    let funnet = false
    antallsøk = 0

    for (let produkt of produkter) {
        antallsøk++
        if (produkt.navn == søk) {
            funnet = true;
            console.log("fant produkt", søk, "pris:", produkt.pris)
            break
        }
    }
}
finnprodukt(produkter, "Mus");

let elever = [
    { navn: "Ali", poeng: 67 },
    { navn: "Nora", poeng: 89 },
    { navn: "Sofie", poeng: 42 },
    { navn: "Jonas", poeng: 76 },
    { navn: "Emma", poeng: 95 }
];

function resultater(elever){
    let sum = 0
    let høyest = elever[0].poeng;
    let lavest = elever[0].poeng;
    let bestått = 0
    for(let resultat of elever){
        sum += resultat.poeng
        if(resultat.poeng > høyest){
            høyest = resultat.poeng;
        }
        if(resultat.poeng < lavest){
            lavest = resultat.poeng;
        }
        if(resultat.poeng > 60){
            bestått ++;
        }
    }
    console.log("Summen av poengene til alle elevene er", sum)
    console.log("Gjennomsnitt av poengene er", sum/elever.length)
    console.log("Høyeste poengsum er", elever.navn, "med", høyest)
    console.log("laveste poengsum er", lavest)
    console.log(bestått)
}

resultater(elever)