// let person = {
//     name : "sooyeon"
// }

// console.log(person['name']);

// person.age=22;
// console.log(person);

// delete person.age;
// console.log(person);

//함수 선언문으로 더하기 빼기 만들기

// function add(a,b){
//     return a+b;
// }

// function minus(a,b){
//     return a-b;
// }

// //함수 표현식으로 곱하기 나누기 함수 만들기

// const gop= function(a,b) {
//     return a*b;
// }

// const nanugi= function(a,b) {
//     return a/b;
// }

// //화살표 함수
// const cal=(a,b,c)=>{

//     const d=4;

//     console.log("cal 함수 호출");
//     console.log(a+b*c);
//     console.log(add(a,b));
//     console.log(minus(b,c));
//     console.log(gop(b,d));

// }

// console.log(add(1,2));
// console.log(minus(2,3));
// console.log(gop(3,4));
// console.log(nanugi(4,2));
// cal(5,6,22);


class Info{
    constructor(name,age,sId) {
        this.name=name;
        this.age=age;
        this.sId=sId;
    }

    introduce() {
        console.log(`안냐세요 저는 ${this.age}살 ${this.name}입니다. 저의 학번은 ${this.sId}입니다.`)
    }

    static nicetomeetu() {//static 붙인 정적 메서드는 클래스로만 접근 가능, 인스턴스에선 접근 불가
        console.log('잘 부탁드립니다요');
    }

    seeulater() {//static을 안붙인 정적메서드는 인스턴스에서만 접근 가능, 클래스로 접근 불가
        console.log('다음에 또 만나요');
    }
}

const sooyeon = new Info("신수연",22,"20211595");
sooyeon.introduce();
Info.nicetomeetu();
sooyeon.seeulater();
