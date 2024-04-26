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

// 화면 이미지 그리기
const showImg = (imgName) => {
    const updownImg = document.querySelector('#what');

    updownImg.setAttribute('src', `./img/${imgName}.png`);
    updownImg.setAttribute('alt', `${imgName}`);
};


document.addEventListener("DOMContentLoaded", () => {


    const bt = document.querySelector('#bt');
    const input = document.querySelector('#txt1');
    
    console.log('완료');
    
    // 랜덤수
    let n;
    let flag = false;
    let imgName;

    bt.addEventListener('click', (e)=> {
        e.preventDefault();

        // 랜덤수 생성: flag가 true일때만 생성
        if(!flag){
            flag = true;
            n = Math.floor(Math.random()*100) + 1; // 1~100
            console.log("랜덤 값 생성 : " + n);

            showImg('what');
            input.style.display = 'inline';
            bt.textContent = '확인';
        }

        // 입력값 체크
        if(input.value == "") {
            alert('값을 입력하세요');
            input.focus();
            return;
        }


        // 입력값 체크: 1 ~ 100
        const user = parseInt(input.value);
        console.log(user);
        if(user < 1 || user > 100) {
            alert('[입력오류] 1~100의 숫자를 입력하시오');
            input.focus();
            return;
        }

        // 메시지 출력
        // -input 박스 값이 랜덤수 보다 작으면 Up이미지
        // -input 박스 값이 랜덤수 보다 크면 Down이미지
        // -input 박스 값이 랜덤수 보다 같으면 Good이미지

        if(user < n) {
            imgName = 'up';
        }
        else if(user > n) {
            imgName = 'down';
        }
        else {
            imgName = 'good';

            input.style.display = 'none';
            bt.textContent = '숫자를 다시 생성해 주세요.';
            flag = false; 
        }

        if(imgName === 'up' || imgName === 'down') {
            input.value = null;
            input.focus();
        }

        input.value = null;
        showImg(imgName);

    });

});