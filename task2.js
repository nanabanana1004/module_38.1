function calculate(a, b, operator) {
  switch (operator) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return a / b;
    default: return "Ошибка оператора";
  }
}

const params = [2, 3, "+"]; 
const result = calculate.apply(null, params);

console.log(result);
