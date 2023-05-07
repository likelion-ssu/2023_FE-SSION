# WeekAssignment (week01)
### 반복문
> : 코드 블록을 반복하는 제어문, 조건식의 평가가 참일 때만 반복을 이어 나감

* __while문__
>: 조건식의 결과를 바탕으로 코드 블록을 반복함  
>`while(조건식) { 증감문 }`
![while](https://cdn.programiz.com/sites/tutorial2program/files/javascript-while-loop.png)
```
// program to display numbers from 1 to 5
// initialize the variable
let i = 1, n = 5;

// while loop from i = 1 to 5
while (i <= n) {
    console.log(i);
    i += 1;
}
```

* __for문__
>: 조건식의 결과를 바탕으로 증감식을 통해 코드블록을 반복함
>`ex. for( 초기화; 조건식; 증감문; ) { }`
![for](https://cdn.programiz.com/sites/tutorial2program/files/javascript-for-loop.png)
```
// program to display text 5 times
const n = 5;

// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log(`I love JavaScript.`);
}
```

* __break__
>: 코드 블록 중간에 반복을 아예 중지하고 해당 블록을 탈출
![break](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcKAlVf%2Fbtq0zdNgph8%2FgzRvlhklUC20OnQiFK8MC0%2Fimg.png)

* __continue__
>: 해당 반복을 중지하고 다음 회차의 반복으로 넘어감
![continue](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F6I6Ya%2Fbtq0AqE4Go4%2FnN4t2xJKgubCBx1kSqAuYK%2Fimg.png)
***

_:star:세션 내용 전체 정리하는 줄 알고 정리했는데,,:cry: 아까워서 티스토리 링크도 첨부:star:_
> <https://seize-the-day9.tistory.com/14>