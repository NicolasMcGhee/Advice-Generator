const adviceNumber = document.getElementById("advice-number")
const adviceSaying = document.getElementById("advice-saying")
const adviceGeneratorBtn = document.getElementById("advice-generator")

adviceGeneratorBtn.addEventListener("click", handleClick)

function handleClick() {
    fetch(`https://api.adviceslip.com/advice`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        adviceNumber.innerText = `Advice #${data.slip.id}`
        adviceSaying.innerText = `"${data.slip.advice}"`
    })
}

