const QTDNUM = document.getElementById("qtd_numbers");
const FROM = document.getElementById("from");
const TO = document.getElementById("to");
const TOGGLE = document.getElementById("toggleSwitch");
const FORM = document.querySelector("form");


let sortedNumbers = [];

// Impede que o usuario digite algo diferente de um numero positivo.
QTDNUM.onkeydown = (e) => {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}

// Impede que o usuario digite algo diferente de um numero positivo.
FROM.onkeydown = (e) => {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}

// Impede que o usuario digite algo diferente de um numero positivo.
TO.onkeydown = (e) => {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}


FORM.onsubmit = (event) => {
    event.preventDefault();

    try {
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
    } catch(error) {
        alert("Nao foi possivel sortear os numeros, tente novamente!");
        console.log(error);
    }
}