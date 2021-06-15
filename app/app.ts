import { NegociationController } from "./controllers/negociationController.js";

const controller = new NegociationController()
const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault()
  controller.add()
});