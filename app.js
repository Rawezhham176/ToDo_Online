document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newTask input').value == 0) {
        document.querySelector('#customAlert').style.display = "relative";
        if (document.querySelector(".content button").onclick) {
            document.getElementById("customAlert").style.display = "none";
        }
    } else {
        document.querySelector("#tasks").innerHTML +=
            `
    <div class="task">
        <span id="taskname">
            ${document.querySelector('#newTask input').value}
        </span>
        <button class="delete">
            <i class="far fa-trash-alt" ></i>
        </button>
    </div>
    `;

        var current_task = document.querySelectorAll(".delete");
        for (var i = 0; i < current_task.length; i++) {
            current_task[i].onclick = function () {
                this.parentNode.remove()
            }
        }

        var tasks = document.querySelectorAll(".task");
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle("completed")
            }
        }

        document.querySelector('#newTask input').value = ""

    }
}