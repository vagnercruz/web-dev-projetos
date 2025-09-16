let count = 0;

window.addEventListener("load", () => {
    const saved = localStorage.getItem("kanban-tasks");
    if (saved) {
        const data = JSON.parse(saved);
        count = data.count || 0;
        data.tasks.forEach(t => createTask(t.text, t.id, t.column));
    }
});

function createTask(text, id = `task-${count++}`, column = "fazer") {
    const task = document.createElement("div");
    task.className = "task";
    task.id = id;

    const span = document.createElement("span");
    span.textContent = text;

span.contentEditable = "false";

span.addEventListener("dblclick", () => {
    span.contentEditable = "true";
    span.focus();
});

span.addEventListener("blur", () => {
    span.contentEditable = "false";
    saveTasks();
});

span.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        span.blur();
    } else if (e.key === "Escape") {
        span.textContent = span.textContent.trim();
        span.blur();
    }
});

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    Object.assign(removeBtn.style, {
        marginLeft: "10px",
        background: "red",
        color: "white",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer"
    });

    removeBtn.addEventListener("click", () => {
        task.remove();
        saveTasks();
    });

    task.appendChild(span);
    task.appendChild(removeBtn);

    task.setAttribute("draggable", true);
    task.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", task.id);
    });

    document.querySelector(`#${column} .task-list`).appendChild(task);
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll(".task").forEach(task => {
        const column = task.closest(".column").id;
        tasks.push({
            id: task.id,
            text: task.querySelector("span").textContent,
            column
        });
    });
    localStorage.setItem("kanban-tasks", JSON.stringify({ count, tasks }));
}

function addTask() {
    const input = document.getElementById("task-input");
    const value = input.value.trim();
    if (value === "") return;
    createTask(value);
    saveTasks();
    input.value = "";
}

document.getElementById("add-button").addEventListener("click", addTask);

document.querySelectorAll(".task-list").forEach((list) => {
    list.addEventListener("dragover", (e) => e.preventDefault());

    list.addEventListener("drop", (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        const task = document.getElementById(id);
        if (task) {
            list.appendChild(task);
            saveTasks();
        }
    });
});
