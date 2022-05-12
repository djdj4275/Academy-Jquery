const memoBoard = document.querySelector("#memo-board");

const memoForm = document.querySelector("#memo-form");
const memoInput = document.querySelector("#memo-form input");

const savememo = ["미리 만들어진 메모입니다",
                    "미리 만들어진 메모입니다2",
                    "한번더 추가합니다"
                ];

const savememoform = [ // 객체를 활용하는 배열
    {memo:"메모", time:"12:08"},
    {memo:"메모2", time:"12:09"}
]; 

for (let m of savememo) {
    let memo = document.createElement("div");
    memoBoard.appendChild(memo);
    memo.innerHTML = m;
}

function memoFormSubmit (event) {
    event.preventDefault();
    console.log(memoInput.value);
    
    //새로운 요소(태그)를 만들어서 memoBoard(div요소) 추가
    //createElemnt를 통해 요소 생성
    let memo = document.createElement("div");

    //memoBoard에 요소 추가
    memoBoard.appendChild(memo);

    //추가된 memo 요소에 html값 추가
    memo.innerHTML = memoInput.value + "<br>"+getClock();
    memoInput.value = ""; //문자열
    console.dir(memoInput);
    memoInput.autofocus = true;
}

//memoForm.addEventListener("submit", memoFormSubmit);

$("#memo-form").on("submit", function(event) {
    event.preventDefault(); // 이벤트 막음

    // value값과 getClock()값을 가져와서 memo 변수에 문자열로 할당
    const memo =  $("#memo-form input:first").prop("value") + "<br>" + getClock() ;

    // div태그를 생성한 후 html로 memo의 문자열을 추가
    // (html로 넣게되면 문자열로 들어간 태그(<br>)도 html 태그로 인식)
    // memo-board에 추가
    $("#memo-board").append($("<div>").html(memo));
    // $()사용하면 전체의 요소를 찾기때문에 :first를 이용하여 필터링.
    // prop을 이용하여 value값 을 "" 으로 할당 
    $("#memo-form input:first").prop("value","");
});