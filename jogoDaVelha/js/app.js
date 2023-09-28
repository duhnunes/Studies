const cell = document.querySelectorAll('.icon');
let checkTurn = true;

const playerX = "../img/X.jpg";
const playerO = "../img/bolinha.jpg";

const playerNames = {
    [playerX]: "Player 1",
    [playerO]: "Bot"
}

const room = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

document.addEventListener('click', (event) => {
    if(event.target.matches('.icon')){
        playGame(event.target.id);
    }
});

const playGame = (id) => {
    const icon = document.getElementById(id);
    const turn = checkTurn ? playerX : playerO;
    icon.src = turn;
    icon.textContent = turn;
    icon.classList.add(turn);
    checkWinner(turn);
}

const checkWinner = (turn) => {
    const winner = room.some((comb) => {
        return comb.every((index) => {
            return cell[index].classList.contains(turn);
        })
    });

    if(winner){
        finishGame(turn);
    }else if(checkDraw()){
        finishGame();
    }else{
        checkTurn = !checkTurn;
    }
}

const checkDraw = () => {
    let x = 0;
    let o = 0;

    for(index in cell){
        if(!isNaN(index)){
            if(cell[index].classList.contains(playerX)){
                x++;
            }
            if(cell[index].classList.contains(playerO)){
                o++;
            }
        }
    }

    return x + o === 9 ? true : false;
}

let h2 = null;
const overlay = () => {
    const main = document.querySelector('.florPreta');
    const overlay = document.createElement('span');
    h2 = document.createElement('h2');

    const sec = document.createElement('section');
    const btn = document.createElement('button');
    
    main.appendChild(overlay);
    overlay.setAttribute('class', 'overlay');
    overlay.appendChild(h2);
    h2.setAttribute('class', 'overh2');

    overlay.appendChild(sec);
    sec.setAttribute('class', 'btnsArea');
    sec.appendChild(btn);
    btn.type = "button";
    btn.setAttribute('class', 'btn');
    btn.textContent = "Restart";

    btn.addEventListener('click', () => {
        document.location.reload();
    });
}

const finishGame = (winner = null) => {
    overlay();
    console.log("winner:", winner);
    if(winner){
        const winnerName = playerNames[winner];
        console.log("winnerName:", winnerName);
        h2.innerHTML = `Ganhador: ${winnerName}`;
    }else{
        h2.innerHTML = `Velha!`;
    }
};
