const quizData=[
    {
        question: "Which among the following would be maximum in a Food Chain?",
        a:"Producers",
        b:"Primary Consumers",
        c:"Secondary Consumers",
        d:"Decomposers",
        correct: "d",
    },
    {
        question:"With reference to wildlife protection, TRAFFIC is a joint programme of:",
        a:"Global Environment Facility (GEF) and World Wide Fund for Nature (WWF)",
        b:"World Wide Fund for Nature (WWF) and World Conservation Union (IUCN)",
        c:"World Conservation Union (IUCN) and Greenpeace International",
        d:"Greenpeace International and Global Environment Facility (GEF)",
        correct: "b",
    },
    {
        question:"How does the water from a well be purified before drinking?",
        a:"Boil it",
        b:"Use ion exchange resins",
        c:"Use solar stills for distilling",
        d:"Use potassium permanganate for purifying the water",
        correct: "d",
    },
    {
        question:"The highest Biological Oxygen Demand (BOD) can be expected in __?",
        a:"A running river",
        b:"Treated Municipal waste water",
        c:"Untreated Municipal waste water",
        d:"A running polluted river",
        correct:"c",
    },
    {
        question:"Worlds first mangrove zoo has been proposed to be opened in which state?",
        a:"West Bengal",
        b:"Andhra Pradesh",
        c:"Gujarat",
        d:"Tamil Nadu",
        correct:"a",
    },
];
const quiz=document.getElementById('quiz')
const answerEls=document.querySelectorAll('.answer')
const questionEl=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitBtn =document.getElementById('submit')

let currentQuiz=0
let score=0

loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData=quizData[currentQuiz]
    questionEl.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked=false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer =answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener("click", ()=>{
    const answer=getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML=`
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})


   
    
       