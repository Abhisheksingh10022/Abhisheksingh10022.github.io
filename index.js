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
store.push(obj[i]);

}

}
function generate(element)
{
 
  const card=
   ` <div class="col-md-6 col-lg-4">
<div class="card text-center">
  <div class="card-header d-flex justify-content-end gap-2 ">
      <button type="button" class="btn btn-outline-success"  ><i class="fas fa-pencil-alt"  ></i></button>

      <button type="button" class="btn btn-outline-danger"  ><i class="fas fa-trash-alt"  id=${element.id}  onclick="delet.apply(this,arguments)"  ></i></button>

  
  </div>
  <img src=${element.imageurl}>
  <div class="card-body">
.
    <a href="#" class="btn btn-primary">Go somewhere</a>
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
