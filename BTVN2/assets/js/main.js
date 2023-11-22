// bai 1
let checkNumber = (num) => {
  if (num % 3 == 0 && num % 5 == 0) {
    return "FizzBuzz";
  } else if (num % 3 == 0) {
    return "Fizz";
  } else if (num % 5 == 0) {
    return "Buzz";
  }
  return "Khong chia het cho 3 va 5";
};

console.log(checkNumber(11));

// bai 2
let solveEquation = (a, b) => {
  if (a == 0) {
    return "phuong trinh vo nghiem";
  } else {
    return `phuong trinh co nghiem x = ${-b / a}`;
  }
  return 0;
};

console.log(solveEquation(6, 0));

// bai 3
let solveQuadraticEquation = (a, b, c) => {
  let delta = b * b - 4 * a * c;
  if (a == 0) {
    return "Khong phai phuong trinh abc hai";
  } else {
    if (delta < 0) {
      return "Phuong trinh vo nghiem";
    } else if (delta == 0) {
      return `Phuong trinh co nghiem duy nhat x1 = x2 = ${-b / (2 * a)}`;
    } else {
      return `x1 = ${(-b + Math.sqrt(delta)) / (2 * a)} va 
              x2 = ${(-b - Math.sqrt(delta)) / (2 * a)}`
    }
  }
  return 0;
};

console.log(solveQuadraticEquation(4, -2, -6));

// bai 4
let countBMI = (height, weight) => {
  return weight / Math.pow(height / 100, 2);
};

console.log(countBMI(169, 70));

// bai 5
let convertCToF = (C) => {
  return `F = ${C * (9 / 5) + 32}`;
};

console.log(convertCToF(38))