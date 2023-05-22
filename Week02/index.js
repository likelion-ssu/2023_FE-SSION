let property_object1 = {
  firstName: "Junkyu",
  "last-name": " Lee", // 식별자 네이밍 규칙을 준수하지 못했기 때문에 따옴표로 묶어줌
};

// let property_object2 = {
//     firstName: "Junkyu",
//     last-name: " Lee", // 식별자 네이밍 규칙을 준수하지 못했는데 따옴표까지 없으니 에러
// }

let person = {
  name: "Jiwon",
};

//객체에 해당 프로퍼티가 존재하므로, 프로퍼티의 값을 갱신함
person.name = "LeeJunkyu";
console.log(person["name"]); //LeeJunkyu

//객체에 해당 프로퍼티가 존재하지 않으므로, 프로퍼티를 생성함
person.age = 25;
console.log(person); // { name: 'LeeJunkyu', age: 25 }

//프로퍼티 삭제
delete person.age; //존재하는 프로퍼티의 경우 삭제가 가능함
delete person.address; //존재하지 않는 프로퍼티의 경우 삭제가 불가능

console.log(person); //{ name: 'LeeJunkyu' }

// //함수 선언문
// function add(x, y) {
//   return x + y;
// }

// console.log(add(1, 2)); //3

// //함수 표현식
// const add = function (x, y) {
//   return x + y;
// };

// //기명 함수 표현식
// const sub = function foo(x, y) {
//   return x + y;
// };

// //Function 생성자 함수
// const add = Function("x", "y", "return x + y");
// console.log(add(1, 2)); //3

// //화살표 함수 (ES6)
// const add = (x, y) => x + y;
// console.log(add(1, 2)); //3

//함수 선언문으로 더하기 빼기 함수 만들기
//함수 표현식으로 곱하기 나누기 함수 만들기
//화살표 함수로 임의의 숫자 사칙연산 함수 만들어서 실행해보기!

function addData(x, y) {
  return x + y;
}

function minusData(x, y) {
  return x - y;
}

const multi = function (x, y) {
  return x * y;
};

const divide = function (x, y) {
  return x / y;
};

const calculator = () => {
  const x = 10;
  const y = 5;
  const z = 2;
  const d = 8;

  console.log(addData(x, y));
  console.log(minusData(y, z));
  console.log(multi(y, d));
  console.log(divide(x, d));
};

calculator();

const junkyu = {
  sId: "20180318",
  pNum: "01066761792",
  email: "igun042388@gmail.com",
};

const sangmin = {
  sId: "20171234",
  pNum: "01083992122",
  email: "sMin@gmail.com",
};

class Student {
  constructor(sId, pNum, email) {
    this.sId = sId;
    this.pNum = pNum;
    this.email = email;
  }
}

const jiwon = new Student("12345678", "01000000000", "jiwon@naver.com");
const sooyeon = new Student("12345678", "01000000000", "sooyeon@naver.com");
const haesol = new Student("12345678", "01000000000", "haesol@naver.com");
const dongyoon = new Student("12345678", "01000000000", "dongyoon@naver.com");
const yueun = new Student("12345678", "01000000000", "yueun@naver.com");
const seohyeon = new Student("12345678", "01000000000", "seohyeon@naver.com");

console.log(jiwon);
console.log(sooyeon);
console.log(haesol);
console.log(dongyoon);
console.log(yueun);
console.log(seohyeon);

//1.
//이번에 만들 클래스는,
//사람의 개인 정보가 담길 클래스!
//자유롭게 생성자를 만들어보세요

//2.
//생성자를 다 만들었다면,
//객체 내부의 값을 불러올 수 있는
//프로토타입 메서드를 만들어보세요!

//3.
//정적 메서드를 자유롭게 추가해보세요!

//4.
//내가 만든 클래스를 바탕으로, 인스턴스를 생성해서
//호출하며 자유롭게 갖고 놀아보세요!

// Shorthand property name
{
  const likelion = {
    name: "SSULL",
    age: "10",
  };

  const name = "SSULL";
  const age = "10";

  const likelion_2 = {
    name: name,
    age: age,
  };

  // key와 value의 값이 동일한 경우 하나로 축약해 사용할 수 있음
  const likelion_es6 = {
    name,
    age,
  };

  console.log(likelion);
  console.log(likelion_2);
  console.log(likelion_es6);
}

// Destructuring Assignment
{
  //object : {} 사용해 object destructuring
  const student = {
    name: "jimin",
    level: 1,
  };

  {
    // 이전
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  {
    // 이후
    const { name, level } = student; // 같은 이름으로 선언한 경우
    console.log(name, level);
  }

  const { name: studentName, level: studentLevel } = student; // 새로운 이름으로 선언한 경우
  console.log(studentName, studentLevel);

  // array : [] 이용해 array destructuring
  const animals = ["cat", "dog"];

  {
    // 이전
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  {
    // 이후
    const [first, second] = animals;
    console.log(first, second);
  }
}

// Spread Syntax : 주소의 참조값만 복사
{
  const obj1 = { key: "key1" };
  const obj2 = { key: "key2" };
  const obj3 = { key: "key3" };
  const array = [obj1, obj2, obj3];

  // array copy
  const arrayCopy = [...array]; // array 내부 item을 하나씩 가져오는 것 의미 (...)
  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, { key: "key4" }];
  obj1.key = "newKey"; // 원래의 object 값 변경 시 유의할 것 (참조값만을 복사해오는 것)
  console.log(arrayCopy2);

  // object copy
  const obj5 = { ...obj3 };
  console.log(obj5);

  // array concatenation
  const fruits1 = ["🍋", "🍆"];
  const fruits2 = ["🍓", "🍑", "🍍"];
  const concatFruit = [...fruits1, ...fruits2];
  console.log(concatFruit);

  // object concatenation
  const dog1 = { dog: "first dog" };
  const dog2 = { dog: "second dog" };
  const dog = { ...dog1, ...dog2 }; // key가 동일한 object를 병합할 경우 가장 뒤에 있는 요소가 앞의 것을 덮어씌움
  console.log(dog);
}

// Default parameters
{
  {
    function printMessage(message) {
      if (message == null) {
        message = "default";
      }
      console.log(message);
    }

    printMessage("hello");
    printMessage();

    // using default parameter
    {
      function printMessage(message = "default param") {
        console.log(message);
      }

      printMessage("hello");
      printMessage();
    }
  }
}

// Ternary Operator
{
  const isCat = true;

  {
    // 이전
    let component;
    if (isCat) component = "cat";
    else component = "dog";
    console.log(component);

    const componentTernary = isCat ? "cat" : "dog";
    console.log(componentTernary);
  }
}

// Template Literals
{
  const weather = "sunny";
  const temparature = "10";

  console.log(
    "weather : " + weather + "," + " temparature : " + temparature + " !"
  );
  console.log(`weather : ${weather}, temparature : ${temparature} !`);
}
