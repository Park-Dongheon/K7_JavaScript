document.addEventListener("DOMContentLoaded", () => {

    const txt1 = document.querySelector('#txt1');
    const bt81 = document.querySelectorAll('.bt81');
    const bt82 = document.querySelectorAll('.bt82');
    const bt83 = document.querySelectorAll('.bt83');

    let arr = [];
    let obj = {'사과':'🍎', '바나나':'🍌', '오렌지':'🍊', '수박':'🍉', '당근':'🥕', '오이':'🥒', '아보카도':'🥑', '브로콜리':'🥦'};

    // 배열 추가
    for(let bt of bt81) {
        bt.addEventListener('click', (e) => {
            e.preventDefault();

            console.log(bt.textContent);

            // if문을 사용
            // if(bt.textContent == '사과') arr.push('🍎');
            // else if (bt.textContent == '바나나') arr.push('🍌');
            // else if (bt.textContent == '오렌지') arr.push('🍊');
            // else if (bt.textContent == '수박') arr.push('🍉');
            // txt1.value = arr.join(' ');

            // object를 사용(Python의 딕셔너리)
            arr.push(obj[bt.textContent]);
            txt1.value = arr.join('');
        });
    };

    // 배열 삭제
    for(let bt of bt82) {
        bt.addEventListener('click', (e) => {
            e.preventDefault();
            
            console.log(arr);
            console.log(obj[bt.textContent.replace('삭제','')]);

            // 배열 fillter
            const k = obj[bt.textContent.replace('삭제','')];
            // arr = arr.filter((item) => {return item != k});
            arr = arr.filter(item => item != k);
            console.log(k);
            console.log(arr);
            txt1.value = arr.join('');
        });
    };

    // 배열 요소 변경
    for(let bt of bt83) {
        bt.addEventListener('click', (e) => {
            e.preventDefault();

            let tm = bt.textContent.split('→');
            console.log(bt.textContent.split('→'));

            // arr = arr.map((item) => {console.log(item, obj[tm[0]], obj[tm[1]]); return item == obj[tm[0]] ? obj[tm[1]] : item;});
            arr = arr.map(item => item == obj[tm[0]] ? obj[tm[1]] : item);
            
            txt1.value = arr.join('');
        });
    }

});