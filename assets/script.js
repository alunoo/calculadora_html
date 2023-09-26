const display = document.querySelector("input");

function digitar(valor) {
    //diplay.value = display.value + valor 
    display.value += valor
}

function limpar() {
    display.value = ""
}

function calcular() {
    //eval() transforma texto em algarismo em javascript
    display.value = eval(display.value)
}