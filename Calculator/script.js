class Calculator {
  constructor(previousOperandNum, currentOperandNum) {
    this.previousOperandNum = previousOperandNum;
    this.currentOperandNum = currentOperandNum;
    this.currentOperand = "";
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
    this.currentOperandNum.innerText = "0";  // Reset current display
    this.previousOperandNum.innerText = "";  // Clear previous operand
}

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  selectOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.calculate();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  calculate() {
    let calculate;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    //kabhi kabhi hai, kabhi kabhi nahi hai
    //if (typeof prev !== "number" || typeof current !== "number") return;
    if (isNaN(prev) || isNaN(current)) return;
    
    const operations = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => b !== 0 ? a / b : "Error",
    };
  
    let result = operations[this.operation]?.(prev, current) ?? this.currentOperand;

    //result box se overflow prevention
    if (typeof result === "number") {
        result = parseFloat(result.toFixed(10)); // Round to 10 decimal places and remove trailing zeroes
    }
    
    this.previousOperandNum.innerText = `${prev} ${this.operation} ${current} =`;
    this.currentOperand = result;
    this.operation = undefined;
    this.previousOperand = "";
}

display() {
    if (this.operation != null) {
        this.previousOperandNum.innerText = `${this.previousOperand} ${this.operation}`;
    } 
    this.currentOperandNum.innerText = this.currentOperand;
}
}

const previousOperandNum = document.querySelector("[data-previous-operand]");
const currentOperandNum = document.querySelector("[data-current-operand]");
const acBtn = document.querySelector("[data-ac]");
const deleteBtn = document.querySelector("[data-delete]");
const numberBtn = document.querySelectorAll("[data-number]");
const operationBtn = document.querySelectorAll("[data-operation]");
const equalsBtn = document.querySelector("[data-equals]");

const calculator = new Calculator(previousOperandNum, currentOperandNum);

//Event listener for Number
numberBtn.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.display();
  });
});

//Event listener to obtain the operation
operationBtn.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.selectOperation(button.innerText);
    calculator.display();
  });
});

//Event listener to perform calculation when equals is clicked
equalsBtn.addEventListener("click", button => {
  calculator.calculate();
  calculator.display();
});
//

//Event listener - delete and all clear
deleteBtn.addEventListener("click", () => {
    calculator.delete();
    calculator.display();
});
  acBtn.addEventListener("click", () => {
    calculator.clear();
    calculator.display();
  });

