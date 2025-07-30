const questions = [
  {
    question: "What type of game is Roblox Forsaken?",
    options: ["Tycoon", "Horror Survival", "Obby", "Racing"],
    answer: 1
  },
  {
    question: "In Forsaken, what do you use to protect yourself from monsters?",
    options: ["Flashlight", "Sword", "Gun", "Crossbow"],
    answer: 0
  },
  {
    question: "What happens if your sanity gets too low in Forsaken?",
    options: ["You teleport", "You gain power", "You hallucinate and can be attacked", "You heal"],
    answer: 2
  },
  {
    question: "How do you escape the map in Forsaken?",
    options: ["Find a key and open the exit", "Wait for the timer", "Defeat the boss", "Touch the orb"],
    answer: 0
  },
  {
    question: "Which of these is NOT a feature in Forsaken?",
    options: ["Multiplayer co-op", "Jump scares", "Tycoon-style upgrades", "Flashlight battery management"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const quiz = document.getElementById("quiz");
  const q = questions[currentQuestion];

  quiz.innerHTML = `
    <div class="question">
      <h2>Q${currentQuestion + 1}: ${q.question}</h2>
      ${q.options.map((opt, i) => `<button onclick="checkAnswer(${i})">${opt}</button>`).join("<br>")}
    </div>
  `;
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz").innerHTML = "";
    document.getElementById("result").innerText = `You scored ${score} out of ${questions.length}!`;
  }
}

showQuestion();
