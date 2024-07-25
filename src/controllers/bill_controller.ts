//
import daj, { Token } from 'dajts'
import BillDto from 'dtos/bill_dtos'
import Cronos from 'hp/cronos'
import Bill from 'md/bill'

export default class BillController {

  static get(userId: string) {

    const { error, data } = daj.getSync(Bill.getInstance());

    if (error) {
      console.log("error: al octener los bill: ", error)
      return { error: "error: al octener os bill", data: null };
    }

    const billFind: Bill = data.filter(u => {
      const date = Cronos.parseDate(u.date)
      const nowDate = new Cronos();

      if (u.client === userId &&
        date.year === nowDate.year &&
        date.month === nowDate.month) {
        return true;
      }
    });

    const bills = billFind.map(bf => new BillDto(bf.date, bf.foods, bf.paid));

    return { error: null, data: bills };
  }
}