var task = document.querySelector("#new-task-input");
var btn = document.querySelector("#new-task-submit");
var taskbar = document.querySelector("#tasks")
btn.addEventListener('click', function(e){
    var texty = task.value
    console.log(texty)
    taskbar.innerHTML += `<div class="task">
    <div class="content">
        <input 
            type="text" 
            class="text" 
            value=${texty}
            readonly
            >
    </div>
    <div class="actions">
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    </div>
</div>`

    task.value = ""
    e.preventDefault()
})

// var edit = document.querySelector(".edit")
// var del= document.querySelector(".delete")

taskbar.addEventListener('click',function(e){
var edit = document.querySelector(".edit")
var del= document.querySelector(".delete")
var text = document.querySelector(".text")
var rect = document.querySelector('.task')
    if(e.target.className == "edit"){
        edit.parentElement.previousElementSibling.firstElementChild.readOnly = false;
    }
    if(e.target.className == "delete"){
        rect.remove();
        
    }
    // if(e.target == edit){
    //     console.log(edit.parentElement.previousElementSibling.firstElementChild.value)
    //     task.value = edit.previousElementSibling
    // }

})



