import { collectBtn, inputs, inputsNumber, inputsCode } from './ts/elements';
import { validateNumber, Validators } from './ts/inputsValidation';
import { displayModal } from './ts/displayModal';
import { clearInputs } from './ts/clearInputs';


clearInputs(inputsNumber, inputsCode)

let initTime: Date;

collectBtn.addEventListener('click', e => {
  console.log(inputsNumber.value);
  if (inputsNumber.value === '') {
    initTime = new Date();
  }

  if (!inputs.classList.contains('inputs--active')) {
    inputs.classList.toggle('inputs--active');
    initTime = new Date();
    console.log(initTime);
    return;
  }

  if (validateNumber(inputsNumber, Validators.NUMBER) && validateNumber(inputsCode, Validators.CODE)) {
    const currentTime = new Date();
    const diff = Math.ceil(Math.abs(currentTime.getTime() - initTime.getTime()) / 1000);
    displayModal(diff);
  } else {
    alert('Niepoprawne dane.')
  }
})