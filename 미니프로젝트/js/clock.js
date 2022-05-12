const clock = document.querySelector("#clock"); // id 형식을 들고올때는 #붙여야함

function getClock() {
    const date = new Date(); // 현재 시간,분,초 등을 모두 들고옴 (참조)
    // 숫자값으로 받아오면 일의 자리수는 한 자리로 표현 (1:41,2:30 등등)
    // 1 => 01 형식으로 바꾸려면 padStart를 사용 (padStart(); >> String 객체에서 사용가능)
    const hours = String(date.getHours()).padStart(2,"0"); // 참조한 현재 시간
    const minutes = String(date.getMinutes()).padStart(2,"0") // 참조한 현재 분
    const seconds = String(date.getSeconds()).padStart(2,"0") // 참조한 현재 초
    return `${hours}:${minutes}:${seconds}`; // html에 나타내기
}
clock.innerHTML = getClock(); // 창을 켜자마자 function이 적용되도록 함
setInterval( () => {$("#clock").text(getClock())}, 1000); //setInterval은 반복 (ms초 기준이라 1000이면 1초)

