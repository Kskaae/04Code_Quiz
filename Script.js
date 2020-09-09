//GIVEN I am taking a code quiz
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
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
            d: "I am the Kwisatz Haderach. "
        },
        correctAnswer: "d"
    }
];
   let myArray=[ 1, 12, "a",{
     popcorn:"extraButter", sweet:"candy", soda:"coke", pizza:"pepperoni", isHappy: true 

 }, false, [1, 2, 3], {
     myKey:"myValue"
 } 
  ]
  let myItem = myArray[1]
  let mySecondItem = myArray[0]
  let entireObject = myArray[3]
  let keyFromObject = myArray[3].popcorn
  let happyVar = myArray [3].isHappy 


  let x=true
  let y= 1
  let z= "myString"
  let a = ["arrayItem"]
  let b = {color:"blue"}

    //WHEN I click the start button


    function buildQuiz() {

//I am presented with a question
//Upon "click" the user will see the first question, 
//followed by three answer choices
// Using the quiz container variable we capture the div
//with id of quiz and populate it with first item in myQuestions array
//Use innerHTML function
//document.getElementById("demo").innerHTML = "Paragraph changed!";
document.getElementById("quiz").innerHTML = myQuestions
    }




function showResults() { }

buildQuiz();
submitButton.addEventListener('click', shoeResults);












//THEN a timer starts and 


//WHEN I answer a question

//THEN I am presented with another question

//WHEN I answer a question incorrectly

//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score