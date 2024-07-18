import { myCreateCard, createTicket } from "./utils.js";

const main = document.querySelector("#app-main");
const addCardForm = document.querySelector("#addCardForm");

// fetching savedTasks obj and converting
const savedTasks = JSON.parse(localStorage.getItem("savedTasks")) || {};

//

// Displaying the tasks already saved in localStorage
for (const category in savedTasks) {
  const card = myCreateCard(category);

  savedTasks[category].forEach((task) => {
    card.insertBefore(createTicket(task), card.lastElementChild);
  });

  main.insertBefore(card, addCardForm);
}

// creating new cards
addCardForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.target;

  const cardTitle = form.children[0].value;
  const card = myCreateCard(cardTitle);

  main.insertBefore(card, addCardForm);

  form.reset();
});
