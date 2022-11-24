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
    taskList.addEventListener('click',deleteItem);
    
    //delete all item
    btnDeleteAll.addEventListener("click",deleteAllItem);

    //edit item
    taskList.addEventListener('click',editItem);
}
function deleteAllItem(e){

    if(confirm("Are you sure?")){
        // silmek için ilk yöntem
        taskList.innerHTML='';

        //silmek için 2.yöntem
        // while(taskList.firstChild){
        //     taskList.removeChild(taskList.firstChild);
        // }
    }

    e.preventDefault();
}

function deleteItem(e){
    //console.log(e);
    if(e.target.className==="bi bi-x-circle"){
        //console.log("i elementine tıklandı!!");
        if(confirm("Are you sure ?")){
            //console.log(e);
            e.target.parentElement.parentElement.remove();
        }
    }
}

function editItem(e){

    
    if(e.target.className==="btn btn-secondary btn-sm float-end mx-3"){
        input.value.innerText = e.target.parentElement.innerText;
    }
    
}

function addNewItem(e){
    
    e.preventDefault();
    //console.log(e);

    if(input.value===''){
    alert("Please type a task!");
    return;

    }

    const li=document.createElement('li');
    li.classList='list-group-item list-group-item-secondary'; //li elementi oluşturduk
    li.appendChild(document.createTextNode(input.value));

    const a=document.createElement('a');
    a.classList='delete-item float-end'; //a elementi oluşturduk
    a.setAttribute('href','#');
    a.innerHTML='<i class="bi bi-x-circle"></i>';

    const edit=document.createElement('btn');
    edit.classList='btn btn-secondary btn-sm float-end mx-3';
    edit.innerHTML='Edit';


    li.appendChild(a); //a yı li nin içine soktuk
    li.appendChild(edit);
    taskList.appendChild(li); //li yi task listin child yaptık




}