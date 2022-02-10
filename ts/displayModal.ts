import { clearInputs } from './clearInputs';
import { shadow, inputsNumber, inputsCode, inputs, modalInner, modalOuter, loader, endBtn, repeatBtn } from './elements';
import { wait } from './wait';

export async function displayModal(time: number): Promise<void> {

  modalInner.innerHTML = `
  <h2>Paczka odebrana!</h2>
  <p>Zrobiłeś to w czasie ${time} sekund! Czy możemy zrobić dla Ciebie coś jeszcze?</p>
  `

  endBtn.innerText = 'To wszystko na dziś';
  endBtn.addEventListener('click', e => {
    modalOuter.classList.remove('modal__outer--open');
    clearInputs(inputsNumber, inputsCode);
    inputs.classList.toggle('inputs--active');
  })

  repeatBtn.innerText = 'Odbierz kolejną paczkę';
  repeatBtn.addEventListener('click', e => {
    modalOuter.classList.remove('modal__outer--open');
    clearInputs(inputsNumber, inputsCode);
  })

  modalInner.appendChild(endBtn);
  modalInner.appendChild(repeatBtn);

  shadow.classList.add('shadow--active');
  loader.classList.add('loader--active');

  await wait(2000);

  shadow.classList.remove('shadow--active');
  loader.classList.remove('loader--active');

  modalOuter.classList.add('modal__outer--open');
}