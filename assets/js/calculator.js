const resultElement = document.getElementById('result')
const num1 = document.getElementById('input-number-one')
const num2 = document.getElementById('input-number-to')
const clickMinus = document.getElementById('minus')
const clickPlus = document.getElementById('plus')



clickPlus.onclick = clickMinus.onclick = function () {
    const sum = Number(num1.value) + Number(num2.value)
    colorResult(resultElement.textContent = sum)
}

clickMinus.onclick = function () {
    const minus = Number(num1.value) - Number(num2.value)
    colorResult(resultElement.textContent = minus)
}
function colorResult () {
    if (resultElement.textContent > 0) {
        resultElement.style.color = ('green')
    } else {
        resultElement.style.color = ('red')
    }
}
                    /* Calculate end */