let display = document.querySelector(".screen");
let digits = document.querySelectorAll(".digit");
let operators = document.querySelectorAll(".operator");
let clearScreen = document.querySelector(".all-clear");
let del = document.querySelector(".delete");
let decimal = document.querySelector(".decimal");
let equals = document.querySelector(".equals");
let specialFunctions = document.querySelectorAll(".specialFunction");

let additionRegex = /[+]{1}/g;
let subtractionRegex = /[-]{1}/g;
let divisionRegex = /[/]{1}/g;
let multiplicationRegex = /[*]{1}/g;
let decimalRegex = /^[\.]{1}$/g;
let rootRegex = /[√]{1}/g;
let sinRegex = /sin/g;
let cosRegex = /cos/g;
let tanRegex = /tan/g;

//display.innerText = '0';
startCalculator();

function startCalculator(){
    displayDigits();
    showDecimal();
    showOperators();
    handleAllClear();
    handleEquals();
    handleSpecialFuncs();
}

function updateDisplay(value){
    display.innerText += value;
    display.innerText = display.innerText.replace(undefined, '');
    let displayString  = display.innerText;

    //implementing DEL button
    if(displayString !== ""){
        del.addEventListener('click', (e) =>{
            displayString = displayString.substring(0, displayString.length-1);
            display.innerText = displayString;
        });
    }

    return displayString;
}

function displayDigits(){

    digits.forEach((digitKey) => {
        digitKey.addEventListener('click', (e) => {
            console.log("Key " + e.target.value + " pressed.");
            updateDisplay(e.target.value);
        });
    });
};


function showDecimal(){
    decimal.addEventListener('click', (e) =>{
        console.log("Decimal Key pressed.");
        if(display.innerText === ""){
            updateDisplay('0.');
        }
        else if(!display.innerText[display.innerText.length -1 ].includes('.'))
        {
            updateDisplay(e.target.value);
        }
        else{
            return;
        }
    });
};

function handleSpecialFuncs(){
    specialFunctions.forEach((key) =>{
        key.addEventListener('click', (e) =>{
            updateDisplay(e.target.value);
        });
    });
}

function showOperators(){
    operators.forEach((operatorKey) => {
        operatorKey.addEventListener('click', (e) => {
            if(display.innerText === ""){
                return;
            }
            else if(display.innerText[display.innerText.length-1].includes("+" || "-" || "/" || "*")){
                document.querySelectorAll(".operator").disabled = true;
            }
            else{
                updateDisplay(e.target.value);
                document.querySelectorAll(".operator").disabled = true;
            }
        });
    });
};

function handleAllClear(){
    clearScreen.addEventListener('click', (e) => {
        if(display.innerText !== ""){
            display.innerText = '';
        }
    });
};

function arithmeticOperations(){
    let displayValue = updateDisplay();
    let result;
    //console.log("on display :" + displayValue);

    if(displayValue.match(additionRegex)){
        isOperator = true;
        let val = displayValue.split('+');
        result = add(parseFloat(val[0]), parseFloat(val[1]));
        result = result.toFixed(6);
        display.innerText = result;
    }

    else if(displayValue.match(subtractionRegex)){
        let val = displayValue.split('-');
        result = subtract(parseFloat(val[0]), parseFloat(val[1]));
        result = result.toFixed(6);
        display.innerText = result;
    }
    
    else if(displayValue.match(divisionRegex)){
        let val = displayValue.split('/');
        result = divide(parseFloat(val[0]), parseFloat(val[1]));
        result = result.toFixed(6);
        display.innerText = result;
    }
    
    else if(displayValue.match(multiplicationRegex)){
        let val = displayValue.split('*');
        result = multiply(parseFloat(val[0]), parseFloat(val[1]));
        result = result.toFixed(6);
        display.innerText = result;
    }
    else if(displayValue.match(rootRegex)){
        let val = displayValue.split("√");
        result = getSquareRooot(parseFloat(val[1]));
        result = result.toFixed(6);
        display.innerText = result;
    }
    else if(displayValue.match(sinRegex)){
        let val = displayValue.split("sin");
        result = getSin(parseFloat(val[1]));
        result = result.toFixed(6);
        display.innerText = result;
    }
    else if(displayValue.match(cosRegex)){
        let val = displayValue.split("cos");
        result = getCos(parseFloat(val[1]));
        result = result.toFixed(6);
        display.innerText = result;
    }
    else if(displayValue.match(tanRegex)){
        let val = displayValue.split("tan");
        result = getTan(parseFloat(val[1]));
        result = result.toFixed(6);
        display.innerText = result;
    }
    return result;
}

function handleEquals(){
    equals.addEventListener('click', (e) => {
        arithmeticOperations();
    });
}

function clearDisplay(){
    return display.innerText = "";
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function divide(num1, num2){
    if(num2 === 0){
        return 'ERROR';
    }
    else{
        return num1 / num2;
    }
}

function getSquareRooot(num){
    console.log(num);
    return Math.sqrt(num);
}

function getSin(num){
    console.log(num);
    return Math.sin(num);
}

function getCos(num){
    console.log(num);
    return Math.cos(num);
}

function getTan(num){
    console.log(num);
    return Math.tan(num);
}

function multiply(num1, num2){
    return num1 * num2;
}

function zeroButton(){
    updateDisplay('0');
}

function oneButton(){
    updateDisplay('1');
}

function twoButton(){
    updateDisplay('2');
}

function threeButton(){
    updateDisplay('3');
}

function fourButton(){
    updateDisplay('4');
}

function fiveButton(){
    updateDisplay('5');
}

function sixButton(){
    updateDisplay('6');
}

function sevenButton(){
    updateDisplay('7');
}

function eightButton(){
    updateDisplay('8');
}

function nineButton(){
    updateDisplay('9');
}

function plusButton(){
    updateDisplay('+');
}

function subtractButton(){
    updateDisplay('-');
}

function divideButton(){
    updateDisplay('/');
}

function multiplyButton(){
    updateDisplay('*');
}

function equalButton(){
    let result = arithmeticOperations();
    clearDisplay();
    updateDisplay(result);
}

function dotButton(){
    if(display.innerText === ""){
        updateDisplay('0.');
    }
    else if(!display.innerText[display.innerText.length -1 ].includes('.'))
    {
        updateDisplay(e.target.value);
    }
    else{
        return;
    }
}

function deleteButton(){
    let displayString = display.innerText;
    if(displayString !== ""){
        displayString = displayString.substring(0, displayString.length-1);
        display.innerText = displayString;
    }
}

function resetScreen(){
    if(display.innerText !== ""){
        display.innerText = '';
    }
}

function rootButton(){
    updateDisplay("√");
}

function sineButton(){
    updateDisplay("sin");
}

function cosineButton(){
    updateDisplay("cos");
}

function tanButton(){
    updateDisplay("tan");
}

function keyboardListener(e){
    let keyPress = e.keyCode;

    if(keyPress == 48 || keyPress == 96){
        zeroButton();
    }

    if(keyPress == 49 || keyPress == 97){
        oneButton();
    }
    
    if(keyPress == 50 || keyPress == 98){
        twoButton();
    }

    if(keyPress == 51 || keyPress == 99){
        threeButton();
    }

    if(keyPress == 52 || keyPress == 100){
        fourButton();
    }

    if(keyPress == 53 || keyPress == 101){
        fiveButton();
    }

    if(keyPress == 54 || keyPress == 102){
        sixButton();
    }

    if(keyPress == 55 || keyPress == 103){
        sevenButton();
    }

    if(keyPress == 56 || keyPress == 104){
        eightButton();
    }

    if(keyPress == 57 || keyPress == 105){
        nineButton();
    }

    if(keyPress == 173 || keyPress == 109){
        subtractButton();
    }
    
    if(keyPress == 83 || keyPress == 115){
        sineButton();
    }
    
    if(keyPress == 67){
        cosineButton();
    }

    if(keyPress == 84 || keyPress == 116){
        tanButton();
    }

    if(keyPress == 82 || keyPress == 114){
        rootButton();
    }

    if(keyPress == 107){
        plusButton();
    }

    if(keyPress == 111){
        divideButton();
    }

    if(keyPress == 106){
        multiplyButton();
    }

    if(keyPress == 13){
        equalButton();
    }

    if(keyPress == 190){
        dotButton();
    }

    if(keyPress == 8){
        deleteButton();
    }

    if(keyPress == 27){
        resetScreen();
    }
}


document.getElementById("0").addEventListener('keydown', zeroButton);
document.getElementById("0").addEventListener('keydown', oneButton);
document.getElementById("0").addEventListener('keydown', twoButton);
document.getElementById("0").addEventListener('keydown', threeButton);
document.getElementById("0").addEventListener('keydown', fourButton);
document.getElementById("0").addEventListener('keydown', fiveButton);
document.getElementById("0").addEventListener('keydown', sixButton);
document.getElementById("0").addEventListener('keydown', sevenButton);
document.getElementById("0").addEventListener('keydown', eightButton);
document.getElementById("0").addEventListener('keydown', nineButton);
document.getElementById("+").addEventListener("keydown", plusButton);
document.getElementById("-").addEventListener("keydown", subtractButton);
document.getElementById("/").addEventListener("keydown", divideButton);
document.getElementById("*").addEventListener("keydown", multiplyButton);
document.getElementById("eq").addEventListener("keydown", equalButton);
document.getElementById("dot").addEventListener("keydown", dotButton);
document.getElementById("del").addEventListener("keydown", deleteButton);
document.getElementById("ac").addEventListener("keydown", resetScreen);
document.getElementById("sin").addEventListener("keydown", sineButton);
document.getElementById("cos").addEventListener("keydown", cosineButton);
document.getElementById("tan").addEventListener("keydown", tanButton);
document.getElementById("sqrt").addEventListener("keydown", rootButton);

window.addEventListener("keydown", keyboardListener);