function contar(){
    let ini = document.querySelector("input#txti");
    let fim = document.querySelector("input#txtf");
    let passo = document.querySelector("input#txtp");
    let res = document.querySelector("section#res");
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível Contar';
        // alert("[ERROR] Faltam dados!");
    } else {
        res.innerHTML = "Contando: <br>";
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p <= 0){
            alert("Passo inválido! Considerando Passo 1");
            p = 1;
        }
        if (i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449} `;
            }
        } else {
            //contagem decrescente
            for(let c = i; c>=f; c -= p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += ` \u{1F3C1}`;
    }
}