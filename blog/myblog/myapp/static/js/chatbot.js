let questions = [
  {
    question: "Do you feel happy?",
    options: {
      a: "Yes",
      b: "No",
    },
    correctAnswer: "a",
    correctResponse: "Super!",
    incorrectResponse: "I am sorry",
  },
  {
    question: "Do you like coding?",
    options: {
      a: "Absolutely!",
      b: "Not really",
    },
    correctAnswer: "a",
    correctResponse: "Great to hear!",
    incorrectResponse: "That's okay, it's not for everyone.",
  },
  {
    question: "Do you like the posts on the blog?",
    options: {
      a: "Yes",
      b: "No",
    },
    correctAnswer: "a",
    correctResponse: "Yey! I am glad to hear that:)",
    incorrectResponse: "Oh, I am sorry :(",
  },
  {
    question: "Do you like raccoons?",
    options: {
      a: "Of course",
      b: "Not really",
    },
    correctAnswer: "a",
    correctResponse: "Well duh of course you do",
    incorrectResponse: "...think again, they are cute and funny.",
  },
  {
    question: "Do you like music?",
    options: {
      a: "Yes",
      b: "No",
    },
    correctAnswer: "a",
    correctResponse: "Super! Check the 3rd post to learn some cool stuff about it.",
    incorrectResponse: "Oh, that is interesting... maybe you did not find something for your taste yet.",
  },
  {
    question: "Do you have a favorite color?",
    options: {
      a: "Yes",
      b: "No",
    },
    correctAnswer: "a",
    correctResponse: "Cool! Check the 4th post to see what your favorite color means.",
    incorrectResponse: "Well there are a lot of nice color so yeah sometimes it is hard to just chose one.",
  },
];

let currentQuestionIndex = 0;
let chatContainer = document.getElementById("chat-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");

displayQuestion();

function displayQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let optionsHTML = Object.keys(currentQuestion.options)
    .map((key) => `<br>${key}. ${currentQuestion.options[key]}`)
    .join("");

  let botResponse = document.createElement("div");
  botResponse.classList.add("message");
  botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.question}${optionsHTML}`;
  chatContainer.appendChild(botResponse);
  scrollChatContainerToBottom();
}

function scrollChatContainerToBottom() {
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

chatForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let userResponse = userInput.value.trim().toLowerCase();

  if (!userResponse) return;

  let userMessage = document.createElement("div");
  userMessage.classList.add("message");
  userMessage.innerHTML = `<strong>You:</strong> ${userResponse}`;
  chatContainer.appendChild(userMessage);

  let currentQuestion = questions[currentQuestionIndex];
  let botResponse = document.createElement("div");
  botResponse.classList.add("message");

  if (userResponse === currentQuestion.correctAnswer) {
    botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.correctResponse}`;
  } else {
    botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.incorrectResponse}`;
  }

  chatContainer.appendChild(botResponse);

  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  userInput.value = "";
  displayQuestion();
});
