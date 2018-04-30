// Name variables

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

function buildQuiz(){}

function showResults(){}

// display quiz on load
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);

const myQuestions = [
  {
    question: "What is your favorite kind of weather?",
    answers: {
      a: "Raining",
      b: "Sunny Days, baby!",
      c: "Snow and more snow, please."
    }
  {
    question: "How do you like your eggs cooked?",
    answers: {
      a: "Over-easy",
      b: "Scrambled",
      c: "Sunny-side up"
    }
  {
    question: "What is your favorite holiday?",
    answers: {
      a: "Christmas",
      b: "I don't celebrate holidays",
      c: "Easter",
      d: "Valentine's Day"
    }
];

quizContainer.innerHTML = output.join('');

function showResults(){

	

