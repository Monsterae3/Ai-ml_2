document.getElementById("send-btn").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;
    
    if (userInput.trim()) {
        appendMessage(userInput, 'user');
        document.getElementById("user-input").value = '';
        
        // Simulate a bot response
        setTimeout(() => {
            appendMessage("I'm just a bot, but you said: " + userInput, 'bot');
        }, 1000);
    }
});

document.getElementById("user-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("send-btn").click();
    }
});

function appendMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    
    messageDiv.classList.add("message");
    messageDiv.classList.add(sender === 'user' ? "user-message" : "bot-message");
    messageDiv.textContent = message;
    
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}