let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')

let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')

let btn9 = document.getElementById('btn9')
let btn0 = document.getElementById('btn0')
let btnAdd = document.getElementById('btnAdd')
let btnSub = document.getElementById('btnSub')

let btnMulti = document.getElementById('btnMulti')
let btnRestart = document.getElementById('btnRestart')
let btnResult = document.getElementById('btnResult')
let btnModulo = document.getElementById('btnModulo')

function calculer()
{
    let a = document.getElementById("output").value
    let b = eval(a)
    document.getElementById("output").value = b
}

function afficher(val)
{
    document.getElementById("output").value+=val
}

function effacer()
{
    document.getElementById("output").value = ""
}

btn1.addEventListener('click', function (){
    afficher('1')
})
btn2.addEventListener('click', function (){
    afficher('2')
})
btn3.addEventListener('click', function (){
    afficher('3')
})
btn4.addEventListener('click', function (){
    afficher('4')
})
btn5.addEventListener('click', function (){
    afficher('5')
})
btn6.addEventListener('click', function (){
    afficher('6')
})
btn7.addEventListener('click', function (){
    afficher('7')
})
btn8.addEventListener('click', function (){
    afficher('8')
})
btn9.addEventListener('click', function (){
    afficher('9')
})
btn0.addEventListener('click', function (){
    afficher('0')
})
btnAdd.addEventListener('click', function (){
    afficher('+')
})
btnSub.addEventListener('click', function (){
    afficher('-')
})
btnMulti.addEventListener('click', function (){
    afficher('*')
})
btnModulo.addEventListener('click', function (){
    afficher('%')
})
btnResult.addEventListener('click', function (){
    calculer()
})
btnRestart.addEventListener('click', function (){
    effacer()
})





/*

Autre manière de faire calculette

for(let i = 0; i < button.length; i++){
    button[i].addEventListener("click", function (){
        myFunc(i)
    })
}

function myFunc(i) {
    switch(button[i].innerText)
    {
        case "=":
            result.value = eval(result.value)
            break;
        case "AC":
            result.value = "";
            break;
        default:
            result.value += result[i].innerHTML;
    }
}
*/
