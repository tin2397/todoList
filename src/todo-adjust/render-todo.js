const todoList = document.getElementById('todo-list');

export const renderTodos = () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todoList.innerHTML = ''; // Clear existing todos
    
    // Sort by priority first, then by date (newest first)
    todos.sort((a, b) => {
        // First sort by priority (high priority first)
        if (a.priority !== b.priority) {
            return b.priority ? 1 : -1;
        }
        // Then sort by date (newest first)
        return new Date(a.dueDate) - new Date(b.dueDate);
    }).forEach(todo => {
        const todoElement = document.createElement('div');
        todoElement.className = 'todo-item';
        todoElement.innerHTML = `
            <h3>${todo.title}</h3>
            <p>${todo.description}</p>
            <p>Due: ${todo.dueDate}</p>
            ${todo.priority ? '<span class="priority">High Priority</span>' : ''}
        `;
        todoList.appendChild(todoElement);
    });
}