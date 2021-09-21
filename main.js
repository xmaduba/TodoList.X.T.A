

function addTask() {
    if (document.querySelector(".input").value) {
    const template = 
        `<li class="taskListItem">${document.querySelector(".input").value}
            <div class="taskButtons">
                <button id="deleteButton" class="taskButton deleteButton"" type="submit">Delete
                </button>
                <button id="editButton" class="taskButton" type="submit">Edit
                </button>
                <button id="doneButton" class="taskButton" type="submit">Done
                </button>
            </div>
        </li>`;
    document.querySelector("ul").innerHTML += template;
    document.querySelector(".input").value = "";

    }
}


// element.insertAdjacentHTML(position, text);
const taskButton = document.querySelector('.addTaskButton');
const deleteButton = document.querySelector('#deleteButton');
const editButton = document.querySelector('#editButton');
const doneButton = document.querySelector('#doneButton');

document.addEventListener('click', (e) => {
    if(e.target.id === 'taskButton'){
        taskButton.addEventListener('click', () => {
            addTask(document.querySelector(".input").value);
        }   
    }
});

// taskButton.addEventListener('click', () => {
//     addTask(document.querySelector(".input").value);
// });
