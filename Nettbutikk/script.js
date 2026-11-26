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

        function visHandlekurv() {
            const liste = document.getElementById("kurvListe");
            liste.innerHTML = "";
            for (let produkt of handlekurv) {
                liste.innerHTML += `
                <p>
                ${produkt.navn}-${produkt.pris}kr
                </p>
                `;
            }
        }
        visHandlekurv()
        const kurvPopup = document.getElementById("kurvPopup");
        const kurvKnapp = document.getElementById("kurvKnapp");
        const lukkKurv = document.getElementById("lukkKurv");
        kurvKnapp.addEventListener("click", () => {

             
            kurvPopup.style.display = "flex";

        });
        lukkKurv.addEventListener("click", () => {

            kurvPopup.style.display = "none";

        });

        console.log(handlekurv)
        console.log("Produkt-id:", id)
        console.log(valgtProdukt.navn)
    })


})




