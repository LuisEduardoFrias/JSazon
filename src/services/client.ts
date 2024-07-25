//
import Fetch, { Method, DataFetch } from "hp/fetch"
import { admin } from 'hp/api_router'

export default async function SGetClients() {

  const datafetch: DataFetch = {
    url: admin.getClient,
    method: Method.GET,
  }

  return await Fetch(datafetch);
}