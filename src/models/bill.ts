//
import { DajB } from 'dajts'
import Food from './food';

export default class Bill extends DajB {
  constructor(date: string, foods: Food[], paid: boolean, client: string) {
    super();
    this.date = date;
    this.foods = foods;
    this.paid = paid;
    this.client = client;
  }
}