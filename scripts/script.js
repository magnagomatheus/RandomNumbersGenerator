const QTDNUM = document.getElementById("qtd_numbers");
const FROM = document.getElementById("from");
const TO = document.getElementById("to");
const TOGGLE = document.getElementById("toggleSwitch");
const FORM = document.querySelector("form");
const sectionNumberDraw = document.getElementById("numberDraw");
const divBefore = document.getElementsByClassName("beforeSort");
const btnAgain = document.createElement("button");


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
        showNumbers();
        //console.log(sortedNumbers);
    } catch(error) {
        alert("Nao foi possivel sortear os numeros, tente novamente!");
        console.log(error);
    }
}

function showNumbers() {
    try 
    {
        divBefore[0].classList.add('invisible');
        const divAfter = document.createElement("div");
        divAfter.classList.add("afterSort");

        const results = document.createElement("div");
        results.classList.add("showResults");

        const title = document.createElement("h3");
        title.textContent = `Os números sorteados foram:`;

        //results.append(title);
        /*results.innerHTML = 
        `
            <h3>Os números sorteados foram:</h3>
        `;*/
        console.log("vai comecar o for");
        for(let i = 0; i < QTDNUM.value; i++) {
            const numberSorted = sortedNumbers[i];
            console.log(`Number Sorted ${numberSorted}`);
            const divNumberSorted = document.createElement("div");
            divNumberSorted.classList.add("numberSorted");
            divNumberSorted.innerHTML = `<h2>${numberSorted}</h2>`;
            results.append(divNumberSorted);
        }
        console.log("Terminou o for");

        divAfter.append(title, results, btnAgain);

        btnAgain.textContent = "Sortear novamente?";

        sectionNumberDraw.append(divAfter);

        btnAgain.onclick = () => {

            sectionNumberDraw.removeChild(divAfter);
            sortedNumbers = [];
            QTDNUM.value = 0;
            FROM.value = 0;
            TO.value = 0;
            divBefore[0].classList.remove('invisible');
        }
        
    } catch(e) 
    {
        alert("Nao foi possivel mostrar o numeros sorteados, tente novamente!");
        console.log(e);
    }
}

//const divAfter = document.getElementsByClassName("afterSort");

