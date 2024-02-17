const questions = [

    {
        question: 'Question: What is the capital city of Canada?',
        answers: [

            {text:'a) Ottawa', correct: true},
            {text:'b) Toronto', correct: false},
            {text:'c) Vancouver', correct: false},
            {text:'d) Montreal', correct: false}

        ]
    },

    {
        question: 'Question: Which planet is known as the "Red Planet?',
        answers: [

            {text:'a) Venus', correct: false},
            {text:'b) Mars', correct: true},
            {text:'c) Jupiter', correct: false},
            {text:'d) Saturn', correct: false}

        ]
    },

    {
        question: 'Question: Who was the first President of the United States?',
        answers: [

            {text:'a) Thomas Jefferson', correct: false},
            {text:'b) George Washington', correct: true},
            {text:'c) Abraham Lincoln', correct: false},
            {text:'d) John Adams', correct: false}
        ]
    },

    {
        question: 'Question: Which ocean is the largest on Earth?',
        answers: [

            {text:'a) Pacific Ocean', correct: true},
            {text:'b) Atlantic Ocean', correct: false},
            {text:'c) Indian Ocean', correct: false},
            {text:'d) Southern Ocean', correct: false}

        ]
    }
    


]


const questionContainer = document.getElementById('qst');
const answersContainer = document.getElementById('ans');
const nxtBtn = document.getElementById('nBtn');


let currentIndex = 0;
let scrore = 0;


startQuiz = () =>{

    currentIndex = 0;
    scrore = 0;
    nxtBtn.textContent = 'Next';
    showQuestion();

}


showQuestion = () =>{

    resetState()
    currentQuestion = questions[currentIndex];
    questionContainer.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(btn => {

        const ansBtn = document.createElement('button');
        ansBtn.textContent = btn.text;
        ansBtn.classList.add('ans_btn');
        answersContainer.appendChild(ansBtn);


        if(btn.correct){

            
            ansBtn.dataset.correct = btn.correct;
            

        }

        ansBtn.addEventListener('click', showAns);

        
    });

    
    
}


resetState = () => {

        nxtBtn.style.display = 'none';
        while(answersContainer.firstChild){
            answersContainer.removeChild(answersContainer.firstChild);
        }

}

showAns = (e) => {

    cBtn = e.target;
    isCorrect = cBtn.dataset.correct;

    if (isCorrect){

        cBtn.classList.add('correct');
        scrore++;

    }
    
    else 
    
    {
        cBtn.classList.add('incorrect');
    }

    Array.from(answersContainer.children).forEach(btn1 => {

        if(btn1.dataset.correct === 'true'){

           
            btn1.classList.add('correct');

        }

        btn1.disabled = true;

    });

    nxtBtn.style.display = 'block';



}

handleQuestion = () =>{

    currentIndex++;
    if(currentIndex < questions.length)
    {
        showQuestion();
    }else
    {
        showScore();
    }
    
    
}


showScore = () => {


    resetState();
    questionContainer.textContent = `Your Score is ${scrore} out of ${questions.length}`;
    nxtBtn.style.display = 'block';
    nxtBtn.textContent = 'Restart Quiz'

   

    
}



nxtBtn.addEventListener('click', () => {

    if(currentIndex < questions.length)
    {
        console.log('working nxt')
        handleQuestion()
    }

    else {

        startQuiz();
    }
    
});






startQuiz();
