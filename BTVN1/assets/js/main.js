// bai 1
function checkMark(mark) {
    if(mark >= 85){
        console.log('A')
    }
    else if(mark >= 70 && mark < 85){
        console.log('B')
    }
    else if(mark >= 40 && mark < 70){
        console.log('C')
    }
    else {
        console.log('D')
    }
}

checkMark(20)

// bai 2
function compareNum(a, b) {
    if(a > b) {
        console.log(a)
    }
    else {
        console.log(b)
    }
}

compareNum(1, 3)

// bai 3
function checkNumber(num) {
    if(num < 0){
        console.log('La so am')
    }
    else if(num > 0){
        console.log('La so duong')
    }
    else {
        console.log('La so 0')
    }
}

checkNumber(12-12)

// bai 4
function checkNum(num) {
    if(num % 2 == 0){
        console.log('La so chan')
    }
    else{
        console.log('La so le')
    }
}

checkNum(5)

// bai 5
function checkNumDivide(num) {
    if(num % 3 == 0 && num % 5 == 0){
        console.log('So co chia het cho 3 va 5')
    }
    else {
        console.log('So khong chia het cho 3 va 5')
    }
}

checkNumDivide(16)

// bai 6
function checkSum(a, b, c) {
    if(a + b == c){
        console.log(`${a} + ${b} = ${c}`)
    }
    else {
        console.log('a + b khong bang c')
    }
}

checkSum(2,2,3)