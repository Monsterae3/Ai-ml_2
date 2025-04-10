const fetch = require('node-fetch').default;

const webhookId = "56afd41c-49f4-41dd-a02f-92e7725b07af";  // Replace with your actual webhook ID
const userKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJfMDFKUTU2RTBDWTlLVEtOOTNOQ1cwTjNKVjEiLCJpYXQiOjE3NDI4NTc1MDN9.r2Dncc6ZSTpRC1ET-GGvgpmqkzs-UtzCVSkHmJMIems"; // Replace with your actual user key
const apiUrl = `https://chat.botpress.cloud/${webhookId}`;

async function sendMessage(conversationId, messageText) {
    try {
        const response = await fetch(`${apiUrl}/conversations/${conversationId}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-user-key": userKey // Use your User Key for authentication
            },
            body: JSON.stringify({
                type: "text", // Type of message (text, image, etc.)
                text: messageText // The actual message you want to send
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error(`Failed to send message: HTTP Error ${response.status}`);
            console.error("Response Body:", data);
            throw new Error(`Bad Request: ${data.message || "Unknown error"}`);
        }

        console.log("Message sent:", data);
    } catch (error) {
        console.error("Failed to send message:", error);
    }
}

// Example: Send a message to your bot
sendMessage("conv_01JQ56SRC9FKP9C1DRFGY3ER1C", "Hello, Bot! How are you?");
