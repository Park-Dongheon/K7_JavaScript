/*
    단위 환산
*/

const show = (s1, s2, l1, l2) => {
    if(s1.value == '℃') {
        s2.value = '℉';
    }
    else {
        s2.value = '℃';

    }
    l1.textContent = s1.value;
    l2.textContent = s2.value;
}

const convertInput = () => { 
    if(txt1.value1 == '') {
        txt2.value = '';
    }
    
    const fromValue = txt1.value;
    const toValue = txt2.value;

    if(fromValue === '℃' && toValue === '℉'){

    }



}

document.addEventListener("DOMContentLoaded", () => {
    const sel1 = document.querySelector('#sel1');
    const sel2 = document.querySelector('#sel2');

    const txt1 = document.querySelector('#txt1');
    const txt2 = document.querySelector('#txt2');

    const label1 = document.querySelector('#label1');
    const label2 = document.querySelector('#label2');

    sel1.addEventListener('change', () => {
        console.log(sel1.value, sel2.value);
        show(sel1, sel2, label1, label2);

    });

    
    sel2.addEventListener('change', () => {
        console.log(sel1.value, sel2.value);
        show(sel2, sel1, label2, label1);

    });

    txt1.addEventListener('input', convertInput);
    txt2.addEventListener('input', () => {

    } )

});