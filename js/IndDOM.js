// === ЗАДАНИЕ 1 ===
const p1 = document.querySelector('.test-text');
p1.textContent = 'Привет, мир! Меня зовут Даниил';

p1.style.padding = '10px';
p1.style.border = '2px solid blue';
p1.style.backgroundColor = 'lightblue';
p1.style.color = 'blue';
p1.style.marginBottom = '20px';


// === ЗАДАНИЕ 2 ===

document.getElementById('email').value = 'mail@mail.ru';
document.getElementById('email').disabled = true;

document.getElementById('remember').checked = true;

document.getElementById('btn').textContent = 'Войти';

// === ЗАДАНИЕ 3 ===
const link = document.createElement('a');
link.href = 'https://portal.midis.info/stream/';
link.textContent = 'ссылка на сайт';
link.target = '_blank';
link.style.textDecoration = 'none';
link.style.color = 'blue';
link.style.transition = 'color 0.3s ease';
link.style.display = 'inline-block';
link.style.marginTop = '20px';

link.addEventListener('mouseover', () => {
  link.style.color = 'red';
});

link.addEventListener('mouseout', () => {
  link.style.color = 'blue';
});

document.getElementById('link-container').appendChild(link);

// === ЗАДАНИЕ 4 ===
const ball = document.getElementById('ball');
const startBtn = document.getElementById('startBtn');

startBtn.style.marginBottom = '40px';

let animationFrame;
let currentY = 350;

function moveBallUp() {
  if (currentY > 20) {
    currentY -= 5;
    ball.setAttribute('cy', currentY);
    animationFrame = requestAnimationFrame(moveBallUp);
  } else {
    cancelAnimationFrame(animationFrame);
  }
}

startBtn.addEventListener('click', () => {
  currentY = 350; // сброс позиции
  moveBallUp();
});