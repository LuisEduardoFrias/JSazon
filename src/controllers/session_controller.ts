//
import daj, { Token } from 'dajts'
import UserDto from 'dtos/user_dtos'
import User from 'md/user'

export default class SessionController {

  static login(userName: string, password: string) {

    const credentials = { userName, password };

    const user_token: Token = daj.loginSync(credentials);

    if (!user_token.token) {
      console.log("error: al octener el usuario")
      return { error: "error del token", data: null };
    }

    const { error, data } = daj.getSync(User.getInstance());

    if (error) {
      console.log("error: al octener el usuario: ", error)
      return { error: "error: al octener el usuario", data: null };
    }

    const userFind: User = data.find(u => u.userName === userName);

    const _user = new UserDto(userFind.key, userFind.userName, userFind.rol);

    return { error: null, data: { user: _user, token: user_token.token } };
  }
}