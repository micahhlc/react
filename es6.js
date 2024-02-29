
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;
  const power = a ** b;
  const modulus = a % b;

  return [add, subtract, multiply, divide, power, modulus];
}

const [add, subtract, multiply, divide, power, modulus] = calculate(4, 3);
const mathfunc = calculate(8,3);
// console.log(add, subtract, multiply, divide, power, modulus);
// console.log(mathfunc)

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  console.log(myUpdatedVehicle)