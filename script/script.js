

var calcular = document.getElementById('btn')


calcular.addEventListener('click', imc)

function imc () {

    var nome = document.getElementById('nome').value
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value
    var res = document.getElementById('res')

    if (nome !== '' && altura !== '' && peso !== '') {
       var valorIMC = (peso / (altura * altura)).toFixed(1)

       var result = ''

       if (valorIMC < 18.5) {
            result = 'abaixo do peso' 
       } else if (valorIMC < 25) {
        result = 'com peso ideal.'
       } else if (valorIMC < 30) {
            result = 'levemente acima do peso'
       } else if (valorIMC < 35) {
            result = 'com obesidade grau I'
       } else if (valorIMC < 40) {
        result = 'com obesidade grau II'
       } else {
        result = 'com obesidade grau III'
       }

       res.innerHTML = `${nome}, seu IMC é ${valorIMC} e você está ${result}.`
    } else {
        res.innerHTML = 'Preencha todos os campos!'
    }
}


