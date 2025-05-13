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
    newTask.innerHTML = `<span>${text}</span>
        <i tabindex="0" class="bi bi-pencil-fill btn-edit"></i>
        <i tabindex="0" class="bi bi-trash btn-remove"></i>`;
    container.append(newTask);
    tasks = document.querySelectorAll(".task");//span
    console.log(tasks);
})

/*-----------------Удаление и редактирование задач по значкам(мусорка)----------------- */
container.addEventListener("click", (event)=>{
    const btn = event.target;//элемент, по кторому кликнул пол...
    if(btn.classList.contains("btn-remove")){
        console.log("удаляем");
        //если это кнопка удаление - удаляем, другое - аналогично
        btn.closest(".task").outerHTML="";
    }
    if(btn.classList.contains("btn-edit")){
        console.log("редактируем");
        btn.closest(".task").querySelector("span").setAttribute("contenteditable", "true")
    }
    tasks = document.querySelectorAll(".task");
})


/*======================Создание новой задачи================================= */
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
/*__________________сброс всего_____________ */
btnClearFilters.addEventListener("click", () => {
    searchInput.value = "";
    updateTaskList(originalTasks);
});

// Сортировка по алфавиту (А → Я)
function compareAsc(a, b) {
    const textA = a.querySelector("span").textContent.trim().toLowerCase();
    const textB = b.querySelector("span").textContent.trim().toLowerCase();

    if (textA > textB) return 1;
    if (textA < textB) return -1;
    return 0;
}

btnSortAsc.addEventListener("click", () => {
    const tasks = Array.from(container.querySelectorAll(".task"));
    const sortedTasks = tasks.sort(compareAsc);
    updateTaskList(sortedTasks.map(task => task.outerHTML));
});

// Сортировка против алфавитного порядка (Я → А)
function compareDesc(a, b) {
    const textA = a.querySelector("span").textContent.trim().toLowerCase();
    const textB = b.querySelector("span").textContent.trim().toLowerCase();

    if (textA > textB) return -1;
    if (textA < textB) return 1;
    return 0;
}

btnSortDesc.addEventListener("click", () => {
    const tasks = Array.from(container.querySelectorAll(".task"));
    const sortedTasks = tasks.sort(compareDesc);
    updateTaskList(sortedTasks.map(task => task.outerHTML));
});

// Фильтрация только срочных задач
btnFilterImportant.addEventListener("click", () => {
    const filteredTasks = Array.from(container.querySelectorAll(".task"))
        .filter(task => task.classList.contains("important"))
        .map(task => task.outerHTML);
    updateTaskList(filteredTasks);
});

// Поиск по тексту задачи
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();

    if (!query) {
        updateTaskList(originalTasks);
        return;
    }

    const filteredTasks = Array.from(container.querySelectorAll(".task"))
        .filter(task => task.querySelector("span").textContent.toLowerCase().includes(query))
        .map(task => task.outerHTML);
    updateTaskList(filteredTasks);
});


// function myMax(){
    
//     let max = arguments[0] || 0;
//     for (let i = 1; i < arguments.length; i++){
//         if(arguments[1] > max){
//             max = arguments[1];
//         }
//     }
//     return max;
// }
// console.log(myMax(4,1,2,54,-43))

/*++++++++++++++++++++ПРимер всплытия и погружения++++++++++++++++++++++++ */
// const tags = document.querySelectorAll("*");
// let i =0;
// for (let tag of tags){
//     tag.addEventListener("click", (event)=>{
//         i++;
//         console.log("этап" + i);
//         console.log("целевой элемент");
//         console.log(event.target);
//         console.log("элемент, который поймал событие");
//         console.log(event.currentTarget);
//     });
// }









// // Выбор элементов
// const container = document.querySelector(".container");
// const btnSortAsc = document.getElementById("btn-sort-asc");
// const btnSortDesc = document.getElementById("btn-sort-desc");
// const btnFilterImportant = document.getElementById("btn-filter-important");
// const searchInput = document.getElementById("search-task");
// const btnClearFilters = document.getElementById("btn-clear-filters");

// // Сохранение оригинальных данных
// let originalTasks = [];

// function saveOriginalTasks() {
//     const tasks = Array.from(container.querySelectorAll(".task"));
//     originalTasks = tasks.map(task => task.outerHTML);
// }

// saveOriginalTasks();

// // Обновление списка задач
// function updateTaskList(taskArray) {
//     container.innerHTML = "";
//     taskArray.forEach(taskHTML => {
//         const tempDiv = document.createElement("div");
//         tempDiv.innerHTML = taskHTML;
//         container.appendChild(tempDiv.firstChild);
//     });

//     // Перепривязка событий
//     addEventListenersToButtons();
// }

// // Добавление новой задачи
// document.getElementById("btn-create-task").addEventListener("click", function(event){
//     event.preventDefault();
//     let text = document.getElementById("text-task").value.trim();
//     if (!text) return;

//     const newTask = document.createElement("div");
//     newTask.classList.add("task");
//     newTask.innerHTML = `
//         <span>${text}</span>
//         <i tabindex="0" class="bi bi-pencil-fill btn-edit" aria-label="Редактировать"></i>
//         <i tabindex="0" class="bi bi-trash btn-remove" aria-label="Удалить"></i>`;
//     container.append(newTask);

//     saveOriginalTasks(); // Обновляем список задач
//     document.getElementById("text-task").value = "";
// });

// // Удаление и редактирование задач
// container.addEventListener("click", (event) => {
//     const btn = event.target;

//     if (btn.classList.contains("btn-remove")) {
//         btn.closest(".task").remove();
//         saveOriginalTasks(); // Обновляем оригинал после удаления
//     }

//     if (btn.classList.contains("btn-edit")) {
//         const span = btn.closest(".task").querySelector("span");
//         span.setAttribute("contenteditable", "true");
//         span.focus();

//         // Сохраняем изменения при потере фокуса
//         span.addEventListener("blur", () => {
//             saveOriginalTasks(); // Обновляем оригинал после редактирования
//         }, { once: true });
//     }
// });

// // Сортировка по алфавиту (А → Я)
// function compareAsc(a, b) {
//     const textA = a.querySelector("span").textContent.trim().toLowerCase();
//     const textB = b.querySelector("span").textContent.trim().toLowerCase();

//     if (textA > textB) return 1;
//     if (textA < textB) return -1;
//     return 0;
// }

// btnSortAsc.addEventListener("click", () => {
//     const tasks = Array.from(container.querySelectorAll(".task"));
//     const sortedTasks = tasks.sort(compareAsc);
//     updateTaskList(sortedTasks.map(task => task.outerHTML));
// });

// // Сортировка против алфавитного порядка (Я → А)
// function compareDesc(a, b) {
//     const textA = a.querySelector("span").textContent.trim().toLowerCase();
//     const textB = b.querySelector("span").textContent.trim().toLowerCase();

//     if (textA > textB) return -1;
//     if (textA < textB) return 1;
//     return 0;
// }

// btnSortDesc.addEventListener("click", () => {
//     const tasks = Array.from(container.querySelectorAll(".task"));
//     const sortedTasks = tasks.sort(compareDesc);
//     updateTaskList(sortedTasks.map(task => task.outerHTML));
// });

// // Фильтрация только срочных задач
// btnFilterImportant.addEventListener("click", () => {
//     const filteredTasks = Array.from(container.querySelectorAll(".task"))
//         .filter(task => task.classList.contains("important"))
//         .map(task => task.outerHTML);
//     updateTaskList(filteredTasks);
// });

// // Поиск по тексту задачи
// searchInput.addEventListener("input", () => {
//     const query = searchInput.value.toLowerCase().trim();

//     if (!query) {
//         updateTaskList(originalTasks);
//         return;
//     }

//     const filteredTasks = Array.from(container.querySelectorAll(".task"))
//         .filter(task => task.querySelector("span").textContent.toLowerCase().includes(query))
//         .map(task => task.outerHTML);
//     updateTaskList(filteredTasks);
// });

// // Сброс всех фильтров и сортировок
// btnClearFilters.addEventListener("click", () => {
//     searchInput.value = "";
//     updateTaskList(originalTasks);
// });

// // Перепривязка событий
// function addEventListenersToButtons() {
//     document.querySelectorAll(".btn-remove").forEach(btn => {
//         btn.onclick = function (event) {
//             event.preventDefault();
//             btn.closest(".task").remove();
//             saveOriginalTasks();
//         };
//     });

//     document.querySelectorAll(".btn-edit").forEach(btn => {
//         btn.onclick = function (event) {
//             event.preventDefault();
//             const span = btn.closest(".task").querySelector("span");
//             span.setAttribute("contenteditable", "true");
//             span.focus();

//             span.addEventListener("blur", () => {
//                 saveOriginalTasks();
//             }, { once: true });
//         };
//     });
// }