import { NegociationModel } from "../models/negociationModel.js";

export class NegociationController {
  private inputDate: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private inputValue: HTMLInputElement;

  constructor() {
    this.inputDate = document.querySelector('#data');
    this.inputAmount = document.querySelector('#quantidade');
    this.inputValue = document.querySelector('#valor');
  }

  add(): void {    
    const negociation = this.createNegociation()
    console.log(negociation);
    this.cleanForm()
  }
  
  createNegociation(): NegociationModel {
    const regex = /-/gi;
  
    const date = new Date(this.inputDate.value.replace(regex, ','));
    const amount = parseInt(this.inputAmount.value);
    const value = parseFloat(this.inputValue.value);

    return new NegociationModel(date, amount, value)
  }

  cleanForm(): void {
    this.inputDate.value = '';
    this.inputAmount.value = '';
    this.inputValue.value = '';

    this.inputDate.focus();
  }
}