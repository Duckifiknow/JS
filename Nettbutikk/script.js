let tall = Math.ceil(Math.random() * 100)
document.getElementById("mittTall").textContent = tall;

const container = document.getElementById("ting");
for (let produkt of produkter) {
    console.log(produkt.navn)

    container.innerHTML += `
        <div class="produktkort">
            <img src="${produkt.bilde}"></img>
            <p>${produkt.pris}kr</p>
            <button class="produktknapp" data-id="${produkt.id}">Legg i handlekurv</button>
        </div>
    `;
}

const knapper = document.querySelectorAll(".produktknapp");
knapper.forEach(knapp => {
    knapp.addEventListener("click", () => {
        let id = Number(knapp.dataset.id);
        let valgtProdukt = produkter.find(
            produkt => produkt.id === id
        )

        function oppdaterAntall() {
            document.getElementById("antallKurv").textContent =
                handlekurv.length
        }

        handlekurv.push(valgtProdukt)

        oppdaterAntall()
        
        console.log("Produkt-id:", id)
        console.log(valgtProdukt.navn)
    })


})


