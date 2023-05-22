# Assignment_01
## JavaScript 반복문을 알아보자,,

>_**1. for of**_
>* 열거할 수 있는 이터러블 (배열, Map, Set등) 순회
>* for of 구문을 사용하기 위해선 컬렉션 객체가 [Symbol.iterator] 속성을 가지고 있어야만 한다.
>* for( var value of arr ){}

>_**2. for Each**_
>* 배열 순회 전용 메서드
>* 오직 Array 객체에서만 사용가능한 메서드
>* foreach 구문의 인자로 callback 함수를 등록할 수 있고, 배열의 각 요소들이 반복될 때 이 callback 함수가 호출됩니다.
>* arr.forEach(function (value, index){});

>_**3. do while**_
>* 선수행 블록이 첨가된 while문.
>* 수행 이후 코드블록 반복.
>* do {
  statement
 } while (condition); 

>_**4. Array.map**_
>* 배열 순회 전용 메서드
>* 콜백 함수를 이용해 각각의 요소에 호출해서 그 값을 변환할 수 있게 해줍니다. 다시 말하자면 콜백 함수는 배열의 각 요소에 실행됩니다.<br>
※ 콜백함수란? 파라미터로 함수를 전달하는 함수
>* arr.map(function(element, index, array){  }, this);
>* 예시 ) <br>
var numbers = [1, 4, 9]; <br>
var doubles = numbers.map(function(num) {<br>
  return num * 2;<br>
});<br>
// doubles는 이제 [2, 8, 18]<br>
// numbers는 그대로 [1, 4, 9]

>_**5. Array.filter**_
>* 배열 순회 전용 메서드
>* 주로 특정 조건을 만족하는 새로운 배열을 필요로 할 때 사용
>* arr.filter(condition)