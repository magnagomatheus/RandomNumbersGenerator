const QTDNUM = document.getElementById("qtd_numbers");
const FROM = document.getElementById("from");
const TO = document.getElementById("to");
const TOGGLE = document.getElementById("toggleSwitch");
const FORM = document.querySelector("form");


let sortedNumbers = [];


FORM.onsubmit = (event) => {
    event.preventDefault();

    let max = TO.value;
    let min = FROM.value;
    let number;

    for (i = 0; i < QTDNUM.value; i++) {
        number = Math.floor(Math.random() * (max - min) + min);
        if (TOGGLE.checked && sortedNumbers.length < ((max - min) + 1)) {
            while(sortedNumbers.includes(number)) {
                console.log("Este numero ja existe, sorteando outro!!!");
                number = Math.floor(Math.random() * (max - min) + min) + 1;
            }
            sortedNumbers.push(number);
        } else if(!TOGGLE.checked) {
            sortedNumbers.push(number);
        }
    }
    console.log(sortedNumbers);
}
console.log(sortedNumbers);