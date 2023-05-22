# **FF:SSION 1주차 과제 : 반복문 정리**

 
```javascript
let arr=[1,2,3];
for (let i=0;i<2;i++){
    console.log(arr[i]); 
}
/* 결과값
1
2
3
*/
```
위 코드를 여러 반복문으로 똑같은 결과 내볼거임

## for of
- 반복할 수 있는 객체(Array, Map, Set, argument..)를 순회할 수 있도록 해주는 반복문

- ``` javascript
    let arr=[1,2,3];
    for(var value of arr){
        console.log(value+" ");
    }
    ```
	 
	 
 ## for each
- Array배열에서만 사용 가능한 반복문  
item : 각각의 원소, index : 인덱스, arr1 : 배열이름  


- ``` javascript
    let arr=[1,2,3];

    arr.forEach(function(item, index, arr1){
      console.log(arr1[index]);
      //console.log(item); //얘도 같은결과
    })
    ```
- ``` javascript
    let arr=[1,2,3];

    arr.forEach(item=>{
        console.log(item);
    })
    ```
- 단점  
    - 반복문 내에서 배열의 값 변경이나 추가 불가
    - 배열 역순으로 탐색 불가(순서대로 가져오기 때문)

 ## do while
 - while문 조건의 참/거짓 여부를 따지지 않고 do while문 사이의 문장을 한번은 무조건 실행, while문 조건이 true면 do while문 사이의 문장 계속 실행 
 - ```javascript
    let arr=[1,2,3];
    let i=0;

    do {
        console.log(arr[i]);
        i++;
    }while(i<arr.length);
    ```
 ## Array.map
 - 콜백함수를 이용해 각각의 요소 호출  
 item : 각각의 원소, index : 인덱스 , arr: 배열
 - 기존 배열의 값들을 변경하기 위해서 많이 씀
 - ```javascript
    let arr=[1,2,3];
    arr.map(function(item, index, arr){
        console.log(item);
        //console.log(arr[index]);
    },this)
    ```
- ```javascript
    let arr=[1,2,3];
    let newArr=arr.map(x=>2*x);
    consloe.log(newArr);//[2,4,6]
    ```
 ## Array.filter
 - 배열 순서대로 각 요소에 대해 콜백함수 실행하고 결과가 참인 요소들로 이루어진 새로운 배열 만듬
 - ```javascript
    let arr[1,2,3];
    let filter1 = arr.filter(x=>x<3);

    console.log(filter1);//[1,2]
    ```
