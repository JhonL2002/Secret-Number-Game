let secretNumber;
let attempts;
//  Declare a list
let showedNumbers = [];
let maxNumber = 10;

function assignElementText(element, text){
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML= text;
}

function verifyAttempt(){
    let userNumber = parseInt(document.getElementById("userValue").value);
    //console.log(secretNumber);
    console.log(userNumber === secretNumber);
    if (userNumber === secretNumber){
        assignElementText("p",`You have guessed the secret number in ${attempts} ${(attempts === 1) ? 'attempt' : 'attempts'}!!!`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if (userNumber > secretNumber){
            assignElementText("p","The secret number is less");
        } else{
            assignElementText("p","The secret number is greater");
        }
        attempts++;
        clearBox();
    }
}

function clearBox () {
    let boxValue = document.querySelector("#userValue")
    boxValue.value = "";
}

function randomNumber() {
    let generatedNumber = Math.floor(Math.random()*maxNumber)+1;
    if (showedNumbers.length == maxNumber){
        assignElementText("p","Ya se sortearon todos los números posibles");
    }else{
        if (showedNumbers.includes(generatedNumber)){
            return randomNumber();
        } else {
            showedNumbers.push(generatedNumber);
            return generatedNumber;
        }
    }
}

function initialConditions(){
    assignElementText("h1","Juego del número secreto");
    assignElementText("p",`Indica un número del 1 al ${maxNumber}`);
    secretNumber = randomNumber();
    attempts = 1;
}

function restartGame(){
    clearBox();

    initialConditions();

    document.querySelector("#reiniciar").setAttribute("disabled", "true");
    
}

initialConditions();
