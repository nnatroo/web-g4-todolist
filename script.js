const todoForm = document.getElementById("todo-form");
const button = document.querySelector('.add-btn');
const input = document.querySelector('input');
let list = document.querySelector('ul');

const todos = []

const saveToLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const renderTodos = () => {
    list.innerHTML = '';

    todos.forEach(todo => {
        const li = document.createElement('li');

        li.textContent = todo.text;

        li.addEventListener('click', () => {
            todo.completed = !todo.completed;
            saveToLocalStorage();
            renderTodos();
        });

        list.appendChild(li);
    });
};

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputValue = input.value.trim();

    const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false
    }

    todos.push(newTodo);

    saveToLocalStorage();
    renderTodos();
    input.value = '';
})