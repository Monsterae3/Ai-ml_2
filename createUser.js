const fetch = require('node-fetch').default;

const webhookId = "56afd41c-49f4-41dd-a02f-92e7725b07af"; // Replace with your actual webhook ID
const apiUrl = `https://chat.botpress.cloud/${webhookId}`;

async function createUser() {
    try {
        const response = await fetch(`${apiUrl}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({}) // Ensure empty body is passed
        });

        const data = await response.json();

        if (!response.ok) {
            // Log the response body for debugging
            console.error(`Failed to create user: HTTP Error ${response.status}`);
            console.error("Response Body:", data);
            throw new Error(`Bad Request: ${data.message || "Unknown error"}`);
        }

        console.log("User created:", data);
        return data.userKey;
    } catch (error) {
        console.error("Failed to create user:", error);
    }
}

createUser().then(userKey => {
    console.log("Your User Key:", userKey);
});