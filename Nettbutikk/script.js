let tall = Math.ceil(Math.random()*100)
document.getElementById("mittTall").textContent = tall;

const container = document.getElementById("ting");
for (let produkt of produkter) {
    console.log(produkt.navn)

    container.innerHTML += `
        <div class="produktkort">
            <img src="${produkt.bilde}"></img>
            <p>${produkt.pris}kr</p>
        </div>
    `;
}