const wrap = document.querySelector('#wrap');
const inp = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => { //추가 버튼을 눌렀을때
    
    // 추가될 할 일 목록을 HTML 코드를 문자열로 저장
    const todo = `
    <div class="todoli">
            <p>${inp.value}</p>
            <button onclick="this.parentElement.remove();">삭제</button>
    </div>
    `

    if (inp.value.trim() === '') { //앞뒤 공백 제거 기준 빈칸일 경우
        alert('할 일을 입력해주세요.'); //경고창 표시
        inp.focus(); //입력창으로 이동
    }
    else {
        wrap.insertAdjacentHTML('beforeend',todo); //wrap 요소 마지막에 할 일 목록 html 추가
        inp.value = ''; //입력창 비우기
        inp.focus();
    }
})