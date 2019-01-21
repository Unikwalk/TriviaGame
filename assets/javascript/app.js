//Global variables, object to store Q&A
//Function for building quiz, 
//funtion for timer and add it to the page, 
//functon for display results and incorrect answer

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

(function() {
    function buildQuiz() {
      var output = [];
      myQuestions.forEach((currentQuestion, questionNumber) => {
        var answers = [];

        for (letter in currentQuestion.answers) {
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {

      var answerContainers = quizContainer.querySelectorAll(".answers");
  
      var numCorrect = 0;
      myQuestions.forEach((currentQuestion, questionNumber) => {
        var answerContainer = answerContainers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
          numCorrect++;

          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    var quizContainer = document.getElementById("quiz");
    var resultsContainer = document.getElementById("results");
    var submitButton = document.getElementById("submit");
    var myQuestions = [
        {
          question: "What is the Italian word for pie?",
          answers: {
            a: "Pi",
            b: "Pizza",
            c: "Torta"
          },
          correctAnswer: "b"
        },
        {
          question: "What is the national flower of Wales?",
          answers: {
            a: "Daffodil",
            b: "Tulip",
            c: "Rose"
          },
          correctAnswer: "a"
        },
        {
          question: "Which reptile, according to the song, should you never smile at?",
          answers: {
            a: "Bear",
            b: "Komodo Dragon",
            c: "Crocodile",
          },
          correctAnswer: "c"
        },
        {
            question: "Alfred, an ancient King of Wessex, is famous for burning what?",
            answers: {
                a: "Cakes",
                b: "Clothes",
                c: "Houses",
            },
            correctAnswer: "a"
        },
        {
            question: "How many bones are there on a Skull & Crossbones flag?",
            answers: {
              a: "2",
              b: "3",
              c: "4",
            },
            correctAnswer: "b"
        },
        {
            question: "How many bones are there on a Skull & Crossbones flag?",
            answers: {
              a: "2",
              b: "3",
              c: "4",
            },
            correctAnswer: "b"
        },
        {
            question: "What was Marilyn Monroe's natural hair colour?",
            answers: {
              a: "Ginger",
              b: "Blonde",
              c: "Brunette",
            },
            correctAnswer: "a"
        },
      ];
  
    buildQuiz();
    submitButton.addEventListener("click", showResults);
  })();
