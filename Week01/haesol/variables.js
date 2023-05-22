/**
 * 내 소개문을 완성하는 함수
 */
function solution() {
  let info = [];
  let myName = "haesol"; //본인의 이름을 담아주세요
  let myAge = 24; //본인의 나이를 담아주세요
  let department = "글로벌미디어"; //본인의 학과를 담아주세요
  let sId = "20202926"; //본인의 학번을 담아주세요

  /**
   * info 배열에 순서대로 값을 넣어주세요!
   * [이름, 나이, 학과, 학번]
   */
  
  info = [myName, myAge, department, sId];

  
  let introduce = `안녕안녕~ 나는 ${myName}야~!\n내 나이는 ${myAge}살이야.\n나는 ${department}학부이고,\n내 학번은 ${sId}야.`; //배열을 이용해서 본인의 소개문을 작성해주세요!
  return introduce;
}

console.log(solution());
