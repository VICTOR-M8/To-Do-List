const fecha = document.querySelector('#fecha')
const lista = document.querySelector('#lista')
const elemento = document.querySelector('#elemento')
const input = document.querySelector('#input')
const botonEnter = document.querySelector('#boton-enter')
const check = 'fa-check-circle'
const uncheck = 'fa-circle'
const lineThrough = 'line-through'
let LIST

let id // para que inicie en 0 cada tarea tendra un id diferente

//creacion de fecha actualizada 

const FECHA = new Date()
fecha.innerHTML = FECHA.toLocaleDateString('es-es', { weekday: 'long', month: 'short', day: 'numeric' })




// Lógica para editar una tarea al hacer clic en "Editar"
// Función para habilitar la edición de las tareas al presionar "Editar"
function habilitarEdicion() {
    const tasks = document.querySelectorAll('#lista li .text');

    tasks.forEach(task => {
        task.setAttribute('contenteditable', 'true');
        task.addEventListener('blur', function () {
            task.removeAttribute('contenteditable');
            alert('El texto ha sido modificado: ' + task.textContent);
        });
    });
}

// Lógica para seleccionar una tarea al hacer clic en su texto
const tasks = document.querySelectorAll('#lista li');

tasks.forEach(task => {
    const textElement = task.querySelector('.text');

    textElement.addEventListener('click', function (e) {
        const selected = document.querySelector('.selected');
        if (selected !== null) {
            selected.classList.remove('selected');
        }
        task.classList.add('selected');
        e.stopPropagation();
    });
});

// Lógica para editar las tareas al hacer clic en "Editar"
document.getElementById('editTask').addEventListener('click', function () {
    habilitarEdicion();
});
//-----------------------

// Lógica para ordenar alfabéticamente las tareas al hacer clic en "Ordenar"
document.getElementById('sortTasks').addEventListener('click', function () {
    const tasks = [...document.querySelectorAll('#lista li .text')];
    const sortedTasks = tasks.map(task => task.textContent).sort();
    const list = document.getElementById('lista');
    sortedTasks.forEach((task, index) => {
        list.children[index].querySelector('.text').textContent = task;
    });
});

// Lógica para reordenar las tareas al hacer clic en "Reordenar"
document.getElementById('reorderTasks').addEventListener('click', function () {
    const tasks = document.querySelectorAll('#lista li');

    tasks.forEach(task => {
        task.draggable = true;

        task.addEventListener('dragstart', function (e) {
            e.dataTransfer.setData('text/plain', null); // Necesario para Firefox
            e.target.classList.add('dragging');
        });

        task.addEventListener('dragend', function () {
            const draggingTask = document.querySelector('.dragging');
            draggingTask.classList.remove('dragging');
        });
    });

    const list = document.getElementById('lista');

    list.addEventListener('dragover', function (e) {
        e.preventDefault();
        const afterElement = getDragAfterElement(list, e.clientY);
        const draggingTask = document.querySelector('.dragging');
        if (afterElement == null) {
            list.appendChild(draggingTask);
        } else {
            list.insertBefore(draggingTask, afterElement);
        }
    });
});

function getDragAfterElement(list, y) {
    const draggableTasks = [...list.querySelectorAll('li:not(.dragging)')];
    return draggableTasks.reduce((closest, task) => {
        const box = task.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: task };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// ... tu código actual ...



// funcion de agregar tarea 

function agregarTarea(tarea, id, realizado, eliminado) {
    if (eliminado) { return } // si existe eliminado es true si no es false 

    const REALIZADO = realizado ? check : uncheck // si realizado es verdadero check si no uncheck

    const LINE = realizado ? lineThrough : ''

    const elemento = `
                        <li id="elemento">
                        <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
                        <p class="text ${LINE}">${tarea}</p>
                        <i class="fas fa-trash de" data="eliminado" id="${id}"></i> 
                        </li>
                    `
    lista.insertAdjacentHTML("beforeend", elemento)
    var taskCount = document.querySelectorAll('#taskList li').length;
    if (taskCount > 3) {
        var extraTasks = document.querySelectorAll('#taskList li:nth-child(n+4)');
        var extraTasksList = document.getElementById('extraTasks');
        extraTasks.forEach(function (task) {
            extraTasksList.appendChild(task);
        });
        document.getElementById('showMoreTasks').classList.remove('hidden');
    }


}


// funcion de Tarea Realizada 

function tareaRealizada(element) {
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector('.text').classList.toggle(lineThrough)
    LIST[element.id].realizado = LIST[element.id].realizado ? false : true //Si
    // console.log(LIST)
    // console.log(LIST[element.id])
    // console.log(LIST[element.id].realizado)
}

function tareaEliminada(element) {
    // console.log(element.parentNode)
    // console.log(element.parentNode.parentNode)
    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST[element.id].eliminado = true
    console.log(LIST)
}





// crear un evento para escuchar el enter y para habilitar el boton 

botonEnter.addEventListener('click', () => {
    const tarea = input.value
    if (tarea) {
        agregarTarea(tarea, id, false, false)
        LIST.push({
            nombre: tarea,
            id: id,
            realizado: false,
            eliminado: false
        })
        localStorage.setItem('TODO', JSON.stringify(LIST))
        id++
        input.value = ''
    }

})

document.addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
        const tarea = input.value
        if (tarea) {
            agregarTarea(tarea, id, false, false)
            LIST.push({
                nombre: tarea,
                id: id,
                realizado: false,
                eliminado: false
            })
            localStorage.setItem('TODO', JSON.stringify(LIST))

            input.value = ''
            id++
            console.log(LIST)
        }
    }

})


lista.addEventListener('click', function (event) {
    const element = event.target
    const elementData = element.attributes.data.value
    console.log(elementData)

    if (elementData == 'realizado') {
        tareaRealizada(element)
    }
    else if (elementData == 'eliminado') {
        tareaEliminada(element)
        console.log("elimnado")
    }
    localStorage.setItem('TODO', JSON.stringify(LIST))
})




let data = localStorage.getItem('TODO')
if (data) {
    LIST = JSON.parse(data)
    console.log(LIST)
    id = LIST.length
    cargarLista(LIST)
} else {
    LIST = []
    id = 0
}


function cargarLista(array) {
    array.forEach(function (item) {
        agregarTarea(item.nombre, item.id, item.realizado, item.eliminado)
    })
}