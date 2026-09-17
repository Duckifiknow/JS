const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function Tilfeldig() {
let Terning = Math.ceil(Math.random()*6)
return Terning
}

function Terningspill() {
    Sum = 0
    Antallkast = 0
    while(Sum<=60){
        Kast = Tilfeldig()
        Antallkast += 1
    if(Antallkast>=100){
        break
    }
    if(Kast == 1){
        Sum = 0
        console.log("Kastnr.", Antallkast, "rullet en", Kast,"og du må starte på nytt")
    }
    else{
        Sum += Kast
        console.log("Kastnr.", Antallkast, "rullet en", Kast, "summen blir", Sum)
        }
    }
if(Antallkast>=100){
    console.log("Du brukte mer enn", Antallkast, "kast og tapte")
}
else{
    console.log("Du vant etter", Antallkast, "kast")
}

}
Terningspill()