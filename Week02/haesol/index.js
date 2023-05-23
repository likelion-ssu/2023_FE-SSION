let person = {
  name: "Haesol"
};

// 프로퍼티의 값 갱신
person.name = "KangHaesol";
console.log(person["name"]);

// 프로퍼티 생성
person.age = 25;
console.log(person);

//  프로퍼티 삭제
delete person.age; // 존재하는 프로퍼티 -> 삭제 가능
delete person.address; // 존재하지 않는 프로퍼티 -> 삭제 불가능

console.log(person);

let str = "hello";
console.log(str.length);

function add(x, y){
  return x + y;
}

function minus(x, y){
  return x - y;
}
const multi = function(x, y){
  return x * y;
};

const divide = function(x, y){
  return x * y;
};

const cal = () => {
  const x = 3;
  const y = 5;
  const z = 9;
  const r = 6;

  console.log(add(z, y)); 
  console.log(minus(y, x)); 
  console.log(multi(x, z)); 
  console.log(divide(r, x)); 
};

cal();

const calculate = (x, y, z, r) => {
  console.log(add(x, y));
  console.log(minus(y, z));
  console.log(multi(r, y));
  console.log(divide(z, r));
};

calculate(3, 4, 12, 6);


class Personal {
  constructor(name, sId, birth) {
    this.name = name;
    this.sId = sId;
    this.birth = birth;
  }

  sayHi() {
    console.log(`안녕~ 내 이름은 ${this.name}이고, 내 학번은 ${this.sId}이야`);
  }

  static question() {
    console.log(`네 이름은 뭐야?`);
  }

  static sayBye() {
    console.log(`그럼 안녕~`);
  }
}

const haesol = new Personal('해솔', '20202926', '0822');
console.log(haesol.sayHi());
// haesol.sayHi();
// Personal.sayBye();