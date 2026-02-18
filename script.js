const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

const todos = JSON.parse(localStorage.getItem('todos')) || [];

const saveToLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const renderTodos = () => {
    todoList.innerHTML = '';
    todos.forEach((todo) => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        li.innerHTML = `
        <p class="todo-text">${todo.text}</p>
        <div class="actions">
            <button class="btn-check">done</button>
            <button class="btn-delete">delete</button>
        </div>
        `
        todoList.appendChild(li);
    })
}

todoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputValue = todoInput.value.trim();
        const newTodo = {
            id: Date.now(),
            text: inputValue,
            completed: false
        }
        todos.push(newTodo);
        saveToLocalStorage();
        renderTodos();
        todoInput.value = '';
    }
)

renderTodos();