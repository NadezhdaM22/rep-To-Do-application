

jQuery(function(){ 
 
    $('h1').css({'color':'green'});
    $('.first').css({'font-weight': 'bold'});
    $('#impo').css({'font-style': 'italic',
    'font-size': '16pt'});

});
  
// Make a function that allows create new tasks in our task list.

function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
     alert ("Поле не может быть пустым!")
    } else{
     document.getElementById("myUL").appendChild(li);
     }
    }
    
// Make button "х" for removing tasks.
// It doesn't work with new tasks!! Why??

var myNodelist = document.getElementsByTagName('li');
var i;
for (i=0; i<myNodelist.length; i++){
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
myNodelist[i].appendChild(span);    
}

var close = document.getElementsByClassName("close");
var i;
for (i=0; i<close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}


// Create an opportunity to mark tasks  as completed (checked).

var tasks = document.querySelectorAll('li');
for (let i=0; i<tasks.length; i++){  
tasks[i].addEventListener("click", check, false);

    function check(event) {
        tasks[i].className = "checked";
    }
}




    //const tasks = ['task1', 'task2', 'task3'];
    //const data = JSON.stringify(tasks);
        
    //window.localStorage.setItem('tasks', data);
    //const tasksRetrieved = window.localStorage.getItem('tasks');
    //console.log(JSON.parse(tasksRetrieved));
    
        
    

        