const fronts = [];

console.log(fronts);

//1. 배열의 맨 뒤에 요소를 추가
fronts.push("이준규", "김상민", "김효민");
console.log(fronts);

//2. 배열의 맨 뒤의 요소를 삭제
fronts.pop();
fronts.pop();
console.log(fronts);

//3. 배열의 맨 앞에 요소를 추가
fronts.unshift("서채연", "김윤미");
console.log(fronts);

//4. 배열의 맨 앞 요소를 삭제
fronts.shift();
fronts.shift();
console.log(fronts);
