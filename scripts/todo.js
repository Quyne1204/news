'use strict'


if(userActive){
    const taskInput = document.getElementById("input-task");
    const btn = document.getElementById("btn-add");
    const listtodo = document.getElementById("todo-list");
    
    loadTodo();
    
    function loadTodo(){
        let html = '';

        todoArr
            .filter((todo) => todo.owner === userActive.username)
            .forEach(function (todo){
                html += `
                    <li class=${todo.isDone ? "checked":""}>
                        ${todo.task}
						<span class="close">×</span>
                    </li>
                `
            });
        listtodo.innerHTML = html;
        toggleTask();
        deleteTask();
    }
    //Add Task
    btn.addEventListener('click',function(){
        const isValidate = validate();
        if(isValidate){
            const todo = {
                task: taskInput.value,
                owner:userActive.username,
                isDone:false
            }

            todos.push(todo);
            saveToStogare("todoArr",todos);
            taskInput.value ='';
        }
        loadTodo();
    })
    //validate
    function validate(){
        let validate = true;
        if(taskInput.value.trim().length === 0){
            alert('Bạn hãy nhập tên Task');
            validate = false;
        }
        return validate;
    }

    
    function toggleTask(){
        document.querySelectorAll('#todo-list li').forEach(function (liEl){
            liEl.addEventListener('click',function(e){
                if(e.target !== liEl.children[0]){
                    liEl.classList.toggle("checked");
                    const todo = todoArr.find(
                        (todoItem)=>todoItem.owner === userActive.username && 
                                todoItem.task === liEl.innerText.slice(0,-1).trim()
                    );
                    todo.isDone = liEl.classList.contains("checked") ? true : false;
                    saveToStogare("todoArr",todoArr);
                }
            })
        })
    }
    function deleteTask(){
        document.querySelectorAll('#todo-list .close').forEach(function (liEl){
            liEl.addEventListener('click',function(){

                const isDelete = confirm("Bạn chắc chắn muốn xóa?");
                if(isDelete){
                    const index = todoArr.findIndex(
                        (item)=>item.owner === userActive.username && 
                                // item.task === liEl.innerText.slice(0,-1).trim()
                                item.task === liEl.parentElement.textContent.slice(0,-1)
                    );
                    console.log(index);
                    todoArr.splice(index+1, index+2 );
                    saveToStogare("todoArr",todoArr);
                    loadTodo();
                }
            })
        })
    }
    

}else{
    alert("Bạn hãy đăng nhập");
    window.location.assign("../pages/login.html");
}
