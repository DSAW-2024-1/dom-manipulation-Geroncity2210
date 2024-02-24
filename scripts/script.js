const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function AddTask(){
    if(inputbox.value === ''){ //si hay texto
        alert("Ingrese una tarea..!");
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";//simbolo de la cruz
        li.appendChild(span);
    }
    inputbox.value='';
    saveData();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        // activa/desactiva la clase checked, es decir que al hacer clic, se va a marcar o desmarcar como completada
        e.target.classList.toggle("checked");
        saveData();
    }    
    else if(e.target.tagName ==="SPAN"){
        // al darle clic al span, se borra la tarea
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){//funcion para guardar las tareas hechas
    localStorage.setItem("data", listcontainer.innerHTML);

}

function showList(){//cargar las tareas existentes
    listcontainer.innerHTML = localStorage.getItem("data");
}
showList();