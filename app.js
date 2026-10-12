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
    addMessage("I'm the first Six AI prototype. My chat screen is working, but I'm not connected to an AI model yet. The next build will add a secure AI connection, conversation history, and web search.", 'assistant');
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
