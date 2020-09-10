//GIVEN I am taking a code quiz
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
//I am presented with a question

submitButton.onclick = function () {
showResults(quizContainer, questions, resultsContainer);

}
const myQuestions = [
    {
        question: "what is the greatest film of all time?",
        answers: {
            a: "Dune",
            b: "Star Wars",
            c: "The Notebook"
        },
        correctAnswer: "a"
    },
    {
        question: "Who played the best movie character of all time?",
        answers: {
            a: "Jonny Lee Miller",
            b: "Tom Cruise",
            c: "Kyle MacLachlan"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the greatest line in move history?",
        answers: {
            a: "Now I'm Gonna Have To Kill This F***ing Clown",
            b: "Never fear, I is here.",
            c: "Show me the money!",
            d: "I am the Kwisatz Haderach."
        },
        correctAnswer: "d"
    }
];

    //WHEN I click the start button, this happens:
    startButton.onclick = function () {
        showResults(quizContainer, questions, resultsContainer);
    let seconds = 0;

    let interval; 

    function buildQuiz(mins) {

        seconds = mins*60 || 0;     
        interval = setInterval(function() {
      
             seconds--;
             if(!seconds){
                  clearInterval(interval); 
                  alert("Nicely Done!");


document.getElementById("quiz").innerHTML = myQuestions;



submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
function showResults() { 
buildQuiz();
submitButton.addEventListener('click', showResults);