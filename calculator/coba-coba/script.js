const btn = document.querySelectorAll("button")
const layar = document.getElementById("result")

for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", ()=>{
        const btnNilai = btn[i].textContent
        if (btnNilai === "C"){
            clearResult()
        } else if (btnNilai === "=") {
            calculateResult()
        } else {
            appendValue(btnNilai)
        }
    })
}

function calculateResult(){
    layar.value = eval(layar.value)
}

function appendValue(btnNilai){
    layar.value += btnNilai
}

function clearResult(){
    layar.value =""
}