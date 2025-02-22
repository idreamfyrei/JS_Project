const addInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");

const todoItemsContainer = document.getElementById("todo-items-container");

addBtn.addEventListener("click", () => {
  const value = addInput.value;
  // create list element
  const li = document.createElement("li");
  li.innerText = value;

  // delete button
  const delBtn = document.createElement("button");
  delBtn.classList.add("material-symbols-outlined");
  delBtn.innerText = "delete";

  //remove list element
  delBtn.addEventListener("click", function () {
    li.remove();
  });
  // append delete button to list element
  li.appendChild(delBtn);

  // edit button
//   const editBtn = document.createElement("button");
//   editBtn.classList.add("material-symbols-outlined");
//   editBtn.innerText = "edit";

  // edit list element
//   editBtn.addEventListener("click", function () {
//     addInput.value = li.firstChild.textContent;
//     const liNew = document.createElement("li");
//     liNew.innerText = value;
//     todoItemsContainer.replaceChild(liNew, li);
//   });
  
//   li.appendChild(editBtn);

  todoItemsContainer.appendChild(li);
  addInput.value = "";

  clearBtn.addEventListener("click", () => {
    todoItemsContainer.removeChild(li);
  });
});
