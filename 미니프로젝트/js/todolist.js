const todoInput = document.querySelector("#memo-form input");
const todoButton = document.querySelector("#todo-button");

const todoBoard = document.querySelector("#todo-board");

//todoButton.addEventListener("click",todoFormButton);

function todoFormButton() {
    //버튼을 눌렀을때 li요소를 생성 및 추가
    const li = document.createElement("li");
    // 체크박스
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    // 체크박스 이벤트리스너 추가
    checkbox.addEventListener("click", todoCheck);

    //내용 : createTextNode
    const text = document.createTextNode(todoInput.value);

    //X버튼
    const button = document.createElement("button");
    button.textContent ="X";
    // X버튼 이벤트리스너 추가
    button.addEventListener("click", todoDelete);

    //li에 체크박스와 내용와 X버튼 추가
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(button);

    //ul에 li 추가
    todoBoard.appendChild(li);
    
    todoInput.value="";
}

function todoCheck(event) {
    // console.log(event.target)
    const checkbox = event.target;
    if (checkbox.checked) {
        // 체크박스가 checked되면 li의 색을 lightgray로 바꿈
        checkbox.parentNode.style.color="lightgray";
    }
    else {
        // 체크박스가 checked == false 되면 li의 색을 black으로 바꿈
        checkbox.parentNode.style.color="black";
    }
}

function todoDelete(event) {
    //checkbox를 통해 li를 찾아서 삭제(remove)
    event.target.parentNode.remove();
}

$("#todo-button").on("click", function(){
    // type이 checkbox인 input 요소인 제이쿼리를 생성한후, 변수에 할당
    const checkbox = $("<input>").prop("type","checkbox");
    // 생성한 변수(제이쿼리객체)에 제이쿼리메소드 on을 사용하여 이벤트 추가
    checkbox.on("click", function(event){ // 이때 익명함수로 추가
        if(event.target.checked) {
            checkbox.parent().css("color","lightgray");
        }
        else {
            checkbox.parent().css("color","black");
        }
    });

    // text값 "X"가진 button요소인 제이쿼리를 생성한 후, 변수에 할당
    const button = $("<button>").text("X");
    // 생성한 변수(제이쿼리객체)에 제이쿼리메소드 on을 사용하여 이벤트 추가
    button.on("click",function(){
        //event.target 대신에 
        // 제이쿼리객체인 this를 통해서 현재 실행된 DOM가져올수있다.
        $(this).parent().remove();
    });

    // 투두 리스드에 들어갈 내용을 input의 value값을 prop으로 받아옴
    const todo = $("#memo-form input:first").prop("value");

    // $("<li>")를 사용하여 새로운 li 요소를 생성한후 append를 이용하여 자식요소를 추가
    // todo-board에 append를 이용하여 추가
    $("#todo-board").append( $("<li>").append(checkbox).append(todo).append(button) );
});