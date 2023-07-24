function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('section#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERROR] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked){
            genero = 'Homem';
            if (idade >= 0 && idade < 10){
                //CRIANÇÃ
                img.setAttribute('src', 'fotobebehomem.jpg');
            } else if (idade < 21){
                // JOVEM
                img.setAttribute('src', 'fotoadolecentehomem.jpg');
            } else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'fotoadultohomem.jpg');
            }else {
                // IDOSO
                img.setAttribute('src', 'fotoidosohomem.jpg');
            }
        } else if (fsex[1].checked){
            genero = 'Mulher';
            if (idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'fotobebemulher.jpg');
            } else if (idade < 21){
                //JOVEM
                img.setAttribute('src', 'fotoadolecentemulher.jpg');
            } else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'fotoadultamulher.jpg');
            } else {
                //IDOSO
                img.setAttribute('src', 'fotoidosamulher.jpg');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`;
        res.appendChild(img);
    }
}