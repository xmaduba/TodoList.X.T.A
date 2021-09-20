

function addTask() {
    if (document.querySelector(".input").value) {
    const template = 
        `<li class="taskListItem">${document.querySelector(".input").value}
            <div class="taskButtons">
                <button id=" class="taskButton deleteButton"" type="submit">Delete
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

// const applyEventListeners = () => {
//     deleteButton.addEventListener('click', () => {
//         alert("delete");
//     });
//     editButton.addEventListener('click', () => {
//         alert("edit");
//     });
//     checkButton.addEventListener('click', () => {
//         alert("check");
//     });
// }


// element.insertAdjacentHTML(position, text);
const taskButton = document.querySelector('.addTaskButton');
const deleteButton = document.querySelector('#deleteButton');
const editButton = document.querySelector('#editButton');
const doneButton = document.querySelector('#doneButton');

// document.querySelector(ul).addEventListener("click", () => {
//     if(e.target.classList.contains('deleteButton')) {
//         alert("delete");
//     })
//     alert("hjbhjk");
// }

taskButton.addEventListener('click', () => {
    addTask(document.querySelector(".input").value);
});
