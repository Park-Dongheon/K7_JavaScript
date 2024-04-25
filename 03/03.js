/*
    1. DOM에서 이미지와 버튼을 가져오기 => DOM이 생성 된 후에 가져옴
    2. 버튼 Click 이벤트를 만들기
    3. 랜덤 수가 생서(1~6) => Math.floor(Math.random() * 6) + 1
    4. 랜덤수에 해당하는 이미지를 이미지 src속성에 넣기
*/


document.addEventListener("DOMContentLoaded", () => {
    console.log("주사위 완성");
    
    // 1. DOM에서 이미지와 버튼을 가져오기
    const img = document.querySelector('#btDiv > img');
    const bt = document.querySelector('#btDiv > button');


    // 2. 버튼 Click 이벤트를 만들기
    bt.addEventListener('click', () => {
        //3. 랜덤수 생성
        const random = Math.floor(Math.random() * 6) + 1;

        //4. 랜덤수에 해당하는 이미지를 이미지 src속성에 넣기
        img.setAttribute('src', `./img/01_주사위/${random}.png`);
        img.setAttribute('alt', `${random}`);
    });

});


