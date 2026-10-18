const password = document.querySelector('input'); //html에서 <input> 선택
const text = document.querySelector('p'); //hmtl에서 <p> 선택
password.addEventListener('input', () => {
    if (/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{8}/.test(password.value)) { //대문자, 숫자, 특수기호 포함 8자 이상이면
        password.style.border = '2px solid green'; //input 테두리 색상을 초록으로
        text.textContent = '강함'; //p 텍스트 내용을 강함으로
        text.style.color = 'green'; //p 텍스트 색상을 초록으로
    }
    else if (/^(?=.*[A-Z])(?=.*\d).{6}/.test(password.value)) { //대문자, 숫자 6자 이상이면
        password.style.border = '2px solid orange'; //input 테두리 색상을 주황으로
        text.textContent = '보통'; //p 텍스트 내용을 보통으로
        text.style.color = 'orange'; //p 텍스트 색상을 주황으로
    }
    else if (password.value === '') { //비어있다면
        password.style.border = '2px solid black'; //input 테두리 색상을 검정으로
        text.textContent = '비밀번호'; //p 텍스트 내용을 비밀번호으로
        text.style.color = 'black'; //p 텍스트 색상을 검정으로
    }
    else if (password.value.length < 6) { //6자 미만이면
        password.style.border = '2px solid red'; //input 테두리 색상을 빨강으로
        text.textContent = '약함'; //p 텍스트 내용을 약함으로
        text.style.color = 'red'; //p 텍스트 색상을 빨강으로
    }
})