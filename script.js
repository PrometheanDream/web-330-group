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
              ${letter} : ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // pushes the question and answer to the output array to be displayed
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    //pushes what was just created back into the output array
    quizContainer.innerHTML = output.join("");
  }

    function result(r) {
        return r;
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
      if (userAnswer === currentQuestion.trueAnswer) {
        // add to the number of correct answers
        numCorrect++;       
      }  

    });
    
    // Add the score to a local variable
    let score = `${numCorrect} out of ${myQuestions.length}`;

    // Add the score variable to the HTML session object
    sessionStorage.setItem("finalScore", score);
    //sessionStorage.setItem("finalRank", numCorrect);

    //finalScore.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    // directs the submit button to the score page on click
    window.location.href = "scorePage.html";

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

  // moves to the next slide
  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  //moves to the previous slide
  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  /* will eventually hold an if/else or for loop to give out rank based on score
   const finalRank;
  function customRank(){
    if (numCorrect < 6){
        finalRank = "Beginner";
        return finalRank;
    } else if (numCorrect >= 6 && numberCorrect <= 8){
        finalRank = "Novice";
        return finalRank;
    } else if (numCorrect > 8){
        finalRank = "Expert";
        return finalRank;
    }
    sessionStorage.setItem("finalRank", finalRank);
  } */

  const finalScore = document.getElementById("finalScore");
  const quizContainer = document.getElementById("quiz");
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
  // previous button -1 to current slide until 0
  previousButton.addEventListener("click", showPreviousSlide);
  // next button +1 to current slide until slides.length
  nextButton.addEventListener("click", showNextSlide);
  // clears the session storage data on click
  restartButton.addEventListener("click", sessionStorage.clear());
})();
