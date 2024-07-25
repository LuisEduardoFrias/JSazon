//
import { User as us } from 'dajts'

export default class User extends us {
  constructor(userName: string, password: string) {
    super();
    this.userName = userName;
    this.password = password;
  }
}