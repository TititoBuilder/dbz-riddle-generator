const riddles = [
    {
        question: "I am the prince of all Saiyans, my pride is my power. Who am I?",
        answer: "Vegeta"
    },
    {
        question: "I can increase my power level by transforming. My hair turns golden. What technique am I using?",
        answer: "Super Saiyan"
    },
    {
        question: "I am a powerful artifact that can grant wishes. There are seven of me. What am I?",
        answer: "Dragon Ball"
    },
    {
        question: "I am the eternal dragon, summoned to grant wishes. What is my name?",
        answer: "Shenron"
    },
    {
        question: "I am Goku's first son, named after Goku's adoptive grandfather. Who am I?",
        answer: "Gohan"
    }
];

function generateRiddle() {
    const randomIndex = Math.floor(Math.random() * riddles.length);
    const riddle = riddles[randomIndex];
    document.getElementById("riddle").textContent = riddle.question;
    document.getElementById("answer").style.display = "none";
    
    setTimeout(() => {
        document.getElementById("answer").textContent = `Answer: ${riddle.answer}`;
        document.getElementById("answer").style.display = "block";
    }, 5000);
}