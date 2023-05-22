# 반복문의 종류

## for of문

> 열거할 수 있는 이터러블 (String, Array, Map, Set등) 순회
```jsx
for (변수 of 객체) {
  // 반복 수행 코드
}
```
- 배열에 들어있는 0번째~마지막 번째 요소까지 순차적으로 출력됨
- 배열안에 있는 요소를 꺼내쓸 때 사용하면 좋음
      
  ```jsx
  const arr = [1, 2, 3];

  for (const item of arr) {
    console.log(item);
  }
  // 출력: 1, 2, 3
  ```

##  forEach

> 배열 순회 전용 메서드
```jsx
배열.forEach(function(value, index, array){
  // 반복 수행 코드
});
```
- 배열의 각 요소에 대해 콜백 함수를 호출함
- 콜백 함수는 현재 요소, 요소 인덱스, 배열 자체를 인수로 받음.

  ```jsx
  const arr = [1, 2, 3];

  arr.forEach((item, index, arr) => {
    console.log(item, index, arr);
  });
  // 출력: 1 0 [1, 2, 3], 2 1 [1, 2, 3], 3 2 [1, 2, 3]
  ```

##  do while 문

> 선수행 블록이 첨가된 while문. 수행 이후 코드블록 반복.
```jsx
do {
  // 거짓이더라도
  //do에 작성된 코드는 무조건 1회는 실행
}while(조건식)
```
- while문과 비슷하지만, 코드 블록을 최소 1 번 실행한 후 조건식을 검사함
- 최소 1번 실행 후, while 조건이 false인 경우 더이상 실행되지 않음


  ```jsx
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 3);
  // 출력: 0, 1, 2
  ```

##  Array.map

> 배열 순회 전용 메서드
```jsx
배열.map(function(value, index, array){
  // 반복 수행 코드
});
```
- forEach와 동일하게 배열의 각 요소에 대해 콜백 함수를 호출
- 각 콜백 함수의 return값을 모아 새로운 배열을 생성
- 원본 배열은 변경되지 않음

  ```jsx
  const arr = [1, 2, 3];

  const mappedArr = arr.map((item) => {
    console.log(value); // 1, 2, 3, 4 출력
    return value*10; // 각 요소에 10을 곱한 값을 배열로 반환
  });

  console.log(mappedArr);
  // 출력: [ 10, 20, 30, 40 ]
  ```

##  Array.filter

> 배열 순회 전용 메서드
```jsx
배열.filter(function(value, index, array){
  // 반복 수행 코드
});
```
- forEach와 동일하게 배열의 각 요소에 대해 콜백 함수를 호출
- 콜백 함수가 true를 반환하는 요소들로만 새로운 배열을 생성
- 원본 배열은 변경되지 않음

  ```jsx
  const arr = [1, 2, 3];

  const filteredArr = arr.filter((item) => {
    console.log(value); // 1, 2, 3, 4 출력
    return value%2 == 0; // value가 짝수인 값들을 배열로 반환
  });

  console.log(filteredArr);
  // 출력: [ 2, 4 ]
  ```