const btn = document.querySelector("button");
const inputEl = document.getElementById("data");
const resultEl = document.querySelector(".alert");

const userArray = [

]
btn.addEventListener("click", function(){

    let userValue = inputEl.value;
    for(let i = 1; i <= userValue; i++){
        userArray.push(i);
    }
    resultEl.innerHTML = userArray.slice(userArray.length - 5)
    resultEl.classList.remove("d-none")
}
)
