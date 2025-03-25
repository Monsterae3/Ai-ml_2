document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    const chatBox = document.getElementById("chat-box");
    const chatWrapper = document.getElementById("chatWrapper");

    if (userInput) {
        appendMessage(userInput, "user");
        document.getElementById("user-input").value = '';

        // Expand chat area
        chatWrapper.classList.add("expanded");

        // Simulate bot response
        setTimeout(() => {
            appendMessage("I'm just a bot, but you said: " + userInput, "bot");
        }, 1000);
    }
}

function appendMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");

    messageDiv.classList.add("message", sender === "user" ? "user-message" : "bot-message");
    messageDiv.textContent = message;

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    // Check if chat should shrink or expand
    checkChatSize();
}

function checkChatSize() {
    const chatWrapper = document.getElementById("chatWrapper");
    const chatBox = document.getElementById("chat-box");

    // Check if there are any messages
    if (chatBox.children.length === 0) {
        chatWrapper.classList.remove("expanded");
    }
}
