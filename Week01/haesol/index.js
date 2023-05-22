// 변수 선언
var firstName = true;
var lastName = "이";

// let arr1 = [];
// let arr2 = new Array();

let arr1 = [ 'jiwon', 'suyeon', 'haesol' ];
let arr2 = new Array( 'one', 'two', 'three' );

arr1[0] = "jiwon";
arr1[1] = "suyeon";
arr1[2] = "haesol";

arr2[0] = "one";
arr2[1] = "two";
arr2[2] = "three";

console.log(arr1.length);
console.log(arr2.length);

// console.log(firstName, lastName);

console.log(typeof firstName);

const tmp = 100; // number
const tmp1 = String(tmp); // string

console.log(typeof tmp);
console.log(typeof tmp1);

const tmp2 = "10";
const tmp3 = Number(tmp2);
console.log("타입은", typeof tmp3);

