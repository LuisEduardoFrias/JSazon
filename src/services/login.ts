//
import Fetch, { Method, DataFetch } from "hp/fetch"
import { session } from 'hp/api_router'
import { setCookie } from 'hp/local_cookie';
import useStore from 'str/store';
import User from 'md/user';

export default async function SLogin(user: User) {

  const datafetch: DataFetch = {
    url: session.logIn,
    method: Method.POST,
    body: user,
  }

  return await Fetch(datafetch);
}