function add(a,b) {
    return a+b
}

function sub(a,b) {
    return a-b
}

function mult(a,b) {
    return a*b
}

function div(a,b) {
if (b === 0){
    return "Ділення на нуль не дозволено"
}
return a/b
}

function calculate() {
    
    const operation = prompt("що він хоче зробити (add, sub, mult, div)")
    const num1 = parseFloat(prompt("Введіть перше число"))
    const num2 = parseFloat(prompt("Введіть друге число"))
    let result;
    let operationSymbol;
    switch (operation) {
        case 'add':
          result = add(num1, num2);
          operationSymbol = '+';
          break;
        case 'sub':
          result = sub(num1, num2);
          operationSymbol = '-';
          break;
        case 'mult':
          result = mult(num1, num2);
          operationSymbol = '*';
          break;
        case 'div':
          result = div(num1, num2);
          operationSymbol = '/';
          break;
        default:
          alert('Невідома операція');
          return;
      }
    
      alert(`${num1} ${operationSymbol} ${num2} = ${result}`);
}
calculate()
