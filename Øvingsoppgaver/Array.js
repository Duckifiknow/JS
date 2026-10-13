let frukt = ["Eple", "Banan", "Kiwi"];

console.log(frukt)

frukt.push("pære")

for (let varer of frukt) {
    console.log(varer)
}

console.log(frukt)
console.log(frukt.length)

let handleliste = ["1. Melk", "2. Brød", "3. Ost", "4. Smør", "5. Salami"]

console.log(handleliste)

handleliste.push("6. Eple")
handleliste.push("7. Poteter")

for(let varer of handleliste){
    console.log(varer)
}