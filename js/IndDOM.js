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
document.getElementById('email').disabled = true;// Блокируем поле email

document.getElementById('remember').checked = true;// Ставим галочку

document.getElementById('btn').textContent = 'Войти';

// === ЗАДАНИЕ 3: Ссылка с эффектами ===
var link = document.createElement('a');
link.href = 'https://portal.midis.info/stream/';
link.textContent = 'ссылка на сайт';
link.target = '_blank';// Открываем ссылку в новом окне
link.style.textDecoration = 'none';
link.style.color = 'blue';
link.style.transition = 'color 0.3s ease'; //плавный переход цвета при наведении
link.style.display = 'inline-block';
link.style.marginTop = '20px';

link.addEventListener('mouseover', function() {
link.style.color = 'red';
});

link.addEventListener('mouseout', function() {
link.style.color = 'blue';
});

document.getElementById('link-container').appendChild(link);


// === ЗАДАНИЕ 4: Анимация мяча ===
var ball = document.getElementById('ball');
var startBtn = document.getElementById('startBtn');
startBtn.style.marginBottom = '40px';

var animationFrame;
var currentY = 350;

function moveBallUp() {
if (currentY > 20) {
    currentY -= 5;
    ball.setAttribute('cy', currentY);
    animationFrame = requestAnimationFrame(moveBallUp);
} else {
    cancelAnimationFrame(animationFrame);
}
}

startBtn.addEventListener('click', function() {
if (animationFrame) {
    cancelAnimationFrame(animationFrame);
}
currentY = 350;
moveBallUp();
});