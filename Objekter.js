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

let elev = ["Alice", "Zoe", "Max", "Maya", "Ashly"]

let poeng = [76, 91, 42, 59, 60]

let elever = [
    {navn: "Alice", poeng: 76},
    {navn: "Zoe", poeng: 91},
    {navn: "Max", poeng: 42},
    {navn: "Maya", poeng: 59},
    {navn: "Max", poeng: 60}
]

for(let elev of elever){
    if (elev.poeng < 60){
        console.log(elev.navn + " fikk " + elev.poeng + " poeng - Ikke bestått");
    } else {
        console.log(elev.navn + " fikk " + elev.poeng + " poeng - Bestått");
    }
}