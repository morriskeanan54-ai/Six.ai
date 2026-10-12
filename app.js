const messages = document.getElementById('messages');
const form = document.getElementById('chatForm');
const input = document.getElementById('messageInput');
const sidebar = document.getElementById('sidebar');

function addMessage(text, role) {
  const node = document.createElement('div');
  node.className = `message ${role}`;
  node.textContent = text;
  messages.appendChild(node);
  node.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
function sendMessage(text) {
  const clean = text.trim();
  if (!clean) return;
  addMessage(clean, 'user');
  input.value = '';
  input.style.height = 'auto';
  

window.setTimeout(() => {
    const message = clean.toLowerCase();
    let reply;

    if (/\b(hi|hey|hello|howzit|sup)\b/.test(message)) {
        reply = "Yoh! 😎 What's good? Tell me what's happening.";
    } else if (message.includes("how are you")) {
        reply = "I'm running smooth, bru! 💜 How's your day going?";
    } else if (message.includes("your name") || message.includes("who are you")) {
        reply = "I'm Six AI, your digital sidekick. What can we tackle today?";
    } else if (message.includes("rap") || message.includes("lyrics") || message.includes("song")) {
        reply = "🔥 Let's cook up some bars! What's the vibe: drill, trap, emotional, or straight street energy?";
    } else if (message.includes("help")) {
        reply = "I've got you. Tell me what you're trying to do, and we'll break it down step by step.";
    } else if (message.includes("thank")) {
        reply = "Anytime, bru! 💜 What else can we work on?";
    } else {
        reply = "I'm listening, bru. Tell me a little more so I can help you properly.";
    }

    addMessage(reply, 'assistant');
}, 350);

window.setTimeout(() => {
    const message = clean.toLowerCase();
    let reply;

    if (/\b(hi|hey|hello|howzit|sup)\b/.test(message)) {
        reply = "Yoh! 😎 What's good? Tell me what's happening.";
    } else if (message.includes("how are you")) {
        reply = "I'm running smooth, bru! 💜 How's your day going?";
    } else if (message.includes("your name") || message.includes("who are you")) {
        reply = "I'm Six AI, your digital sidekick. What can we tackle today?";
    } else if (message.includes("rap") || message.includes("lyrics") || message.includes("song")) {
        reply = "🔥 Let's cook up some bars! What's the vibe: drill, trap, emotional, or straight street energy?";
    } else if (message.includes("help")) {
        reply = "I've got you. Tell me what you're trying to do, and we'll break it down step by step.";
    } else if (message.includes("thank")) {
        reply = "Anytime, bru! 💜 What else can we work on?";
    } else {
        reply = "I'm listening, bru. Tell me a little more so I can help you properly.";
    }

    addMessage(reply, 'assistant');
}, 350);

window.setTimeout(() => {
    const message = clean.toLowerCase();
    let reply;

    if (/\b(hi|hey|hello|howzit|sup)\b/.test(message)) {
        reply = "Yoh! 😎 What's good? Tell me what's happening.";
    } else if (message.includes("how are you")) {
        reply = "I'm running smooth, bru! 💜 How's your day going?";
    } else if (message.includes("your name") || message.includes("who are you")) {
        reply = "I'm Six AI, your digital sidekick. What can we tackle today?";
    } else if (message.includes("rap") || message.includes("lyrics") || message.includes("song")) {
        reply = "🔥 Let's cook up some bars! What's the vibe: drill, trap, emotional, or straight street energy?";
    } else if (message.includes("help")) {
        reply = "I've got you. Tell me what you're trying to do, and we'll break it down step by step.";
    } else if (message.includes("thank")) {
        reply = "Anytime, bru! 💜 What else can we work on?";
    } else {
        reply = "I'm listening, bru. Tell me a little more so I can help you properly.";
    }

    addMessage(reply, 'assistant');
}, 350);

    ];

    const reply = replies[Math.floor(Math.random() * replies.length)];
    addMessage(reply, 'assistant');
}, 350);

  
}
form.addEventListener('submit', event => {
  event.preventDefault();
  sendMessage(input.value);
});
input.addEventListener('input', () => {
  input.style.height = 'auto';
  input.style.height = Math.min(input.scrollHeight, 130) + 'px';
});
document.querySelectorAll('.suggestion').forEach(button => {
  button.addEventListener('click', () => sendMessage(button.dataset.prompt));
});
document.getElementById('newChat').addEventListener('click', () => {
  messages.replaceChildren();
  showView('chat');
  sidebar.classList.remove('open');
});
document.getElementById('menuButton').addEventListener('click', () => sidebar.classList.toggle('open'));

function showView(name) {
  document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
  document.getElementById(name + 'View').classList.add('active');
  document.querySelectorAll('.nav-item').forEach(button => button.classList.toggle('active', button.dataset.view === name));
  sidebar.classList.remove('open');
}
document.querySelectorAll('.nav-item').forEach(button => button.addEventListener('click', () => showView(button.dataset.view)));
