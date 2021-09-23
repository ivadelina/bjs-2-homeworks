"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  let d;
  d = (b ** 2 - 4 * a * c);
  if(d < 0) {
    arr; 
  } else if(d === 0) {
    x1 = (-b / (2 * a));
    arr.push(+x1.toFixed(2));
  } else if(d > 0) {
    x1 = ((-b + Math.sqrt(d) ) / (2 * a)); 
    x2 = ((-b - Math.sqrt(d) ) / (2 * a));
    arr.push(+x1.toFixed(2), +x2.toFixed(2));
    };
  return arr; 
};



function calculateTotalMortgage(percent, contribution, amount, date) {
/*   percent = parseFloat(percent);
  contribution = parseFloat(contribution);
  amount = parseFloat(amount);  */
    if((isNaN(percent) === true) || (percent < 0)) {
    return (`Параметр "Процентная ставка" содержит неправильное значение ${percent}`)
  } else if((isNaN(contribution) === true) || (contribution < 0)) {
    return (`Параметр "Первоначальный взнос" содержит неправильное значение ${contribution}`)
  } else if((isNaN(amount) === true) || (amount < 0)) {
    return (`Параметр "Общая стоимость" содержит неправильное значение ${amount}`)
  } 
  let totalAmount;
  let sumOfCredit = amount - contribution;
  console.log(sumOfCredit);
  let periodOfCredit = Math.round((+date - Date.now()) / 2628000000) ; 
  console.log(periodOfCredit);
  let percentInMonth = percent / 1200;
  console.log(percentInMonth);
  let payPerMonth = sumOfCredit * (percentInMonth + percentInMonth / (((1 + percentInMonth) ** periodOfCredit) - 1));
  totalAmount = +(payPerMonth * periodOfCredit).toFixed(2);
  console.log(totalAmount)
  return totalAmount
}
