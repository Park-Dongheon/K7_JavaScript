document.addEventListener("DOMContentLoaded", () => {
    
    const bt11 = document.querySelector('#bt11');
    const div81 = document.querySelector('.div81');

    bt11.addEventListener('click', (e)=> {
        e.preventDefault();

        // let arr = [0, 0, 0, 0, 0, 0, 0];
        let arr = [];

        while(arr.length < 7){
            let n = Math.floor(Math.random()*45) + 1;
    
            if(!arr.includes(n)) {
                arr.push(n);
            };
        }

        let tags = arr.map(item =>  `<span class="sp${Math.floor(item / 10)}">${item}</span>`);


        tags.sort();
        // 배열 중간 추가
        tags.splice(6,0,'<span class="spplus">+</span>');
        console.log(tags);

        // 배열 문자열 만들기
        tags = tags.join('');
        div81.innerHTML = tags;

    });

});