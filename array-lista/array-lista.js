// 1. creare l'array con la frutta del frigorifero
const fruits = [
    'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'
]
const msg = document.querySelector(".alert")
const button = document.querySelector("button")
// 2. aggiungere la pesca all'array della frutta
fruits.push("pesca");
console.log(fruits);
// 3. verificare se nell'array di frutta c'è il cocomero:
button.addEventListener("click", function () {
    for (let i = 0; i < fruits.length; i++) {
        let currentFruit = fruits[i]

        if (currentFruit === "cocomero") {
            msg.innerHTML =
                `
        Trovato! Devo solo preparare il cocktail.
        `
        } else {
            msg.innerHTML =
                `
            Oh no, devo uscire a comprare il cocomero!
            `
        }
    }
    msg.classList.remove("d-none")
}
)

