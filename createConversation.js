const fetch = require('node-fetch').default;

const webhookId = "56afd41c-49f4-41dd-a02f-92e7725b07af"; // Replace with your actual webhook ID
const userKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJfMDFKUTU2RTBDWTlLVEtOOTNOQ1cwTjNKVjEiLCJpYXQiOjE3NDI4NTc1MDN9.r2Dncc6ZSTpRC1ET-GGvgpmqkzs-UtzCVSkHmJMIems"; // Replace with your actual user key
const apiUrl = `https://chat.botpress.cloud/${webhookId}`;

async function createConversation() {
    try {
        const response = await fetch(`${apiUrl}/conversations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-user-key": userKey // Use your User Key for authentication
            },
            body: JSON.stringify({
                userId: userKey // You can specify your user ID or bot ID as required
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error(`Failed to create conversation: HTTP Error ${response.status}`);
            console.error("Response Body:", data);
            throw new Error(`Bad Request: ${data.message || "Unknown error"}`);
        }

        console.log("Conversation created:", data);
        return data.conversationId; // Return the conversation ID
    } catch (error) {
        console.error("Failed to create conversation:", error);
    }
}

createConversation().then(conversationId => {
    console.log("Conversation ID:", conversationId); // Log the conversation ID
});