function pegar(){
    let name = document.getElementById('txtn');
    let idade = document.getElementById('txti');
    let tel = document.getElementById('txttel');
    let pais = document.getElementById('txtp');
    let res = document.getElementById('res');
    
    if (name.value == 0 || idade.value == 0 || tel.value == 0 || pais.value == 0){
        alert("[ERROR] Formulário inválido! Todos campos são obrigatórios.");
    } else {
        res.classList.add('box');
        res.innerHTML = `<p>Olá <strong>${name.value}</strong>!</p>`;
        res.innerHTML += `<p>Você tem <strong>${idade.value}</strong></p>`
        res.innerHTML += `<p>Seu telefone é: <strong>${tel.value}</strong></p>`;
        if(pais == 'brasil' || pais == 'Brasil'){
            res.innerHTML += `<p>Seu país é: <strong>${pais.value}</strong>, você é brasileiro(a)</p>`;
        } else {
            res.innerHTML += `<p>Seu país é: <strong>${pais.value}</strong>, você é estrangeiro(a)</p>`;
        }
    }
}