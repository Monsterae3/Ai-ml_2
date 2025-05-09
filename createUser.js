const fetch = require('node-fetch').default;

const webhookId = "56afd41c-49f4-41dd-a02f-92e7725b07af";
const apiUrl = `https://chat.botpress.cloud/${webhookId}`;

async function createUser() {
  const response = await fetch(`${apiUrl}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  console.log("✅ User created:", data);
  return data.key;
}

module.exports = { createUser };
