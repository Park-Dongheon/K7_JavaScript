const btCreate = (bt, idTxt, captionNode, parentNode) => {
    bt.setAttribute('id', idTxt);
    bt.appendChild(captionNode);
    parentNode.append(bt);
}

document.addEventListener("DOMContentLoaded", () => 
{
    console.log('DOM 완성');

    const msg = document.querySelector('#msg');
    const btDiv = document.getElementById('btDiv');
    const bt1 = document.createElement('button');
    const bt1Txt = document.createTextNode('버튼11');
    const bt2 = document.createElement('button');
    const bt2Txt = document.createTextNode('버튼21');
    // 버튼 객체 생성

    // bt1.setAttribute('id', 'bt11');
    // bt1.appendChild(bt1Txt);
    // btDiv.append(bt1);

    btCreate(bt1, 'bt11', bt1Txt, btDiv);
    btCreate(bt2, 'bt21', bt2Txt, btDiv);


    bt1.addEventListener('click', () => {
        // if(bt1.innerHTML == ''){
        //     msg.innerHTML = '<h1>안녕하세요!</h1>';
        // }
        // else{ 
        //     msg.innerHTML = '';
        // }
        msg.innerHTML = '<h1>안녕하세요!!</h1>';
    });

    bt2.addEventListener('click', () => {
         msg.innerHTML = '';
    });

});
// DOM이 다 만들어져서 로드가 됨 -> addEventListener 이벤트 발생 인자로 전달, call back 함수: 팻에로우로 함수의 body 부분을 실행함 -> body의 실행문 
// 개발자 도구에 console 로그 기록