const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyElement = document.querySelector('body');

startBtn.addEventListener('click', onClickStartBtn);
stopBtn.addEventListener('click', onClickStopBtn);

let timerId = null;
stopBtn.setAttribute('disabled', true);

function onClickStartBtn() {
    timerId = setInterval(() => {
        bodyElement.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled');

}

function onClickStopBtn() {

}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}