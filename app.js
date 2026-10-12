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
    const replies = [
        "Hey bru! 💜 I'm Six AI. I'm still in prototype mode, but we're building something special. What are you working on?",
        "I'm with you! 🚀 Tell me a little more about what you need, and we'll work through it step by step.",
        "Let's figure it out together. I'll keep things clear, practical, and detailed enough to help."
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
