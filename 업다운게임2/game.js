//사용할 변수
let ran = 0;
let count = 1;

//윈도우가 로드된 후 실행하기위함.
$( function () {
    
    $("#start_button").on("click", function() { // 시작버튼 클릭시
        // const r = Math.floor(Math.random()*256);' 0~255
        // rgb(r,g,b);
        // start_button의 css의 backgroundColor 값 랜덤하게 바꾸기
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);

        $("#start_button").css("backgroundColor",`rgb(${r},${g},${b})`);
        // 메소드나 함수로 전달해 주는 것은 항상 값(문자열,숫자,boolean)
        // 변수를 넣으면 변수의 값, 함수를 넣으면 함수의 결과 값이 전달

        $("#start_button").text("재시작");

        ran = Math.floor( Math.random()*100 + 1 ); //랜덤한 수 생성 (ram 변수 재선언)
        count = 1;
        // 입력받는 form(submit)
        $("#game_form").children().prop("disabled",false); // disabled 옵션 바꾸고
        // explan의 내용 수정
        $("#explan").text("게임이 시작되었습니다. 1~100사이의 수를 입력하세요"); // text 변경

    }); // function1

    $("#game_form").on("submit", function(event) {
        event.preventDefault();
        const usernum = $("#user_num").prop("value");
        //attr() 문서 이미 작성된 고정값
        //prop() 바뀌는 값
        console.log(usernum)

        //if문을 이용해서 DOM의 값 수정 
        if( ran > usernum ) {
            $("#explan").text(`${usernum}보다 더 크다`);
        }
        else if (ran < usernum) {
            $("#explan").text(`${usernum}보다 더 작다`);
        }
        else if (ran == usernum) {
            $("#explan").text(`${usernum}! 정답입니다`);
            $("#game_form").children().prop("disabled",true);

            const name = prompt("이름을 입력해주세요");
            $("#create").append( $("<li>").text(`${name}님 ${count}회만에 성공`) );
        }
        $("#result").text(`${count++}번째 입니다`);
        $("#user_num").prop("value","");
    }); // function 2

    $("#game_form").children().prop("disabled",true);
})

