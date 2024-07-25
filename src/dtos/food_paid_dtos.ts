//
export default class FoodPaidDtos {
  constructor(date: string, countFoods: number, paid: boolean) {
    this.date = date;
    this.countFoods = countFoods;
    this.paid = paid;
  }
}