let elev = {
    navn: "Alice",
    alder: 17,
    poeng: 89,
    klasse: "2ImI"
}

elev.poeng = 85

console.log(elev.navn)
console.log(elev.alder)
console.log(elev.poeng)
console.log(elev.klasse)
console.log(elev)

let produkt = {
    navn: "Tastatur",
    pris: 599,
    antall: 0
}

console.log(produkt.navn, "koster", produkt.pris, "kr")
if (produkt.antall > 0){
    console.log("Vi har", produkt.antall, "på lager");
} else {
    console.log("Utsolgt");
}

lagerverdi = produkt.pris * produkt.antall;

console.log("Total lagerverdi:", lagerverdi)

function visProdukt(produkt){
    console.log(produkt.navn + "-" + produkt.pris + "kr");
}

visProdukt(produkt);

let produkt2 = {
    navn:"Mus",
    pris: 299,
    antall: 8
}

function visProdukt(produkt2){
    console.log(produkt2.navn + "-" + produkt2.pris + "kr");
    console.log("antall" + "-" + produkt2.antall)
}

visProdukt(produkt2);