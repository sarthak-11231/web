const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Predefined question-answer pairs
const predefinedQA = {
  "How are you?": "I'm good, thank you!",
  "What is your name?": "My name is ChatBot.",
  "What can you do?": "I can answer predefined questions.",
  "Goodbye": "Goodbye! Have a nice day!",
  "How was your day?": "It was a great day!"
};

function sendMessage() {
  const userMessage = userInput.value.trim();
  
  // Display user message in the chat box
  displayMessage(userMessage);
  
  // If the user's message matches a predefined question, get the answer
  const answer = predefinedQA[userMessage];
  if (answer) {
    displayMessage(answer);
  } else {
    displayMessage("I'm sorry, I don't understand.");
  }
  
  // Clear user input
  userInput.value = '';
}

function displayMessage(message) {
  const messageDiv = document.createElement('div');
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  
  // Scroll to bottom
  chatBox.scrollTop = chatBox.scrollHeight;
}
