//
import daj, { Token } from 'dajts'
import BillController from 'ct/bill_controller'
import ClientDto from 'dtos/client_dtos'
import User from 'md/user'

export default class AdminController {

  static getClients() {

    const { error, data } = daj.getSync(User.getInstance());

    if (error) {
      console.log("error: al octener los bill: ", error)
      return { error: "error: al octener os bill", data: null };
    }

    const clients: ClientDtos = data.filter(c => c.rol === "client");

    const clientsDtos = clients.map(cl => {
      const { data: bills } = BillController.get(cl.key, null, true);

      let totalDebt = 0;

      if (bills) {
        console.log('bills: ', bills)
        totalDebt = bills.reduce((ab, bill) => ab + bill.totalInvoiceCost, 0)
      }

      return new ClientDto(cl.key, cl.userName, cl.alias, totalDebt)
    });

    return { error: null, data: clientsDtos };
  }
}