const userMessage = "Hello";
const userId = "user123"; // Replace with unique user ID (e.g., from cookies or localStorage)
const sessionId = "session123"; // Same idea — a unique session

// Send user's message
fetch("https://messaging.botpress.cloud/v1/messages", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    botId: "be20d1c7-fa5b-4fe4-9eeb-649a325f6b96", // Just the UUID
    clientId: "your-client-id-here", // Get from Botpress Cloud dashboard
    payload: {
      type: "text",
      text: userMessage,
    },
    user: {
      id: userId,
    },
    sessionId: sessionId,
  }),
});
