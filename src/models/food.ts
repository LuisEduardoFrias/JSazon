
export default class TFoodBill {
  constructor(date: Date, foods: TFood) {
    this.date = date;
    this.foods = foods;
  }
}

export class TFood {
  constructor(description: string, price: Float32Array) {
    this.description = user;
    this.price = price;
  }
}