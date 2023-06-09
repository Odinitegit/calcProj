let aNumber = "";
let bNumber = "";
let operator = "";
let displayVal = "";

function add(a,b){
    return a + b ;
};

function subtract(a,b){
    return a - b ;
};


function multiply(a,b){
    return a * b;
};

function divide(a,b){
    return a / b;
}

function operate(num1,operator,num2){
    if(operator === "+"){
        return add(num1,num2); 
    }else if(operator === "-"){
        return subtract(num1,num2);
    }else if(operator ==="*"){
        return multiply(num1,num2);
    }else if (operator === "/"){
        return divide(num1,num2);
    }
}

const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operators")
const equalsButton = document.querySelector("#equals");

equalsButton.addEventListener("click",function(event){
    let result = operate(+aNumber,operator,+bNumber);
    displayVal = result;
    display();
    aNumber = result;
    operator = "";
    bNumber = "";
    })
   



operatorButtons.forEach((button) => button.addEventListener("click",function(event){
    operator = event.target.innerText;
    displayVal += operator;
    display();
}));
 
   
 
console.log(numberButtons)
numberButtons.forEach((button) => button.addEventListener("click",function(event){
     if(operator === ""){
        aNumber = event.target.innerText;
        displayVal = aNumber;
    }else{
        bNumber = event.target.innerText;
        displayVal = bNumber;
    }

    console.log(aNumber,bNumber,operator,displayVal)
   

    display();

    }));

function display(){
    document.getElementById("display").innerText = displayVal;

};

console.log(add);
console.log(subtract);
console.log(multiply);
console.log(divide);
