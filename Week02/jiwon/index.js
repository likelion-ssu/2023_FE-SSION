// 230509 FE:SSION 2주차

let person = {
    name : "Jiwon",
}

person.age = 25
console.log(person.age)

delete person.age
console.log(person.age)

let str = "hello"
console.log(str.length)

// 함수 선언문으로 더하기 함수, 빼기 함수 만들기

function add(x, y) {
    return x + y
} 

function minus(x, y) {
    return x - y
}

// 함수 표현식으로 곱하기 함수, 나누기 함수 만들기

const multi = function(x, y) {
    return x * y
}

const divide = function(x, y) {
    return x / y
}

// 화살표 함수로 임의의 숫자 사칙연산 함수 만들어서 실행해보기

const four = (x, y, z, r) => x + y * z / r

// 결과

console.log(add(1, 2))
console.log(minus(7, 5))
console.log(multi(2, 2))
console.log(divide(6, 1))
console.log(four(1, 2, 3, 4))
