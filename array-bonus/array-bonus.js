const frigorifero = [
    "mela",
    "mortadella",
    "focaccia",
    "insalata",
    "panino",
    "cavallo",
    "albero"
]

const congelatore = [
    "pippo",
    "baudo",
    "wow",
    "topolino",
    "paperino",
    "ciccino",
    "esperto",
    "ueue",
    "ahaahahah",
    "miao",
    "bau",
    "sos",
    "118",
    "cammelli"
]
const button = document.querySelector("button")
const p = document.querySelector("p")
const div = document.querySelector(".alert")
button.addEventListener("click", function() {

    let difference = congelatore.length - frigorifero.length;
    for(let i = 0; i < difference; i++) {
        frigorifero.push(getRndInteger(0,20))
    }
    console.log(frigorifero, congelatore)
    p.innerHTML = 
    `
    ${frigorifero} = ${frigorifero.length}
    `
    div.innerHTML = 
    `
    ${congelatore} = ${congelatore.length}
    `

}
)