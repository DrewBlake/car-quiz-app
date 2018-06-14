'use strict';

const STORE = [
  {question: 'A 2-wheel-drive vehicle typically has how many wheels?',
  answer1: '2 - wheels',
  answer2: '4 - wheels',
  answer3: '0 - wheels',
  answer4: '8 - wheels',
  correctAnswer: '4 - wheels',
  correctAnswerImage: '"https://images.unsplash.com/photo-1507722661946-ec4abdfe6a1e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=56b393404a6f550a898452a094bf7982&auto=format&fit=crop&w=500&q=60" alt="classic car in grass"'},
  
  {question: 'What type of fluid goes into a radiator?',
  answer1: 'Salt water',
  answer2: 'Engine oil',
  answer3: 'Anti-Freeze',
  answer4: 'Freon',
  correctAnswer: 'Anti-Freeze',
  correctAnswerImage: '"https://cdn.pixabay.com/photo/2016/10/13/17/16/car-engine-1738309__340.jpg" alt="chrome engine, orange"'},
  
  {question: 'Brake fluid is hydroscopic - this means?',
  answer1: 'It expands with heat',
  answer2: 'It is flamable',
  answer3: 'It absorbs moisture',
  answer4: 'It is a type of acid that will burn your skin',
  correctAnswer: 'It absorbs moisture',
  correctAnswerImage: '"https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89f2d0893653b7b7dcf1a8f469a4242d&auto=format&fit=crop&w=500&q=60" alt="driving, neon lights at night"'},
  
  {question: 'What are the most common types of fuel for an internal combustion engine?',
  answer1: 'Alcohol and ethonal',
  answer2: 'Nitrogen oxide and vegatable oil',
  answer3: 'Whisky and mouthwash',
  answer4: 'Gasoline and diesel',
  correctAnswer: 'Gasoline and diesel',
  correctAnswerImage: '"https://cdn.pixabay.com/photo/2016/07/28/16/50/car-engine-1548434__340.jpg" alt="chrome engine, red"'},
  
  {question: 'The engine and transmission assembly is refered to as the vehicles what?',
  answer1: 'Flux capacitor',
  answer2: 'Powertrain',
  answer3: 'Differential',
  answer4: 'Main drive',
  correctAnswer: 'Powertrain',
  correctAnswerImage: '"https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5a75f85cc6f827a066097cae05e39223&auto=format&fit=crop&w=500&q=60" alt="black mercedes"'},

  {question: 'What does a spark plug do?',
  answer1: 'Ignites the air fuel mixture',
  answer2: 'Turns the engine over on initial start up',
  answer3: 'Keeps an electrical charge on the vehicles battery',
  answer4: 'Provides power to the headlights',
  correctAnswer: 'Ignites the air fuel mixture',
  correctAnswerImage: '"https://images.unsplash.com/photo-1444012830796-83db7e1db0d3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=59969e68bd1b123897d45009adfe7a4e&auto=format&fit=crop&w=500&q=60" alt="classic firebird, red"'},

  {question: 'Electric vehicles use what type of battery(s)?',
  answer1: 'Lead acid',
  answer2: 'Nickle cadium',
  answer3: 'Duracell',
  answer4: 'Lithium ion',
  correctAnswer: 'Lithium ion',
  correctAnswerImage: '"https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=69d02575f863d4faa4a86593c93078f0&auto=format&fit=crop&w=500&q=60" alt="ferrari, yellow"'},

  {question: 'What are the two major advancements American car manufacturers brought to the auto industry?',
  answer1: 'Internal combustion engine and disc brake system',
  answer2: 'Automatic transmissions and air conditioning',
  answer3: 'Power steering and the rotary engine',
  answer4: 'Manual transmissions and go fast juice',
  correctAnswer: 'Automatic transmissions and air conditioning',
  correctAnswerImage: '"https://images.unsplash.com/photo-1495706643653-374ecc23b61d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0230c964bd93675b183e151ed9d1cbb3&auto=format&fit=crop&w=500&q=60" alt="classic car, blue"'},

  {question: 'What type of chemical goes into an air conditioning system?',
  answer1: 'Anti-freeze',
  answer2: 'Engine coolant',
  answer3: 'Freon',
  answer4: 'Oxygen',
  correctAnswer: 'Freon',
  correctAnswerImage: '"https://images.unsplash.com/photo-1527387496899-96808fe741a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1712257bf2056b014eb08de934b1a4e2&auto=format&fit=crop&w=500&q=60" alt="classic car, black"'},

  {question: 'What are the 2 major components in a vehicles starting system?',
  answer1: 'Battery and starter',
  answer2: 'Gas pedal and throttle body',
  answer3: 'Instrument cluster and gear shifter',
  answer4: 'Alternator and battery',
  correctAnswer: 'Battery and starter',
  correctAnswerImage: '"https://images.unsplash.com/photo-1474015977340-64a93f54a9f5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0dad6be5bb7b4cda3926f790493bc51b&auto=format&fit=crop&w=500&q=60" alt="silver mercedes, winged doors"'}
];

let questionCount = 0;
let rightAnswerCount = 0;
let wrongAnswerCount = 0;

function generateQuestion(questionNum) {
  return `
  <main role="main">
    <form action="/some-server-endpoint" method ="post">
      <fieldset name='car-questions'>
        <legend class="question">${questionNum.question}</legend>
        <input class="select" type="radio" name="answer-select" id="ans-1" value="${questionNum.answer1}" checked>
        <label for="ans-1">${questionNum.answer1}</label>
        <br>
        <input class="select" type="radio" name="answer-select" id="ans-2" value="${questionNum.answer2}">
        <label for="ans-2">${questionNum.answer2}</label>
        <br>
        <input class="select" type="radio" name="answer-select" id="ans-3" value="${questionNum.answer3}">
        <label for="ans-3">${questionNum.answer3}</label>
        <br>
        <input class="select" type="radio" name="answer-select" id="ans-4" value="${questionNum.answer4}">
        <label for="ans-4">${questionNum.answer4}</label>
        <br>  
      </fieldset>
        <button type="submit" class="submit-button js-submit-button">Submit</button> 
    </form>
    <footer role="contentinfo">
      <span>${questionCount + 1}/${STORE.length}</span><span> ${rightAnswerCount} correct ${wrongAnswerCount} incorrect</span>
    </footer>
  </main>`;      
}

function renderQuestion() {
  $('.js-car-question').html(generateQuestion(STORE[questionCount])); 
}

function handleStartButtonClick() {
   $('.js-start-button').on('click', function(event) {
    //$('.js-car-header').remove();
    renderQuestion();
    //console.log($('input:checked').val()); 
  });
}

function handleNextButtonClick() {
  $('.js-car-question').on('click', '.js-next-button', function(event) {
    if (questionCount === STORE.length) {
        finalResults();
    } else {
        renderQuestion();
    }
  });
}

function generateRightAnswer() {
  return`
    <div class='right-answer'>
      <img src=${STORE[questionCount - 1].correctAnswerImage}>
      <h2>Correct! Great Job! You are ${rightAnswerCount} for ${questionCount}</h2>
      <button class='js-next-button next-button'>Next</button>
    </div>`;
}

function generateWrongAnswer() {
  return`
    <div class='wrong-answer'>
      <img src='https://images.unsplash.com/photo-1461724947009-3c626ff3d2bc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6285973472b2de5a467fd4dc95b9753&auto=format&fit=crop&w=500&q=60' alt='broken down car'>
      <h2>Sorry, the correct answer is ${STORE[questionCount - 1].correctAnswer}.  You are ${rightAnswerCount} for ${questionCount}</h2>
      <button class='js-next-button next-button'>Next</button>
    </div>`;
}

function renderRightAnswer() {
  $('.js-car-question').html(generateRightAnswer());
  handleNextButtonClick();
}

function renderWrongAnswer() {
  $('.js-car-question').html(generateWrongAnswer());
  handleNextButtonClick();
}

function generateFinalResultsPassed() {
  return `
  <div class='results-passed'>
    <h1>Congratulations you passed the Quizz!
    You answered ${rightAnswerCount} out of ${STORE.length} questions right!</h1>
    ${generateRestartQuizz()}
  </div>`; 
}

function generateFinalResultsFailed() {
  return `
  <div class='results-failed'>
    <h1>Sorry but you failed the Quizz. You answered ${rightAnswerCount} out of ${STORE.length} questions right.</h1>
    ${generateRestartQuizz()}
  </div>`;  
}

function renderFinalResultsPassed() {
  $('.js-car-question').html(generateFinalResultsPassed);
}

function renderFinalResultsFailed() {
  $('.js-car-question').html(generateFinalResultsFailed);
}

function generateRestartQuizz() {
  return `
  <button class='js-restart-button restart-button'>Restart</button>`;
}

function renderRestartQuizz() {
  $('.js-car-question').html(generateRestartQuizz); 
}
 
function handleRestartButton() {
  $('.js-car-question').on('click', '.js-restart-button', function(event) {
  questionCount = 0;
  rightAnswerCount = 0;
  wrongAnswerCount = 0;
  renderQuestion();
  });
}

function finalResults() {
  //console.log(rightAnswerCount);
  //console.log(rightAnswerCount/STORE.length);
  if (rightAnswerCount / STORE.length >= .7) {
    renderFinalResultsPassed();
  } else {
    renderFinalResultsFailed();
  };
}

function evaluateUserAnswer(userInput, rightAnswer) {
  if (userInput === rightAnswer) {
        rightAnswerCount ++;
        renderRightAnswer();
      } else {
        wrongAnswerCount ++;
        renderWrongAnswer();
      };
}

function handleSubmitButtonClick() {
  $('.js-car-question').on('click', '.js-submit-button', function(event) {
    event.preventDefault();
      let userAnswer = $('input:checked').val();
      let rightAnswer = STORE[questionCount].correctAnswer;
      questionCount ++;
      evaluateUserAnswer(userAnswer, rightAnswer);
  });
}

function handleQuizzApp() {
  handleStartButtonClick();
  handleSubmitButtonClick();
  handleNextButtonClick();
  handleRestartButton();
}

$(handleQuizzApp);