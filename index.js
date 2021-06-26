 const taskContainer=document.querySelector(".task_container");

function saveChanges()
 {
    const taskData={
       id:Math.random(),
        imageurl: document.getElementById("image").value,
        tasktitle:document.getElementById("tasktitle").value,
        tasktype:document.getElementById("tasktype").value,
        taskdescription:document.getElementById("taskdescription").value,
    }
  const newcard=` <div class="col-md-6 col-lg-4" id=${taskData.id}>
  <div class="card text-center">
    <div class="card-header d-flex justify-content-end gap-2 ">
        <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
        <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>

    
    </div>
    <img src=${taskData.imageurl}>
    <div class="card-body">
.
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer text-muted ">
        <button type="button" class="btn btn-primary float-end">open task</button>
    </div>
  </div>
  </div>`;
    taskContainer.insertAdjacentHTML("beforeend",newcard);
}
