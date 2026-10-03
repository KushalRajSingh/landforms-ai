const API_URL = "https://cowboy-participants-introducing-cam.trycloudflare.com/chat";

const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const messages = document.getElementById("chat-messages");
const clearButton = document.getElementById("clear-chat");

function addMessage(text, type) {

    const message = document.createElement("div");

    if (type === "user") {

        message.className = "message user-message";

        message.innerHTML = `
            <div class="message-content"></div>
        `;

        message.querySelector(".message-content").textContent = text;

    } else {

        message.className = "message bot-message";

        message.innerHTML = `
            <div class="message-icon">🤖</div>
            <div class="message-content"></div>
        `;

        message.querySelector(".message-content").textContent = text;
    }

    messages.appendChild(message);

    messages.scrollTop = messages.scrollHeight;

    return message;
}

async function askQuestion(question) {

    addMessage(question, "user");

    const loadingMessage = addMessage(
        "Thinking...",
        "bot"
    );

    try {

        const response = await fetch(API_URL, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                question: question
            })
        });

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        const data = await response.json();

        if (data.answer) {

            loadingMessage.querySelector(
                ".message-content"
            ).textContent = data.answer;

        } else {

            loadingMessage.querySelector(
                ".message-content"
            ).textContent = "No answer received.";

        }

    } catch (error) {

        console.error(error);

        loadingMessage.querySelector(
            ".message-content"
        ).textContent =
            "Unable to connect to the chatbot. Please make sure Google Colab and Cloudflare Tunnel are running.";

    }

    messages.scrollTop = messages.scrollHeight;
}

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const question = input.value.trim();

    if (!question) {
        return;
    }

    input.value = "";

    input.style.height = "auto";

    askQuestion(question);
});

clearButton.addEventListener("click", function() {

    messages.innerHTML = "";

    addMessage(
        "Hello! 👋 Ask me anything about the Landforms chapter.",
        "bot"
    );

});

document.querySelectorAll(".suggestion-btn").forEach(function(button) {

    button.addEventListener("click", function() {

        const question = button.textContent.trim();

        askQuestion(question);

    });

});

input.addEventListener("keydown", function(event) {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        form.dispatchEvent(new Event("submit"));

    }

});

input.addEventListener("input", function() {

    input.style.height = "auto";

    input.style.height = input.scrollHeight + "px";

});

console.log("Landforms AI connected to frontend.");
