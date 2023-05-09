//변수 선언
const firstName = "준규";
let lastName = "이";

// console.log(firstName, lastName);

//변수 변경
// firstName = "중규"; //Error!
lastName = "김";
// console.log(firstName, lastName);

// 호이스팅 테스트
// console.log(hoi); // (선언 + 초기화 된 상태)
// hoi = "가 계속되면 .. 둘리인줄 알지"; // (선언 + 초기화 + 할당 된 상태)
// var hoi;
// console.log(hoi);

// 데이터 타입 테스트
// const whatType = "I am string";
// console.log(typeof whatType);

//배열 만들기 (빈 배열)
// let arr1 = [];
// let arr2 = new Array();

// arr1[0] = "one";
// arr1[1] = "two";
// arr1[2] = "three";
// console.log(arr1);

// arr2[0] = "one";
// arr2[1] = "two";
// arr2[2] = "three";
// console.log(arr2);

//배열 만들기 (초기 값 할당)
// let arr1 = ["one", "two", "three"];
// let arr2 = new Array("one", "two", "three");

// console.log(arr1);
// console.log(arr2);

//배열 크기 지정해서 만들기
// let arr1 = [, , ,];
// let arr2 = new Array(3);
// console.log(arr1.length);
// console.log(arr2.length);

//이항 산술 연산자
let add = 5 + 2; //7 : 덧셈
let minus = 5 - 2; //3 : 뺼셈
let multiply = 5 * 2; //10 : 곱셈
let divide = 5 / 2; //2.5 : 나눗셈
let mod = 5 % 2; //1 : 나머지

//단항 산술 연산자
let x = 1;
x++; // x = x + 1 : x가 1 증가
x--; // x = x - 1 : x가 1 감소
+x; // 아무런 효과가 없음 음수 -> 양수의 반전x
-x; // 양수 -> 음수, 음수 -> 양수 변환

//문자열 연결 연산자
"1" + 2; // "12"
1 + "2"; // "12"

1 + 2; // 3

1 + true; // true가 1이므로, 2
1 + false; // false가 0이므로, 1
1 + null; // null이 0이므로, 1
1 + undefined; // undefined는 숫자로 변환이 안되므로, NaN (Not A Number)

// let trans = 100; //Number
// Object(trans); //100
// console.log(typeof trans); //Number
// toString(trans); //”100"
// console.log(typeof trans); //String
// Boolean(trans); //true
// console.log(typeof trans); //Bolean

const falsy1 = null;
Number(falsy1); // 0;

const falsy2 = "";
Number(falsy2); // 0;

const falsy3 = false;
Number(falsy3); // 0;

const truthy1 = [];
Number(truthy1); // 0;

const truthy2 = true;
Number(truthy2); // 1;

const truthy3 = {};
Number({}); // NaN;

String(123); //”123"
String(123.456); //”123.456"

var trans = 100;
trans.toString(); //”100"
trans.toString(2); //”1100100"
trans.toString(8); //”144"
var boolT = true;
var boolF = false;
boolT.toString(); //”true”
boolF.toString(); //”false”

Boolean(100); //true
Boolean("1"); //true
Boolean(true); //true
Boolean(Object); //true
Boolean([]); //true
Boolean(0); //false
Boolean(NaN); //false
Boolean(null); //false
Boolean(undefined); //false
Boolean(); //false

const numb1 = 0;
Boolean(numb1); // false
!!numb1; // false
!numb1; // true

const num1 = 10;
const num2 = 20;

console.log(`${num1} + ${num2} = ${num1 + num2} 입니다.`);
//"10 + 20 = 30 입니다."

//제어문
{
  let block = "hi~";
}

let num = 2;
let kind;

if (num > 0) {
  kind = "양수";
} else if (num < 0) {
  kind = "음수";
} else {
  kind = "zero";
}
