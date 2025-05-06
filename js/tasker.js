const btnCreateTask = document.getElementById("btn-create-task");
const textTask = document.getElementById("text-task");
const container = document.querySelector(".container");

let tasks = document.querySelectorAll(".task");
console.log(tasks);

/*добавление новой задачи */
btnCreateTask.addEventListener("click",function(event){
    event.preventDefault();//отменяем действие браузера по умолчанию - перезагрузка страницы
    let text = textTask.value;

    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `<span>${text}</span>`;
    container.append(newTask);
    tasks = document.querySelectorAll(".task");//span
    console.log(tasks);
})

/*======================================================= */
const btn = document.getElementById("btn");
btn.addEventListener("click", function(){
     let tasks = document.querySelectorAll(".task");
     tasks = [...tasks];
     
     for(let task of tasks){
    //     if (task.classList.contains("importent")){
    //         task.classList.remove("importent")
    //     }
    //     else{
    //         task.classList.add("importent")
    //     }
        task.classList.toggle("importent");
     }
    
})

// let tasks = /*выбрать все задачи */
// set container = /*выбрать контейнер с задачами */
// const btn1 = /*выбрать кнопку сортировки по алфавиту */
// function compare(a, b) { //функция сравнения для сортировки
// if (a.innerHTML > b.innerHTML) return 1; // если первое значение больше второго
// if (a.innerHTML == b.innerHTML) return 0; // если равны
// if (a.innerHTML < b.innerHTML) return -1; // если первое значение меньше второго
// btn1.addEventListener("click", function() {
// let new Tasks = […tasks].sort(compare); //преобразуем коллекцию в массив
// /*/*очистите container */
// for (lady in new Tasks) { //перебор всех элементов в массиве
// container.append(new Tasks[i]) //добавление новых элементов в контейнер
// }
// })

// btn3.addEventListener("click", function() {
//     let new Tasks = […tasks];
//     new Tasks = /*фильтрация массива newTask по наличию у элемента класса immediate */
//     /*очистить контейнер */
//     /* вывести новые задачи */
//     })

//     btn4.addEventListener("click", function() {
//         left value = /* определить что пользователь ввел в input */
//         /* преобразовать коллекцию задач в массив*/
//         new Tasks = new Tasks.filter(function(item){
//         return item.innerHTML.indexof(value) != -1;
//         });
//         /*очистить контейнер */
//         /* вывести новые задачи */
// })