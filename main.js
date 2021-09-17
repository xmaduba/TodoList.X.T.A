

function addTask() {
    if (document.querySelector(".input").value) {
    const template = `<li class="taskListItem">${document.querySelector(".input").value}</li>`;
    document.querySelector("ul").innerHTML += template;
    document.querySelector(".input").value = "";
    }
}

const taskButton = document.querySelector('.addTaskButton');
// element.insertAdjacentHTML(position, text);

taskButton.addEventListener('click', () => {
addTask(document.querySelector(".input").value);
});