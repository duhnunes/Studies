function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('section#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        res.innerHTML = ('[ERROR] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked){
            genero = 'Homem';
            if (idade >= 0 && idade < 8){
                //BEBE
                img.setAttribute('src', 'fotobebehomem.jpg');
                img.classList.add('photo');
            } else if (idade < 15){
                //CRIANÇA
                img.setAttribute('src', 'fotocriancahomem.jpg');
                img.classList.add('photo');
            } else if (idade < 21){
                // JOVEM
                img.setAttribute('src', 'fotoadolecentehomem.jpg');
                img.classList.add('photo');
            } else if (idade < 60){
                //ADULTO
                img.setAttribute('src', 'fotoadultohomem.jpg');
                img.classList.add('photo');
            }else {
                // IDOSO
                img.setAttribute('src', 'fotoidosohomem.jpg');
                img.classList.add('photo');
            }
        } else if (fsex[1].checked){
            genero = 'Mulher';
            if (idade >= 0 && idade < 6){
                //BEBE
                img.setAttribute('src', 'fotobebemulher.jpg');
                img.classList.add('photo');
            } else if(idade < 15){
                //CRIANÇA
                img.setAttribute('src', 'fotocriancamulher.jpg');
                img.classList.add('photo');
            } else if (idade < 21){
                //JOVEM
                img.setAttribute('src', 'fotoadolecentemulher.jpg');
                img.classList.add('photo');
            } else if (idade < 60){
                //ADULTO
                img.setAttribute('src', 'fotoadultamulher.jpg');
                img.classList.add('photo');
            } else {
                //IDOSO
                img.setAttribute('src', 'fotoidosamulher.jpg');
                img.classList.add('photo');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`;
        res.appendChild(img);
    }
}