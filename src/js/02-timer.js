import flatpickr from 'flatpickr';
console.log(flatpickr);
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const text = document.querySelector('#datetime-picker');
console.log(text);
const timerHtml = document.querySelector('.timer');
const btnStart = document.querySelector('button[data-start]');
const seconds = document.querySelector('span[data-seconds]');
const minutes = document.querySelector('span[data-minutes]');
const hours = document.querySelector('span[data-hours]');
const days = document.querySelector('span[data-days]');

btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    // if (selectedDates[0] < Date.now()) {
    //   Notiflix.Notify.failure('Please choose a date in the future');
    //   btnStart.disabled = true;
    // } else {
    //   btnStart.disabled = false;
    // }
  },
};

// flatpickr(text, options);
console.log('hello world');

// let countdown;

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   return value.toString().padStart(2, '0');
// }

// function leidibng() {
//   let timeObject = convertMs(countdown);
//   days.textContent = addLeadingZero(timeObject.days);
//   hours.textContent = addLeadingZero(timeObject.hours);
//   minutes.textContent = addLeadingZero(timeObject.minutes);
//   seconds.textContent = addLeadingZero(timeObject.seconds);
// }

// btnStart.addEventListener('click', () => {
//   let timer = setInterval(() => {
//     countdown = new Date(text.value) - Date.now();
//     btnStart.disabled = true;
//     if (countdown >= 0) {
//       leidibng();
//       if (countdown <= 10000) {
//         timerHtml.style.color = 'tomato';
//       }
//     } else {
//       Notiflix.Notify.success('Countdown finished');
//       timerHtml.style.color = 'black';
//       clearInterval(timer);
//     }
//   }, 1000);
// });
