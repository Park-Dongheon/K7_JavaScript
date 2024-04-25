const showGameOk = () => {
    const bt1 = document.getElementById("bt1");
    const bt2 = document.getElementById("bt2");
    const inNum = document.getElementById("isNum");
    const dice = document.getElementById("dice");

    //주사위 이미지 숨기기
    dice.style.display = 'block';   

    //주사위 버튼 보이기
    bt1.style.display = 'block';

    //확인 버튼 숨기기
    bt2.style.display = 'none';

    //번호 선택 보이기
    isNum.style.display = 'none';
}

document.addEventListener( () => {
    

});