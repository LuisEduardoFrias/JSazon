//
import daj, { Token } from 'dajts'
import BillDto from 'dtos/bill_dtos'
import Cronos from 'hp/cronos'
import Bill from 'md/bill'

export default class BillController {

  static get(userId: string, month?: number | null, isntPay: boolean = false) {

    const { error, data } = daj.getSync(Bill.getInstance());

    if (error) {
      console.log("error: al octener los bill: ", error)
      return { error: "error: al octener os bill", data: null };
    }

    const billFind: Bill = data.filter(u => {
      const date = Cronos.parseDate(u.date)

      if (isntPay) {
        if (u.client === userId && u.paid === false) {
          return true;
        }
      }

      const newDate = new Cronos();

      if (u.client === userId &&
        date.year === newDate.year &&
        date.month >= month && newDate.month) {
        return true;
      }
    });

    const bills = billFind.map(bf => new BillDto(bf.date, bf.foods, bf.paid));

    return { error: null, data: bills };
  }
}