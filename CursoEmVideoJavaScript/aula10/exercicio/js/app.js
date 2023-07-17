var tn1 = document.getElementById('txtn1');
var tn2 = document.getElementById('txtn2');
var res = document.getElementById('res');


function somar(){
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var r = n1 + n2;
    res.innerHTML = `Resultado: ${r}`;
}

function sub(){
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var r = n1 - n2;
    res.innerHTML = `Resultado: ${r}`;
}

function mult(){
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var r = n1 * n2;
    res.innerHTML = `Resultado: ${r}`;
}

function div(){
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var r = n1 / n2;
    res.innerHTML = `Resultado: ${r}`;
}