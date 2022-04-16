

jQuery(function(){ 
 
    $('h1').css({'color':'green'});
    $('.first').css({'font-weight': 'bold'});
    $('#impo').css({'font-style': 'italic',
    'font-size': '16pt'});

});

const tasks = [];

// Make a function that allows create new tasks in our task list.

function newElement(){
    const value = document.getElementById('task-title').value;
    if (value === '') {
     alert ("Поле не может быть пустым!")
    } 
    else {
     tasks.push(value);

     saveToDataStorage();
     render();
     }
    }
    
    // removing tasks
    function close(index) {
        return () => {
          tasks.splice(index, 1);
          
          saveToDataStorage();
          render();
        }
      }
        





//Save tasks in localStorage

function saveToDataStorage() {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Render the template.
 
 function render() {
    const tasksList = document.getElementById('tasks');
    
    while (tasksList.firstChild) {
        tasksList.removeChild(tasksList.firstChild);
    }
    
    tasks.forEach((task, index) => {
       const closeT = document.createElement('span');
       const closeSign = document.createTextNode('x');
       closeT.classList.add('close');
       closeT.appendChild(closeSign);
       closeT.addEventListener('click', close(index));
      
       const taskLI = document.createElement("li");
       const taskTitle = document.createTextNode(task);
       taskLI.appendChild(taskTitle);
       taskLI.appendChild(closeT);
      
       tasksList.appendChild(taskLI);
    });
 }

 // Create an opportunity to mark tasks  as completed (checked).

for (let i=0; i<tasksList.length; i++){  
    tasksList[i].addEventListener("click", check, false);

   function check(event) {
    tasksList[i].className = "checked";
    }
}