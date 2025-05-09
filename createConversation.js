const fetch = require('node-fetch').default;

const webhookId = "56afd41c-49f4-41dd-a02f-92e7725b07af";
const apiUrl = `https://chat.botpress.cloud/${webhookId}`;
const userKey = "YOUR_USER_KEY_HERE"; // Replace manually or import from createuser.js

async function createConversation() {
  const response = await fetch(`${apiUrl}/conversations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-user-key": userKey
    }
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  console.log("🗣️ Conversation created:", data.id);
  return data.id;
}

module.exports = { createConversation };
