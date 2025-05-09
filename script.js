/*const { createUser } = require('./createuser');
const { createConversation } = require('./createconversation');
const { sendMessage } = require('./sendmessage');

(async () => {
  try {
    const userKey = await createUser();
    const conversationId = await createConversation(userKey);
    const response = await sendMessage(conversationId, "Hey Botpress!");
    console.log("Bot Response:", response);
  } catch (error) {
    console.error("❌ Error:", error);
  }
})();
*/
