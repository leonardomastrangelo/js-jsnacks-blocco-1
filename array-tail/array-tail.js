const btn = document.querySelector(".btn-success");
const btn2 = document.querySelector(".btn-info");
const inputEl = document.getElementById("data");
const resultEl = document.querySelector(".alert");

const userArray = [

]
btn.addEventListener("click", function(){
    userArray.splice(0,userArray.length)
    let userValue = inputEl.value;
    for(let i = 1; i <= userValue; i++){
        userArray.push(getRndInteger (0,100));
    }
    resultEl.innerHTML = userArray.slice(userArray.length - 5)
    resultEl.classList.remove("d-none")
    console.log(userArray)

}
)
