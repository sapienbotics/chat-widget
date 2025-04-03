document.addEventListener("DOMContentLoaded", function () {
    // Create chat widget container
    const chatWidget = document.createElement("div");
    chatWidget.id = "chat-widget";
    chatWidget.innerHTML = `
        <div id="chat-header">Chatbot</div>
        <div id="chat-body"></div>
        <div id="chat-input-container">
            <input type="text" id="chat-input" placeholder="Type a message..."/>
            <button id="chat-send">Send</button>
        </div>
    `;
    document.body.appendChild(chatWidget);

    // Add functionality for sending messages
    const chatBody = document.getElementById("chat-body");
    const chatInput = document.getElementById("chat-input");
    const chatSend = document.getElementById("chat-send");

    chatSend.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") sendMessage();
    });

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message !== "") {
            appendMessage("user", message);
            chatInput.value = "";
            chatBody.scrollTop = chatBody.scrollHeight;

            // 🔹 Later, replace this with webhook call
            setTimeout(() => {
                appendMessage("bot", "I'm still learning! How can I help?");
            }, 500);
        }
    }

    function appendMessage(role, text) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("chat-message", role);
        messageElement.innerText = text;
        chatBody.appendChild(messageElement);
        chatBody.scrollTop = chatBody.scrollHeight;
    }
});

// 🔹 Add Styles Dynamically
const style = document.createElement("style");
style.innerHTML = `
    #chat-widget {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 300px;
        background: white;
        border-radius: 10px;
        box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        font-family: Arial, sans-serif;
    }
    #chat-header {
        background: #854fff;
        color: white;
        padding: 10px;
        text-align: center;
        font-weight: bold;
    }
    #chat-body {
        height: 250px;
        overflow-y: auto;
        padding: 10px;
    }
    #chat-input-container {
        display: flex;
        border-top: 1px solid #ddd;
        padding: 10px;
    }
    #chat-input {
        flex: 1;
        padding: 5px;
        border: none;
        outline: none;
    }
    #chat-send {
        background: #854fff;
        color: white;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
    }
    .chat-message {
        padding: 8px;
        margin: 5px 0;
        border-radius: 5px;
        max-width: 80%;
        word-wrap: break-word;
    }
    .user {
        background: #854fff;
        color: white;
        align-self: flex-end;
    }
    .bot {
        background: #f1f1f1;
        color: black;
        align-self: flex-start;
    }
`;
document.head.appendChild(style);
