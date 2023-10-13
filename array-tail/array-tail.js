const btn = document.querySelector(".btn-success");
const btn2 = document.querySelector(".btn-info");
const inputEl = document.getElementById("data");
const inputEl2 = document.getElementById("data-2");
const resultEl = document.querySelector(".alert");
const resultEl2 = document.querySelector(".alert2");

const userArray = [

]

btn.addEventListener("click", function(){
    let userValue = inputEl.value;
    userArray.splice(0,userArray.length)
    for(let i = 1; i <= userValue; i++){
        userArray.push(getRndInteger (0,100));
    }
    resultEl.innerHTML = userArray.slice(userArray.length - 5)
    resultEl.classList.remove("d-none")
    console.log(userArray)
}
)

btn2.addEventListener("click", function(){
    let print = inputEl2.value;
    if(print > userArray.length){
        resultEl2.innerHTML = "inserisci valore corretto!"
    } else {
        resultEl2.innerHTML = userArray.slice(0,print)
    }
    console.log(userArray)
    resultEl2.classList.remove("d-none")
    }
)
