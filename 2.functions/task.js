// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;
  min = arr[0];
  max = arr[arr.length - 1];
  sum = 0;
    for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if(arr[i] > max) {
      max = arr[i];
    };
    if(arr[i] < min) {
      min = arr[i];
    };
   avg = sum / arr.length;
  };
  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  };  
  return sum;
};

function makeWork(arrOfArr, fanc) {
 let sum = 0;
let max = fanc(arrOfArr[0]);
  for(let i = 0; i < arrOfArr.length; i++) {
    sum = fanc(arrOfArr[i]);
if(sum > max) {
max = sum;
};
    };
    return max;
};

// Задание 3
function worker2(arr) {
  let min,max,diff;
  min = arr[0];
  max = arr[arr.length - 1];
      for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    };
    if(arr[i] < min) {
      min = arr[i];
    };
    diff = max - min;
  };
    return diff;
  };
