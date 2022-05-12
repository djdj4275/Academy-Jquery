//이미지 파일 이름을 모아둔 배열
const images = ["0.jpg","1.jpg"]; 

// let index = Math.floor(Math.random()*images.length);
// const choseImage = images[index];
const choseImage = images[ Math.floor(Math.random()*images.length)];
//이미지 파일이름을 랜덤으로 가져옴
//const bodyBackground = document.querySelector("body");

// CSS style을 이용해서 bodyBackground에 추가
//bodyBackground.style.background = `url(./img/${choseImage}) no-repeat fixed`;//이미지 파일이름 추가
// stlyle = " background: url="./img/0.jpg"; "

//body를 제이쿼리 객체로 들고온 후, css 중 background 스타일 속성값을 수정(setting)
$("body").css("background", `url(./img/${choseImage}) no-repeat fixed`);