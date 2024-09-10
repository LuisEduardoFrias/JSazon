//
import { DajB } from 'dajts'

export default class FoodPaid extends DajB {
  constructor(date: string, countFoods: number, paid: boolean, client: string) {
    super();
    this.date = date;
    this.countFoods = countFoods;
    this.paid = paid;
    this.client = client;
  }
}