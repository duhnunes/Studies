const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const dist = document.querySelector('.distance');

const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPositionB = +window.getComputedStyle(mario).bottom.replace('px', '');
    const marioPosition = +window.getComputedStyle(mario).right;

    if(pipePosition <= 120 && pipePosition > 0 && marioPositionB < 100){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPositionB}px`;

        mario.src = './img/game-over.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }
} , 10);

document.addEventListener('keydown', jump);
