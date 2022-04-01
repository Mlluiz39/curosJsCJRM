const formElement = document.querySelector('.quiz-form');
const paragraphElement = document.querySelector('.paragraph');
const popupElement = document.querySelector('.popup-wrapper');
const correcResponse = ['B', 'A', 'C', 'A', 'B'];

const showPopupClose = (event) => {
  const nameClickedElement = event.target.classList[0];
  const className = ['popup-close-x', 'popup-wrapper', 'popup-close-button'];
  const closePopup = className.some(
    (className) => className === nameClickedElement
  );

  if (closePopup) {
    popupElement.style.display = 'none';
  }
};

const showCorrectUserResponse = (event) => {
  event.preventDefault();

  let score = 0;
  const userResponses = [
    formElement.inputQuestion1.value,
    formElement.inputQuestion2.value,
    formElement.inputQuestion3.value,
    formElement.inputQuestion4.value,
    formElement.inputQuestion5.value,
  ];

  userResponses.forEach((userResponse, index) => {
    if (userResponse === correcResponse[index]) {
      score += 1;
    }
  });
  popupElement.style.display = 'block';
  if(paragraphElement.textContent.length >= 1) {
    paragraphElement.textContent = `Você acertou: ${score} perguntas`;
  } else {
    paragraphElement.textContent = `Você acertou: ${score} pergunta`;
  }
};

popupElement.addEventListener('click', showPopupClose);
formElement.addEventListener('submit', showCorrectUserResponse);
