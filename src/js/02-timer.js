import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const startBtn = document.querySelector('button[data-start]');
// const daysTimer = document.querySelector('span[data-days]');
// const hoursTimer = document.querySelector('span[data-hours]');
// const minutesTimer = document.querySelector('span[data-minuts]');
// const secondsTimer = document.querySelector('span[data-seconds]');

// startBtn.addEventListener('click', onClickStartBtn);
// startBtn.setAttribute('disabled', true);

// let inputDates = null;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//       console.log(selectedDates[0]);
//       inputDates = selectedDates[0];
//       if (inputDates >= Date.now()) {
//           startBtn.removeAttribute('disabled');
//       } else {
//           Notify.failure('Please choose a date in the future');
//       }
//   },
// };

// flatpickr('#datetime-picker', options);

// function onClickStartBtn() {
//     startBtn.setAttribute('disabled', true);
//     const timerId = setInterval(() => {
//         const timerTime = inputDates - Date.now();
//         const { days, hours, minutes, seconds } = convertMs(timerTime);
//         daysTimer.textContent = days;
//         hoursTimer.textContent = hours;
//         minutesTimer.textContent = minutes;
//         secondsTimer.textContent = seconds;
//         if (timerTime < 1000) {
//             clearInterval(timerId);
//         }
//     }, 1000);
//     console.dir();
// }

// function addLeadingZero(value) {
//     return String(value).padStart(2, '0');
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(
//     Math.floor((((ms % day) % hour) % minute) / second)
//   );

//   return { days, hours, minutes, seconds };
// }



// // Описан в документации
// import flatpickr from 'flatpickr';
// // Дополнительный импорт стилей
// import 'flatpickr/dist/flatpickr.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';


// const startEl = document.querySelector('[data-start]');
// startEl.disabled = true;

// const daysEl = document.querySelector('[data-days]');
// const hoursEl = document.querySelector('[data-hours]');
// const minutesEl = document.querySelector('[data-minutes]');
// const secondsEl = document.querySelector('[data-seconds]');

// let timerId = null; // Резервирую переменную под будущий таймер тут, чтобы была возможность реализовать сценарий когда от него нужно избавиться
// let selectedTime = 0; // Так же запоминаю выбранное время

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (timerId) clearInterval(timerId); // Если уже запустили таймер, то открытие тайм пикера обнулит таймер

//     if (selectedDates[0] < Date.now()) {
//       // Выбрали прошлое время
//       startEl.disabled = true;
//       Notify.failure('Please choose a date in the future');
//       return;
//     } else {
//       // Выбрали будущее время
//       startEl.disabled = false;
//     }

//     selectedTime = selectedDates[0]; // Запоминаем, пригодится в onStart()
//     timerUpdate(convertMs(selectedTime - Date.now()));
//   },
// };

// function onStart() {
//   let remainingTime = selectedTime - Date.now(); // Высчитываем заново сколько времени осталось после нажатия
//   startEl.disabled = true; // Чтобы не было соблазна поклацать после старта

//   timerId = setInterval(() => {
//     remainingTime = selectedTime - Date.now(); // Каждую секунду снова считаем сколько осталось обратного отсчёта
//     if (remainingTime > 0) {
//       timerUpdate(convertMs(remainingTime)); // Обновляем таймер до тех пор пока время не вышло
//     } else {
//       clearInterval(timerId); // Время вышло
//       Notify.info('Time is gone!');
//     }
//   }, 1000);
// }

// flatpickr('#datetime-picker', options); // Создаём экземпляр тайм пикера

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = pad(Math.floor(ms / day));
//   // Remaining hours
//   const hours = pad(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = pad(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
// }

// function timerUpdate({ days, hours, minutes, seconds }) {
//   daysEl.textContent = days;
//   hoursEl.textContent = hours;
//   minutesEl.textContent = minutes;
//   secondsEl.textContent = seconds;
// }

// startEl.addEventListener('click', onStart);





// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const startBtn = document.querySelector('[data-start]');
// const dataDays = document.querySelector('[data-days]');
// const dataHours = document.querySelector('[data-hours]');
// const dataMinutes = document.querySelector('[data-minutes]');
// const dataSeconds = document.querySelector('[data-seconds]');

// startBtn.setAttribute('disabled', 'disabled');
// let timerId = null;
// let timeToTheEnd = null;
// let convertTime = null;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (selectedDates[0].getTime() < options.defaultDate.getTime()) {
//       Notify.failure('Please choose a date in the future');

//       return;
//     }
//     startBtn.removeAttribute('disabled', 'disabled');
//     timeToTheEnd = selectedDates[0].getTime() - options.defaultDate.getTime();

//     return timeToTheEnd;
//   },
// };

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function addTwoNumber(value) {
//   return String(value).padStart(2, 0);
// }

// function formatintTime(time) {
//   dataSeconds.textContent = addTwoNumber(time.seconds);
//   dataMinutes.textContent = addTwoNumber(time.minutes);
//   dataHours.textContent = addTwoNumber(time.hours);
//   dataDays.textContent = addTwoNumber(time.days);
// }

// const dateTimePicker = flatpickr('#datetime-picker', options);

// startBtn.addEventListener('click', onClickStartBtn);

// function onClickStartBtn() {
//   timerId = setInterval(startTimer, 1000);
//   convertTime = convertMs(timeToTheEnd);
//   formatintTime(convertTime);
// }

// function startTimer() {
//   timeToTheEnd -= 1000;
//   startBtn.setAttribute('disabled', 'disabled');
//   if (timeToTheEnd <= 0) {
//     clearInterval(timerId);

//     return;
//   } else {
//     convertTime = convertMs(timeToTheEnd);
//     formatintTime(convertTime);

//     return;
//   }
// }