let doc = document;

let addTaskInput = doc.querySelector("#addTaskInput");
let addTaskbtn = doc.querySelector(".addTask-btn");
let viewTask = doc.querySelector(".viewTask");

addTaskbtn.addEventListener("click", () => {
  let card = doc.createElement("div");
  let cardInput = doc.createElement("input");
  let article = doc.createElement("article");
  let editBtn = doc.createElement("div");
  let deleteBtn = doc.createElement("div");
  editBtn.innerHTML = "EDIT";
  deleteBtn.innerHTML = "DELETE";

  card.className = "card";
  editBtn.classList.add("btn");
  editBtn.classList.add("edit-btn");
  deleteBtn.classList.add("btn");
  deleteBtn.classList.add("delete-btn");
  article.append(editBtn, deleteBtn);
  card.append(cardInput, article);
  cardInput.value = addTaskInput.value;
  viewTask.appendChild(card);
  console.log("added");
});

