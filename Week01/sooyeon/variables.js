/**
 * 내 소개문을 완성하는 함수
 */
function solution() {
    let info = [];
    let myName="신수연"; //본인의 이름을 담아주세요
    let myAge=22; //본인의 나이를 담아주세요
    let department="글로벌미디어학부"; //본인의 학과를 담아주세요
    let sId="20211595"; //본인의 학번을 담아주세요
  
    info=[myName,myAge,department,sId];
  
    let introduce=`안냐세요 저는 ${myName}입니다. 나이는 ${myAge}구요 학과는 ${department}, 학번은 ${sId}입니다.`; //배열을 이용해서 본인의 소개문을 작성해주세요!
    return introduce;
  }
  
  console.log(solution());