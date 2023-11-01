const clock = document.querySelector("h2#clock");
//h2 태그 중에 clock이라는 아이디를 가진 아이를 찾아오세요.

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); //두글자, 남는 공간은 0으로.
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
//5초(인터벌은밀리세컨기준이라) 단위로 sayHello를 반복해서 실행.

