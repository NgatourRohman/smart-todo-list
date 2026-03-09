const STORAGE_KEY = 'SMART_TODO_APPS';
const EVENT_TODOS_UPDATED = 'todos-updated';
const NOTIFICATION_DURATION = 3000;
const ANIMATION_DURATION = 300;

const ICONS = {
    'SUCCESS':
        `<svg width="17" height="17" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.01667 8.51667L9.12917 4.40417L8.3125 3.5875L5.01667 6.88333L3.35417 5.22083L2.5375 6.0375L5.01667 8.51667V8.51667M5.83333 11.6667C5.02639 11.6667 4.26806 11.5135 3.55833 11.2073C2.84861 10.901 2.23125 10.4854 1.70625 9.96042C1.18125 9.43542 0.765625 8.81806 0.459375 8.10833C0.153125 7.39861 0 6.64028 0 5.83333C0 5.02639 0.153125 4.26806 0.459375 3.55833C0.765625 2.84861 1.18125 2.23125 1.70625 1.70625C2.23125 1.18125 2.84861 0.765625 3.55833 0.459375C4.26806 0.153125 5.02639 0 5.83333 0C6.64028 0 7.39861 0.153125 8.10833 0.459375C8.81806 0.765625 9.43542 1.18125 9.96042 1.70625C10.4854 2.23125 10.901 2.84861 11.2073 3.55833C11.5135 4.26806 11.6667 5.02639 11.6667 5.83333C11.6667 6.64028 11.5135 7.39861 11.2073 8.10833C10.901 8.81806 10.4854 9.43542 9.96042 9.96042C9.43542 10.4854 8.81806 10.901 8.10833 11.2073C7.39861 11.5135 6.64028 11.6667 5.83333 11.6667V11.6667M5.83333 10.5C7.13611 10.5 8.23958 10.0479 9.14375 9.14375C10.0479 8.23958 10.5 7.13611 10.5 5.83333C10.5 4.53056 10.0479 3.42708 9.14375 2.52292C8.23958 1.61875 7.13611 1.16667 5.83333 1.16667C4.53056 1.16667 3.42708 1.61875 2.52292 2.52292C1.61875 3.42708 1.16667 4.53056 1.16667 5.83333C1.16667 7.13611 1.61875 8.23958 2.52292 9.14375C3.42708 10.0479 4.53056 10.5 5.83333 10.5V10.5M5.83333 5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333" fill="#207FDF"/>
            </svg>`,
    'ERROR':
        `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.33333 12.5C8.56944 12.5 8.76736 12.4201 8.92708 12.2604C9.08681 12.1007 9.16667 11.9028 9.16667 11.6667C9.16667 11.4306 9.08681 11.2326 8.92708 11.0729C8.76736 10.9132 8.56944 10.8333 8.33333 10.8333C8.09722 10.8333 7.89931 10.9132 7.73958 11.0729C7.57986 11.2326 7.5 11.4306 7.5 11.6667C7.5 11.9028 7.57986 12.1007 7.73958 12.2604C7.89931 12.4201 8.09722 12.5 8.33333 12.5V12.5M7.5 9.16667H9.16667V4.16667H7.5V9.16667V9.16667M8.33333 16.6667C7.18056 16.6667 6.09722 16.4479 5.08333 16.0104C4.06944 15.5729 3.1875 14.9792 2.4375 14.2292C1.6875 13.4792 1.09375 12.5972 0.65625 11.5833C0.21875 10.5694 0 9.48611 0 8.33333C0 7.18056 0.21875 6.09722 0.65625 5.08333C1.09375 4.06944 1.6875 3.1875 2.4375 2.4375C3.1875 1.6875 4.06944 1.09375 5.08333 0.65625C6.09722 0.21875 7.18056 0 8.33333 0C9.48611 0 10.5694 0.21875 11.5833 0.65625C12.5972 1.09375 13.4792 1.6875 14.2292 2.4375C14.9792 3.1875 15.5729 4.06944 16.0104 5.08333C16.4479 6.09722 16.6667 7.18056 16.6667 8.33333C16.6667 9.48611 16.4479 10.5694 16.0104 11.5833C15.5729 12.5972 14.9792 13.4792 14.2292 14.2292C13.4792 14.9792 12.5972 15.5729 11.5833 16.0104C10.5694 16.4479 9.48611 16.6667 8.33333 16.6667V16.6667M8.33333 15C10.1944 15 11.7708 14.3542 13.0625 13.0625C14.3542 11.7708 15 10.1944 15 8.33333C15 6.47222 14.3542 4.89583 13.0625 3.60417C11.7708 2.3125 10.1944 1.66667 8.33333 1.66667C6.47222 1.66667 4.89583 2.3125 3.60417 3.60417C2.3125 4.89583 1.66667 6.47222 1.66667 8.33333C1.66667 10.1944 2.3125 11.7708 3.60417 13.0625C4.89583 14.3542 6.47222 15 8.33333 15V15M8.33333 8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333" fill="#EF4444"/>
            </svg>`,
    'DELETE':
        `<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.25 13.5C1.8375 13.5 1.48437 13.3531 1.19062 13.0594C0.896875 12.7656 0.75 12.4125 0.75 12V2.25H0V0.75H3.75V0H8.25V0.75H12V2.25H11.25V12C11.25 12.4125 11.1031 12.7656 10.8094 13.0594C10.5156 13.3531 10.1625 13.5 9.75 13.5H2.25ZM9.75 2.25H2.25V12H9.75V2.25ZM3.75 10.5H5.25V3.75H3.75V10.5ZM6.75 10.5H8.25V3.75H6.75V10.5Z" fill="#64748B"/>
            </svg>`,
    'CLOSE':
        `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.05 10.5L0 9.45L4.2 5.25L0 1.05L1.05 0L5.25 4.2L9.45 0L10.5 1.05L6.3 5.25L10.5 9.45L9.45 10.5L5.25 6.3L1.05 10.5V10.5" fill="#94A3B8"/></svg>`
};

const NOTIFICATION_TITLES = {
    success: 'Success!',
    delete: 'Task deleted!',
    error: 'Error!'
};

let todos = [];
let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    const toggleModeBtn = document.querySelector('.toggle-mode');
    const btnToggle = document.createElement('button');
    btnToggle.classList.add('toggle-btn');

    const toggleIcon = document.createElement('span');
    toggleIcon.className = 'toggle-icon';

    btnToggle.append(toggleIcon);
    toggleModeBtn.append(btnToggle);

    toggleModeBtn.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');

        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    const defaultFilterBtn = document.querySelector('[data-filter-all]') || document.querySelector('[data-filter=""]');
    if (defaultFilterBtn) {
        defaultFilterBtn.classList.add('active');
    }

    const filterButtons = document.querySelectorAll('[data-filter]');

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            currentFilter = e.target.dataset.filter || 'all';

            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.currentTarget.classList.add('active');

            render();
        });
    });

    loadFromStorage();
    render();

    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        addTodo();
    });

});

function dispatchTodoUpdated() {
    saveToStorage();

    document.dispatchEvent(new Event(EVENT_TODOS_UPDATED));
}

document.addEventListener(EVENT_TODOS_UPDATED, () => {
    render();
});

function isStorageSupported() {
    return typeof Storage !== 'undefined';
}

function saveToStorage() {
    if (isStorageSupported()) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
}

function loadFromStorage() {
    try {
        if (isStorageSupported()) {
            const storedData = localStorage.getItem(STORAGE_KEY);

            if (storedData) {
                todos = JSON.parse(storedData);
            } else {
                todos = [];
            }
        }
    } catch (error) {
        console.error('Failed to load data:', error);
        todos = [];
        showNotification('Failed to load your tasks', 'error');
    }
}

function generateId() {
    return Date.now().toString(36) + '-' + Math.random().toString(36).substring(2, 9);
}

function showNotification(message, type = 'success') {
    const container = document.getElementById('notification-container');

    const toast = document.createElement('div');
    toast.classList.add('toast-item', type);

    const notificationIcon = document.createElement('div');
    notificationIcon.classList.add('notification-icon');

    const boxIcon = document.createElement('span');
    boxIcon.classList.add('box-icon');

    notificationIcon.innerHTML = ICONS[type.toUpperCase()] || ICONS.SUCCESS;

    const notificationWrapper = document.createElement('div');
    notificationWrapper.classList.add('notification-wrapper');

    const notificationTitle = document.createElement('div');
    notificationTitle.classList.add('notification-title');

    notificationTitle.textContent = NOTIFICATION_TITLES[type] || (type.charAt(0).toUpperCase() + type.slice(1));

    const notificationMessage = document.createElement('div');
    notificationMessage.classList.add('notification-message', type);
    notificationMessage.textContent = message;

    const toastCloseBtn = document.createElement('button');
    toastCloseBtn.classList.add('toast-close-btn');
    toastCloseBtn.type = 'button';

    const closeToast = document.createElement('div');
    closeToast.classList.add('close-toast');
    closeToast.innerHTML = ICONS.CLOSE;

    boxIcon.append(notificationIcon);
    toastCloseBtn.append(closeToast);
    notificationWrapper.append(notificationTitle, notificationMessage);
    toast.append(boxIcon, notificationWrapper, toastCloseBtn);
    container.append(toast);

    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    const closeNotification = () => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) toast.remove();
        }, ANIMATION_DURATION);
    }

    toastCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        clearTimeout(autoCloseTimeout);
        closeNotification();
    });

    const autoCloseTimeout = setTimeout(closeNotification, NOTIFICATION_DURATION);
}

function generateTodoObject(id, task, isCompleted) {
    return {
        id,
        task,
        isCompleted
    }
}

function addTodo() {
    const inputElement = document.getElementById('todo-input');
    const textTodo = inputElement.value.trim();

    if (textTodo === '') {
        showNotification('Unable to add task. Please try again.', 'error');
        return;
    }

    const newId = generateId();
    const todoObject = generateTodoObject(newId, textTodo, false);
    todos.push(todoObject);

    inputElement.value = '';
    dispatchTodoUpdated();
    showNotification('Task added successfully!');
}

function addTaskToCompleted(todoId) {
    const todoTarget = findTodo(todoId);

    if (!todoTarget) return;

    todoTarget.isCompleted = true;
    dispatchTodoUpdated();
    showNotification('The task is complete!');
}

function deleteTodo(todoId) {
    const todoTarget = findTodoIndex(todoId);

    if (todoTarget === -1) return;

    todos.splice(todoTarget, 1);
    dispatchTodoUpdated();
    showNotification('The task has been removed from your list.', 'delete');
}

function undoTaskFromCompleted(todoId) {
    const todoTarget = findTodo(todoId);

    if (!todoTarget) return;

    todoTarget.isCompleted = false;
    dispatchTodoUpdated();
    showNotification('Task returned to active list');
}

function updateCounter() {
    const activeCount = todos.filter(t => !t.isCompleted).length;
    const text = activeCount === 1 ? 'task' : 'tasks';
    const counterElement = document.getElementById('todo-counter');
    counterElement.textContent = `${activeCount} ${text} left`;
}

function createTodo(todoObject) {
    const todoList = document.createElement('li');
    todoList.setAttribute('id', `todoObject-${todoObject.id}`);

    if (todoObject.isCompleted) todoList.classList.add('completed');

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    const trashContainer = document.createElement('div');
    trashContainer.classList.add('trash-container');

    const btnStatus = document.createElement('button');
    btnStatus.dataset.id = todoObject.id;

    btnStatus.className = todoObject.isCompleted ? 'check-button' : 'uncheck-button';
    const icon = document.createElement('span');
    icon.className = 'icon-check';
    btnStatus.append(icon);

    btnStatus.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        todoObject.isCompleted ? undoTaskFromCompleted(id) : addTaskToCompleted(id);
    });

    const todoTask = document.createElement('div');
    todoTask.classList.add('todo-text');
    todoTask.textContent = todoObject.task;

    const btnDelete = document.createElement('button');
    btnDelete.classList.add('delete-button');
    btnDelete.dataset.id = todoObject.id;

    btnDelete.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        deleteTodo(id);
    });

    taskContainer.append(btnStatus, todoTask);
    trashContainer.append(btnDelete);
    todoList.append(taskContainer, trashContainer)

    return todoList;
}

function render() {
    const todoContainer = document.getElementById('todos');
    todoContainer.textContent = '';

    const filteredTodos = todos.filter(todo => {
        if (currentFilter === 'active') return !todo.isCompleted;
        if (currentFilter === 'completed') return todo.isCompleted;
        return true;
    });

    filteredTodos.forEach((todoObject) => {
        const todoElement = createTodo(todoObject);
        todoContainer.append(todoElement);
    });

    updateCounter();
}

function findTodo(todoId) {
    return todos.find(todo => todo.id === todoId) || null;
}

function findTodoIndex(todoId) {
    return todos.findIndex(todo => todo.id === todoId)
}