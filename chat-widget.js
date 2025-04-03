(function () {
    if (!window.ChatWidgetConfig) {
        console.error("ChatWidgetConfig is missing.");
        return;
    }

    const chatButton = document.createElement("div");
    chatButton.id = "chat-widget";
    chatButton.style.position = "fixed";
    chatButton.style.bottom = "20px";
    chatButton.style.right = "20px";
    chatButton.style.width = "60px";
    chatButton.style.height = "60px";
    chatButton.style.backgroundColor = window.ChatWidgetConfig.style.primaryColor || "#854fff";
    chatButton.style.borderRadius = "50%";
    chatButton.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.2)";
    chatButton.style.display = "flex";
    chatButton.style.alignItems = "center";
    chatButton.style.justifyContent = "center";
    chatButton.style.cursor = "pointer";
    chatButton.style.zIndex = "9999";
    chatButton.innerHTML = "💬";

    document.body.appendChild(chatButton);

    const chatBox = document.createElement("iframe");
    chatBox.src = window.ChatWidgetConfig.webhook.url;
    chatBox.style.position = "fixed";
    chatBox.style.bottom = "90px";
    chatBox.style.right = "20px";
    chatBox.style.width = "350px";
    chatBox.style.height = "500px";
    chatBox.style.border = "none";
    chatBox.style.borderRadius = "10px";
    chatBox.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.2)";
    chatBox.style.display = "none";
    chatBox.style.zIndex = "9999";
    document.body.appendChild(chatBox);

    chatButton.addEventListener("click", function () {
        chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
    });
})();
