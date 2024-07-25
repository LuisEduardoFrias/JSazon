//
import daj, { Token } from 'dajts'
import ClientDto from 'dtos/client_dtos'
import User from 'md/user'

export default class AdminController {

  static getClients() {

    const { error, data } = daj.getSync(User.getInstance());

    if (error) {
      console.log("error: al octener los bill: ", error)
      return { error: "error: al octener os bill", data: null };
    }

    const billFind: Bill = data.filter(c => e.rol ==="client");

    const bills = billFind.map(bf => new BillDto(bf.date, bf.foods, bf.paid));

    return { error: null, data: bills };
  }
}