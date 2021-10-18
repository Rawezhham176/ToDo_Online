var customAlert = document.getElementById("customAlert")
var ok_alert = document.querySelector(".ok_alert")

function showAlert() {
    customAlert.style.display = "block"
}


document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newTask input').value == 0) {
        showAlert()
        document.querySelector(".ok_alert").onclick = function () {
            customAlert.style.display = "none"
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

const menuBtn = document.querySelector(".hamburger")
let menuOpen = false

menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open")
        menuOpen = true
    } else {
        menuBtn.classList.remove("open")
        menuOpen = false
    }
})