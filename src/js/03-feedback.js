import { values } from '@vimeo/player';
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', formSubmit);

form.addEventListener('input', throttle(onInputClick, 500));

const KEY_FORM_LS = 'feedback-form-state';

const inputData = JSON.parse(localStorage.getItem(KEY_FORM_LS)) ?? {};

checkInputAfterReload();

function formSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();

  console.log(JSON.parse(localStorage.getItem(KEY_FORM_LS)));

  localStorage.removeItem(KEY_FORM_LS);
}

function onInputClick(event) {
  inputData[event.target.name] = event.target.value;

  localStorage.setItem(KEY_FORM_LS, JSON.stringify(inputData));
}
// console.log(inputData);

function checkInputAfterReload(event) {
  if (inputData) {
    const { email, message } = form.elements;
    // console.log(form.elements);
    email.value = inputData.email || '';
    message.value = inputData.message || '';
  }
}

