const currencyFirstEl = document.getElementById("currency-first")

const worthFirstEl = document.getElementById("worth-first")

const currencySecondEl = document.getElementById("currency-second")

const worthSecondEl = document.getElementById("worth-second")

const exchangeRateEl = document.getElementById("exchange-rate")

updateRate()

function updateRate(){
    fetch(` https://v6.exchangerate-api.com/v6/1b5f58b434c90fdfd88315aa/latest/${currencyFirstEl.value}`
    )
    .then((res) =>res.json())
    .then((data) => {const rate = data.conversion_rates[currencySecondEl.value];
        console.log(rate);
        exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${((rate).toFixed(0)) + " " + currencySecondEl.value}`;

        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(0)
    });
}

currencyFirstEl.addEventListener("change", updateRate)

currencySecondEl.addEventListener("change", updateRate)

worthFirstEl.addEventListener("input", updateRate)