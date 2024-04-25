/*
 1. DOM에서 제어할 노드를 가져오기
 2. 6개 버튼 클릭을 확인
 3. 버튼 클릭이 되면 
    - 해당하는 버튼의 숫자를 추출 => 사용자 선택 숫자(User) => 이미지 변경
    - 램덤수를 생성 => 컴퓨터 숫자(Com) => 이미지 변경
    - 사용자 선택수(User)와 컴퓨터 선택수(Com)을 비교
    - 결과 출력
*/
document.addEventListener("DOMContentLoaded", () => {
    // 1. DOM에서 제어할 노드를 가져오기
    const comImg = document.getElementById('com');
    const userImg = document.querySelector('#user');
    const msg = document.querySelector('#msg');
    const bts = document.querySelectorAll('.bt4');

    console.log(bts);

    // for 반복문1
    console.log("***반복문 1***");
    for (let i = 0; i < bts.length; i++) {
        console.log(bts[i])
        
    }

    // // for 반복문2
    // console.log("***반복문 2***");
    // for(let i in bts) {
    //     console.log(bts[i])
    // }

    // // for 반복문3
    // console.log("***반복문 3***");
    // bts.forEach(bt => {
    //     console.log(bt)
    // });

    // // for 반복문4
    // console.log("***반복문 4***");
    // for(let bt of bts) {
    //     console.log(bt)
    // }

    // // for 반복문4, index값 출력
    // for(let [i,bt] of bts.entries()) {
    //     console.log(i, bt)
    // }

    // bt[0].addEventListener('click', () => {});

    // 2. 6개 버튼 클릭을 확인
    for(let bt of bts) {
        bt.addEventListener('click', () => {
            // - 사용자 선택수(User)와 컴퓨터 선택수(Com)을 비교

            //         3. 버튼 클릭이 되면 
            const user = parseInt(bt.textContent.slice(0,1));
            const com = Math.floor(Math.random() * 6) + 1;  // 1~6

            // - 해당하는 버튼의 숫자를 추출 => 사용자 선택 숫자(User) => 이미지 변경
            userImg.setAttribute('src', `../03/img/01_주사위/${user}.png`)
            userImg.setAttribute('alt', `User num${user}`)

            // - 램덤수를 생성 => 컴퓨터 숫자(Com) => 이미지 변경
            comImg.setAttribute('src', `../03/img/01_주사위/${com}.png`);
            comImg.setAttribute('alt', `Computer num ${com}`);
           
            // - 결과 출력
            if (user === com) {             // === 데이터 타입까지 비교
                msg.innerHTML = '<p>컴퓨터와 일치</p>';
            } else {
                msg.innerHTML = '<p>컴퓨터와 불일치</p>';
            }

        });
    }

});