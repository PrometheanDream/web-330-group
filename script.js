(function() {
  // array that holds the questions and answers and correct answer.
  const myQuestions = [
    {
      question: "Question One", // Question One
      answers: {
          a:"Answer One",
          b: "Answer Two",
          c: "Answer Three",
          d: "Answer Four"
      },
      trueAnswer: "a"
  },
  {
      question: "Question Two", // Question Two
      answers: {
          a:"Answer One",
          b: "Answer Two",
          c: "Answer Three",
          d: "Answer Four"
      },
      trueAnswer: "a"
  },
  {
      question: "Question Three", // Question Three
      answers: {
          a:"Answer One",
          b: "Answer Two",
          c: "Answer Three",
          d: "Answer Four"
      },
      trueAnswer: "a"
  },
  {
      question: "Question Four", // Question Four
      answers: {
          a:"Answer One",
          b: "Answer Two",
          c: "Answer Three",
          d: "Answer Four"
      },
      trueAnswer: "a"
  },
  {
      question: "Question Five", // Question Five
      answers: {
          a:"Answer One",
          b: "Answer Two",
          c: "Answer Three",
          d: "Answer Four"
      },
      trueAnswer: "a"
  },
  {
      question: "Question Six", // Question Six
      answers: {
          a:"Answer One",
          b: "Answer Two",
          c: "Answer Three",
          d: "Answer Four"
      },
      trueAnswer: "a"
  },
  {
      question: "Question Seven", // Question Seven
      answers: {
          a:"Answer One",
          b: "Answer Two",
          c: "Answer Three",
          d: "Answer Four"
      },
      trueAnswer: "a"
  },
  {
      question: "Question Eight", // Question Eight
      answers: {
          a:"Answer One",
          b: "Answer Two",
          c: "Answer Three",
          d: "Answer Four"
      },
      trueAnswer: "a"
  },
  {
      question: "Question Nine", // Question Nine
      answers: {
          a:"Answer One",
          b: "Answer Two",
          c: "Answer Three",
          d: "Answer Four"
      },
      trueAnswer: "a"
  },
  {
      question: "Question Ten", // Question Ten
      answers: {
          a:"Answer One",
          b: "Answer Two",
          c: "Answer Three",
          d: "Answer Four"
      },
      trueAnswer: "a"
  }
];

  function buildQuiz() {
    // array for storing HTML output
    const output = [];

    // for each question generates the HTML, creates an array to hold answers, a loop to fill the answers from the pool,
    // and creates a radio button to be clicked.
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // array for holding the answer options
      const answers = [];

      // loops, and creates a radio button for each answer
      for (letter in currentQuestion.answers) {
        // pushes the created buttons to the corresponding answer
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // pushes the question and answer to the output array to be displayed
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
           <div class="finalPage"></div>
         </div>`
      );
    });

    //pushes what was just created back into the output array
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // selects all the answers from the containerQuiz, which was pushed by the buildQuiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // sets the starting score at 0 each time.
    let numCorrect = 0;

    // for each loop,
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // sets containerAnswer(no s) equal to containerAnswer(s)
      const answerContainer = answerContainers[questionNumber];
      // identifies which button has been selected, but doesn't do anything with it
      const selector = `input[name=question${questionNumber}]:checked`;
      // finds the identified radio button or lack of answer, assigns to .value
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
