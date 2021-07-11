 const taskContainer=document.querySelector(".task_container");
let store=[];

function load()
{
  const h=localStorage.getItem("tasky");
const obj=JSON.parse(h);
  for(var i=0;i<obj.length;i++)
  {
  const newcard1=generate(obj[i]);
  taskContainer.insertAdjacentHTML("beforeend",newcard1);


}

}
function generate(element)
{
 
  const card=
   ` <div class="col-md-6 col-lg-4">
<div class="card text-center">
  <div class="card-header d-flex justify-content-end gap-2 ">
      <button type="button" class="btn btn-outline-success"  id=${element.id} onclick="edit.apply(this,arguments)"  ><i class="fas fa-pencil-alt" id=${element.id} onclick="edit.apply(this,arguments)"  ></i></button>

      <button type="button" class="btn btn-outline-danger" id=${element.id}  onclick="delet.apply(this,arguments)"  ><i class="fas fa-trash-alt"  id=${element.id}  onclick="delet.apply(this,arguments)"  ></i></button>
  </div>
  <img src=${element.imageurl}>
  <div class="card-body">
.  <h5 class="card-title">${element.tasktitle}</h5><hr>
<p class="card-text" >${element.taskdescription}</p>
  </div>
  <div class="card-footer text-muted ">
      <button type="button" class="btn btn-primary float-end">open task</button>
  </div>
</div>
</div>`;
return card;

}
function saveChanges()
 {
    const taskData={
       id:`${Date.now()}`,
        imageurl: document.getElementById("image").value,
        tasktitle:document.getElementById("tasktitle").value,
        tasktype:document.getElementById("tasktype").value,
        taskdescription:document.getElementById("taskdescription").value,
    }
const newcard=generate(taskData);

taskContainer.insertAdjacentHTML("beforeend",newcard);
store.push(taskData);
localStorage.setItem("tasky",JSON.stringify(store));
}
function delet(event)
{event=window.event;
  const tag=event.target.tagName;
   const tarid=event.target.id;
  store= store.filter((obj)=>{
     tarid!==obj.id
   });
   localStorage.setItem("tasky",JSON.stringify(store));
  if(tag==="BUTTON")
  {
taskContainer.removeChild(event.target.parentNode.parentNode.parentNode);

  }
  else 
  {
  taskContainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);

  }
  
}
function edit(event)
{
event=window.event;
const id=event.target.id;
const tag=event.target.tagname;
let parentelement;
if(tag==="BUTTON")
{
 parentelement= event.target.parentNode.parentNode;

 let tasktitle=parentelement.childNodes[5].childNodes[1];
 let taskdescription=parentelement.childNodes[5].childNodes[4];
}
else{
parentelement= event.target.parentNode.parentNode.parentNode;
let tasktitle=parentelement.childNodes[5].childNodes[1];
let taskdescription=parentelement.childNodes[5].childNodes[4];
let buuton=parentelement.childNodes[7].childNodes[1];

tasktitle.setAttribute("contenteditable","true");
taskdescription.setAttribute("contenteditable","true");
buuton.innerHTML="Save changes";
}
}
