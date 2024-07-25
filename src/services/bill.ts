import Fetch, { Method, DataFetch } from "hp/fetch"
import { bill } from 'hp/api_router'

export default async function SGetBills(userId: string) {

  const datafetch: DataFetch = {
    url: bill.get.replace('{id}', userId),
    method: Method.GET
  }

  return await Fetch(datafetch);
}