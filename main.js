let aNumber = null;
let bNumber = null;
let operator = "";
let displayVal = "";
let displayVal2 = "";
let lastClickedButton = null;


//figure out negatives bug


//prevent overflow


// add in second display above main Extra credit


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
    if( b === 0){
        return "You can't divide by 0!"
     }
    return a / b;
};



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
        
    
};




const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operators")
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear")
const decimalButton = document.querySelector("#decimal")
const buttons = document.querySelectorAll("button")
const deleteButton = document.querySelector("#delete");

//add Delete/backspace button

deleteButton.addEventListener("click", function(event) {
  let activeNum = operator === "" ? aNumber : bNumber ;
  if (activeNum === aNumber){
    aNumber = "";
  }else if(activeNum === bNumber){
    bNumber = "";
  }else if(activeNum === operator){
    operator = "";
  }
  
  displayVal = displayVal.toString();
  displayVal = displayVal.slice(0, -1);
  display();
});





buttons.forEach((button) => {
    button.addEventListener('click',function(event){
        lastClickedButton = event.target.innerText;
        console.log(lastClickedButton)
    });
});

function getLastClickedButton(){
    return lastClickedButton;
}



decimalButton.addEventListener("click", function (event) {
    let activeNum = operator === "" ? aNumber : bNumber ;
    if (!activeNum.includes(".")){
        displayVal += event.target.innerText;
    if(operator === ""){
        aNumber += event.target.innerText
    }else{
        bNumber += event.target.innerText
    }
     display();
    }
  });




  equalsButton.addEventListener("click", function (event) {
    if (operator !== "") {
      let result = operate(+aNumber, operator, +bNumber);
      displayVal = result;
      display();
      aNumber = result;
      operator = "";
      bNumber = "";
    } else {
      displayVal = aNumber;
      display();
    }
  });
  


clearButton.addEventListener("click",function(event){
    aNumber = "";
    bNumber = "";
    operator = "";
    displayVal = "";
    display();
});

console.log(aNumber,bNumber,operator,displayVal)

operatorButtons.forEach((button) => button.addEventListener("click",function(event){
    const displayValStr = String(displayVal);
    if(displayValStr.includes("+") || 
       displayValStr.includes("-") || 
       displayValStr.includes("*") || 
       displayValStr.includes("/") 
     ){
        let result = operate(+aNumber,operator,+bNumber);
        displayVal = result;
        operator = event.target.innerText;
        displayVal += operator;
        display();
        aNumber = result ;
        operator = event.target.innerText;
        bNumber = "";
        



 }else{
    operator = event.target.innerText;
    displayVal += operator;
    display();
}
    

}));

console.log(aNumber,bNumber,operator,displayVal)

 
console.log(numberButtons)

numberButtons.forEach((button) =>
  button.addEventListener("click", function (event) {
    if (operator === "") {
      aNumber = aNumber ? aNumber + event.target.innerText : event.target.innerText;
      displayVal += event.target.innerText;
    } else {
      bNumber = bNumber ? bNumber + event.target.innerText : event.target.innerText;
      displayVal += event.target.innerText;
      
    }

    console.log(aNumber, bNumber, operator, displayVal);

    display();
  })
);


    console.log(aNumber,bNumber,operator,displayVal)
   

  
  display2();


  function display2(){
    document.getElementById("display2").innertext = displayVal2;
  }

    function display(){
    let startDisplay = 0;
    document.getElementById("display").innerText = displayVal || startDisplay;

};

document.addEventListener('keydown', function(event) {
  const key = event.key;  // get the key pressed

  if (!isNaN(key) || key === '.') {
      // if it's a number or decimal point
      document.querySelector(`button[data-key="${key}"]`).click();
  } else {
      // for the operators, equals, clear, and backspace operations
      let operatorKey;
      switch (key) {
          case '+':
              operatorKey = 'add';
              break;
          case '-':
              operatorKey = 'subtract';
              break;
          case '*':
              operatorKey = 'multiply';
              break;
          case '/':
              operatorKey = 'divide';
              break;
          case '=':
          case 'Enter':  // using enter as equals
              operatorKey = 'equals';
              break;
          case 'Backspace':
          case 'Delete':
              operatorKey = 'delete'
              break;
         case 'Escape':  // using delete key as clear
              operatorKey = 'clear';
              break;
          default:
              return;  // if key does not match any case, just return
      }
      document.querySelector(`#${operatorKey}`).click();
  }
});


 






display();


console.log(add);
console.log(subtract);
console.log(multiply);
console.log(divide);
