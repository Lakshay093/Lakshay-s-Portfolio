// themeToggle.js
const toggleBtn = document.createElement('button');
toggleBtn.innerText = 'Toggle Theme';
toggleBtn.style.position = 'fixed';
toggleBtn.style.bottom = '20px';
toggleBtn.style.right = '20px';
toggleBtn.style.padding = '0.5rem 1rem';
toggleBtn.style.background = '#22d3ee';
toggleBtn.style.color = '#111';
toggleBtn.style.border = 'none';
toggleBtn.style.borderRadius = '0.5rem';
toggleBtn.style.cursor = 'pointer';
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});