function carregar() {
    var msg = document.getElementById('msg');
    var msg2 = document.getElementById('msg2');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutes = data.getMinutes();
    msg.innerHTML = `Agora são exatamente: ${hora}:${minutes}`;
    if (hora >= 0 && hora < 12){
        msg2.innerHTML = 'Bom Dia';
        img.src = 'fotomanha.jpg';
        document.body.style.background = '#e2cd9f';
    } else if (hora >= 12 && hora < 18){
        msg2.innerHTML = 'Boa Tarde';
        img.src = 'fototarde.jpg';
        document.body.style.background = '#b9846f';
    } else {
        msg2.innerHTML = 'Boa Noite';
        img.src = 'fotonoite.jpg';
        document.body.style.background = '#515154';
    }
}
