// 다크모드 기능 
function darkMode() {
    // 문서의 바디가 타겟이다.
    let target = document.body;
    // 문서의 나이트모드 태그를 가진놈이 타겟2.
    let target2 = document.querySelector('.nightmode');
    // 문서의 데이모드 태그를 가진놈이 타겟3.
    let target3 = document.querySelector('.daymode');
    //타겟의 클래스 네임을 다크모드로 토글시킴.
    target.classList.toggle("darkmode");
    //타겟2의 디스플레이를 논으로 바꿈.
    target2.style.display = "none";
    //타겟3의 디스플레이를 플렉스로 바꿈.
    target3.style.display = "flex";
 }
 //다크모드와 반대임.
 function dayMode() {
    let target = document.body;
    let target2 = document.querySelector('.nightmode');
    let target3 = document.querySelector('.daymode');
     target.classList.remove("darkmode")
     target2.style.display = "flex";
     target3.style.display = "none";
 }
 //두가지로 설정한 이유 아직까지는 바꾸는 방법을 몰라서 따로 나눠서 버튼이
 //나오다 보니 두가지로 설정함.
