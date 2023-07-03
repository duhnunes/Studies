const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () => {
    const name = prompt("What's your name?");
    alert(`Helo ${name}, nice to see you`);
    headingA.textContent = `Welcome ${name}`;
};
;;;;
// ========================================= CREATING VARIABLES =========================================;
let myName = "Chris";
let myAge = 37;
let myDog = "Rover";

// ========================================= USING VAR =========================================;
myName2 = "Chris";

function logName() {
    console.log(myName2);
}

logName();

var myName2;
// ========================================= ARRAYS =========================================
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];

// ========================================= OBJETOS =========================================
let dog = {name: "Spot", breed: "Dalmatian"};