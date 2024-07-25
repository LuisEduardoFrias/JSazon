//
import FoodDtos from './food_dtos';

export default class BillDtos {
  constructor(date: string, foods: FoodDtos[], paid: boolean) {
    this.date = date;
    this.foods = foods;
    this.paid = paid;
    this.totalInvoiceCost = foods.map(o => o.price)
      .reduce((ps, p) => ps + p);
  }
}