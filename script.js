const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');

const todos = []

const saveToLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const renderTodos = () => {

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
