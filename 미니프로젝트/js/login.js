// getElementById를 이용하면 HTML의 아이디 값을 가져올수있다
const loginForm = document.getElementById("login-form");

// querySelector를 이용하면 CSS 선택자를 이용해서 
// 요소의 첫번째 태그를 선택할 수 있다
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const memoFormShow = document.querySelector("#memo-form");

// input의 값 가져오는 함수 
function onLoginSumit(event) {
    // console.dir(loginInput); // loginInput 안에 있는 속성값을 확인
    event.preventDefault();  // 이벤트를 막는다.
    
    // loginInput에서 value값 
    const username = loginInput.value;
    
    // greeting.innerHTML ="반갑습니다"+username+"님";
    greeting.innerHTML =`반갑습니다. ${username}님`; // `` 백틱

    //classList는 태그에 class를 추가하거나 제거하는 메서드
    loginForm.classList.add("hidden"); // class="hidden"
    memoFormShow.classList.remove("hidden");

}

// 이벤트 리스너 : 이벤트가 발생하는지 듣고 있는 메소드 
// 이벤트가 발생할때 그 함수를 실행시켜주는 역할
// 어디에 이벤트가 발생하면, 어떤 함수 실행시켜야 하는지.

// loginForm.addEventListener("submit", onLoginSumit);

$("#login-form").on("submit", function(event) {
    //이벤트 막음
    event.preventDefault();

    //제이쿼리 객체를 변수에 넣어서 할당 ( prop의 값을 들고옴 )
    const username = $("#login-form input").prop("value");
    // greeting의 text값을 setting
    $("#greeting").text(`반갑습니다. ${username}님`);

    //login-form의 클래스를 추가
    $("#login-form").addClass("hidden");
    //memo-form의 클래스를 제거
    $("#memo-form").removeClass("hidden");
});