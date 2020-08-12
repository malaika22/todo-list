// Getting DOM elements
// const todosList=document.getElementsByClassName("todo-options");
const deleteButtons= document.getElementsByClassName('delete-buttons');
const todo=document.getElementById('todo');
const listContainer=document.getElementById("list-container")
const addIcon=document.getElementById('add-icon')




// ######################Event Listerners#########################

//Check off todosList

listContainer.addEventListener("click", e =>{
    
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checkoff")
    }
      
  });


// Delete a todo
listContainer.addEventListener("click", e => {
    e.stopPropagation();
       if(e.target && e.target.className==="delete-buttons"){
        e.target.parentNode.style.opacity="0";
        setTimeout(() =>{
         e.target.parentNode.parentNode.removeChild(e.target.parentNode)
        }, 500);
        
       }  else  if(e.target && e.target.tagName==="I"){
        e.target.parentNode.parentNode.style.opacity="0";
        setTimeout(() =>{
         e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)
        }, 500);
        
       }  
    })


//Appent a todo
todo.addEventListener('keypress', event =>{
    if(event.which===13){
        
        listContainer.insertAdjacentHTML("beforeend", `<li class=todo-options><span class="delete-buttons"> <i class="fa fa-trash"></i></span>${todo.value}</li>`)
        todo.value= ""
    }
})

//input option
addIcon.addEventListener('click', () =>{
   todo.classList.toggle('todoClass')
})