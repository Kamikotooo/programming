/*1. Вывод элементов на страницу */
/*1.1 Выбо по id */
const h1 = document.getElementById("title");
console.log(h1);
/*1.2 Выбор одного элемента по селектору */
const menu = document.querySelector(".menu");
console.log(menu);
/*1.3 Выбор нескольких элементов по селектору */
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

/*2. Прочитать или изменить содержимое тега*/
console.log(h1.textContent); //использовать текст контент и иннер HTML
console.log(h1.innerHTML);
console.log(h1.innerText);
console.log(h1.outerHTML);
console.log(h1.outerText);

h1.textContent = 'Новый заголовок <i class="bi bi-virus2"></i>'; //показывается текст в заголовке
h1.innerHTML = 'Новый заголовок <i class="bi bi-virus2"></i>'; // показывается картинка в заголовке
/*h1.innerHTML = ""; //очистить контент */

/*3. Работа со стилями (атрибут style)*/
h1.style.color="red";
h1.style.fontSize = "48px"; //камел стайл написания кода
console.log(h1.style)

/*4 Работа с классами( атрибут class) */
menu.classList.add("border");// добавили класс
const h2 = document.querySelector(".blue");
h2.classList.remove("blue");//удалили класс blue

console.log(menu.classList.contains("border"));//проверить, есть ли такой класс у  элемента

/*5 работа с атрибутами(любыми атрибутами) */
const firstLink = document.querySelector(".menu li:first-child a");
console.log(firstLink.getAttribute("href"));//узнать значение атрибута
firstLink.setAttribute("href" , "https://portal.midis.info/elective/courses.php");//установить/заменить атрибут
firstLink.setAttribute("target", "_blank");
firstLink.removeAttribute("target");

/*6 создание нового тега */
const image = document.createElement("img");//создаю элемент
image.setAttribute("src", "img/cat.jpg");//добавляю атрибут
image.classList.add("border");//добавляю класс
const block = document.getElementById("block");// беру элемент в котором будет добавлен новый элемент
block.classList.add("border");//добавить новый
block.append(image);//after/ prepend/ before 4 свойства

/*7 работа с предками*/
console.log(firstLink.closest("li"));


/*8 работа с потомками*/
console.log(document.querySelectorAll("a"));//поиск элементов
console.log(menu.querySelectorAll("a"));

/*9 События */
const btn = document.getElementById("btn");
const circle = document.querySelector(".circle");
btn.addEventListener("click", function(){
    circle.style.background = "red";
});
