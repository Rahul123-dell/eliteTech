const questions = [
  {
    question: "How many days are there in a week?",
    options: ["5", "6", "7", "4"],
    answer: "7"
  },
  {
    question: "Who is known as the ship of desert?",
    options: ["cat", "rat", "crow", "camel"],
    answer: "camel"
  },
  {
    question: "How many vowels are present in English alphabet?",
    options: ["2", "9", "15", "5"],
    answer: "5"
  },
  {
    question: "What year did India got its Independence?",
    options: ["1996", "1990", "1947", "None of the above"],
    answer: "1947"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const scoreBox = document.getElementById("score-box");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    feedbackEl.textContent = "✅ Correct!";
    feedbackEl.style.color = "lime";
    score++;
  } else {
    feedbackEl.textContent = `❌ Incorrect! Correct answer is "${correct}"`;
    feedbackEl.style.color = "red";
  }
  document.querySelectorAll("#options button").forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) btn.style.backgroundColor = "#2e7d32";
    else btn.style.backgroundColor = "#c62828";
  });

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showFinalScore();
  }
});

function showFinalScore() {
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";
  nextBtn.style.display = "none";
  scoreBox.textContent = `Your final score is ${score} out of ${questions.length}`;
}

loadQuestion();
