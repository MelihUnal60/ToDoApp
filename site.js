// Global değişkenler

const from=document.querySelector("form");
const input=document.querySelector("#txtTaskName");
const btnDeleteAll=document.getElementById("btnDeleteAll");
const taskList=document.getElementById("task-list");
let item;

eventListener();

function eventListener(){
    // form submit event

    from.addEventListener("submit",addNewItem);

    //delete an item
    //delete all item
    btnDeleteAll.addEventListener("click",deleteAllItem);
}
function deleteAllItem(e){

    if(confirm("Are you sure?")){
        taskList.innerHTML='';
    }

    e.preventDefault();
}

function addNewItem(e){
    
    e.preventDefault();
    //console.log(e);

    if(input.value===''){
    alert("Please type a task!");
    return;

    }

    const li=document.createElement('li');
    li.classList='list-group list-group-item-secondary'; //li elementi oluşturduk
    li.appendChild(document.createTextNode(input.value));

    const a=document.createElement('a');
    a.classList='delete-item float-end'; //a elementi oluşturduk
    a.setAttribute('href','#');
    a.innerHTML='<i class="bi bi-x-circle"></i>';

    li.appendChild(a); //a yı li nin içine soktuk
    taskList.appendChild(li); //li yi task listin child yaptık


}