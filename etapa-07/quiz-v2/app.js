const formSubmit = document.querySelector('.quiz-form');
const finalResult = document.querySelector('.result');
const correctAnswers = ['B', 'A', 'C', 'A', 'B'];

const options = {
  bottom: '10px', // default: '32px'
  right: '32px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const addDarkmodeWidget = () => {
  new Darkmode(options).showWidget();
}


const userAnswersCorrect = (event) => {
  event.preventDefault();

  let score = 0;
  const userAnswers = [
    formSubmit.inputQuestion1.value,
    formSubmit.inputQuestion2.value,
    formSubmit.inputQuestion3.value,
    formSubmit.inputQuestion4.value,
    formSubmit.inputQuestion5.value,
  ];

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 20;
    }
  });

  scrollTo(0, 0)

  finalResult.classList.remove('d-none');

  let counter = 0

  const timer = setInterval(() => {
    if(counter === score) {
      clearInterval(timer)
    }

    finalResult.querySelector('span').textContent = `${counter}%`;
    counter++
  }, 20)
};

window.addEventListener('load', addDarkmodeWidget);
formSubmit.addEventListener('submit', userAnswersCorrect);


 
