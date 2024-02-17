const questions = [

    {
        question: 'Question: What is the capital city of Canada?' ,
        answer: [
            { text: 'a) Ottawa' , correct: true},
            { text: 'b) Toronto' , correct: false},
            { text: 'c) Vancouver' , correct: false},
            { text: 'd) Montreal' , correct: false}
        ]
    },

    {
        question: 'Question: In which year did the United States declare its independence?' ,
        answer: [
            { text: 'a) 1776' , correct: true},
            { text: 'b) 1789' , correct: false},
            { text: 'c) 1800' , correct: false},
            { text: 'd) 1812' , correct: false}
        ]
    },

    {
        question: 'Question: In which sport would you perform a slam dunk?' ,
        answer: [
            { text: 'a) Soccer' , correct: true},
            { text: 'b) Tennis' , correct: false},
            { text: 'c) Basketball' , correct: false},
            { text: 'd) Golf' , correct: false}
        ]
    },

    {
        question: 'Question: Who directed the movie "Inception"?' ,
        answer: [
            { text: 'a) Denis Villeneuve' , correct: false},
            { text: 'b) Christopher Nolan' , correct: true},
            { text: 'c) Steven Spielberg' , correct: false},
            { text: 'd) James Cameron' , correct: false}
        ]
    }
]


const questionContainer = document.getElementById('qst');
const ansContainer = document.getElementById('ans');
const nxtBtn = document.getElementById('nBtn');


let currentIndex = 0;
let score = 0;

startQuiz = () => {

    currentIndex = 0;
    score = 0;
    showQuestion();

}

resetQuiz = () => {

    nxtBtn.style.display = 'none';

    while(ansContainer.firstChild){
        ansContainer.removeChild(ansContainer.firstChild);
    }
}


showQuestion = () => {

    resetQuiz();
    currentQuestion = questions[currentIndex];
    questionContainer.textContent =  currentQuestion.question;

    currentQuestion.answer.forEach(btn => {

         newBtn = document.createElement('button');
         newBtn.textContent = btn.text;
         newBtn.classList.add('ans_btn')
         ansContainer.appendChild(newBtn);

         if(btn.correct){

            newBtn.dataset.correct = 'correct';
            console.log(newBtn.textContent);
         }

         newBtn.addEventListener('click', checkAns);

        
    });
    
}


checkAns = (e) => {

    btnValue = e.target;
    console.log(btnValue);

    if(btnValue.dataset.correct)

    {
        score++;
        btnValue.classList.add('correct');
    }
    else
    {
        btnValue.classList.add('incorrect');
    }

    Array.from(ansContainer.children).forEach(btn =>{

            if(btn.dataset.correct){

                btn.classList.add('correct');

            }
    
            
                
                btn.disabled = true;

            

    })

    nxtBtn.style.display = 'block';

}


handleQuestion = () => {
    currentIndex++;

    if(currentIndex < questions.length) {
        showQuestion(); 
    }else
    {
        showScore();
    }

    
}


showScore = () => {
    resetQuiz();

    questionContainer.textContent = ` your Answered ${score} out of ${questions.length}`;
    nxtBtn.style.display = 'block';
    nxtBtn.textContent = 'Restart Quiz';
}


nxtBtn.addEventListener('click', () => {

    if(currentIndex < questions.length){

       handleQuestion(); 

    }

    else

    {
        startQuiz();
    }

})

startQuiz();