/*
    1. DOM에서 제어할 노드를 가져오기
    2. 버튼이 눌러지면
      [확인버튼일때]
        -랜덤수를 생성 => 랜덤수는 다시 하기 전까지 변경되면 안됨
        -input 박스 값이 없으면 '값을 입력하세요' 메시지 출력
        -input 박스 값이 1에서 100사이 숫자가 아니면 '입력오류' 메시지 출력
        -input 박스 값이 랜덤수 보다 작으면 Up이미지
        -input 박스 값이 랜덤수 보다 크면 Down이미지
        -input 박스 값이 랜덤수 보다 같으면 Good이미지 
            - input이 보이지 않아야함
            - 버튼의 캡션을 '숫자를 생성해 주세요' 변경
      [숫자를 생성해 주세요 버튼일때]
        -초기화: 랜덤수 새로 생성, input 박스 보이기...
*/


document.addEventListener("DOMContentLoaded", () => {

    const updownImg = document.querySelector('#what');
    const bt = document.querySelector('#bt');
    const input = document.querySelector('#txt1');
    
    console.log('완료');
    
    // 랜덤수
    let n;
    let flag = false;

    bt.addEventListener('click', (e)=> {
        e.preventDefault();

        // 랜덤수 생성: flag가 true일때만 생성
        if(!flag){
            flag = true;
            n = Math.floor(Math.random()*100) + 1; // 1~100
            console.log(n);
        }

        // 입력값 체크
        if(input.value == "") {
            alert('값을 입력하세요.');
            input.focus();
            input.value = null;
            return;
        }

        if(input.value < 1 || input.value > 100) {
            alert('1~100의 숫자를 입력하시오');
            input.focus();
            input.value = null;
            return;
        }

        if(input.value < n) {
            updownImg.setAttribute('src', `./img/up.png`);
            input.focus();
            input.value = null;
        }
        else if(input.value > n) {
            updownImg.setAttribute('src', `./img/down.png`);
            input.focus();
            input.value = null;
        }
        else if(input.value == n) {
            updownImg.setAttribute('src', `./img/good.png`);
            input.focus();
            input.value = null;
        }
        
    });

});