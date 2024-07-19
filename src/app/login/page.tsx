'use client'
import Image from 'next/image';
import Form, { Span } from 'cp/form';
import TUser from 'md/user';
import SLogin from 'sv/login';
import 'st/login.css';

export default function Login() {

  function handlerServ8ce(user: TUser) {
    SLogin(user);
  }

  return (
    <div className="container-login">
      <header>
        <Image src="/logo.jpg" width="300" height="300" alt="a" />
      </header>
      <main>
        <Form<TUser> onService={handlerServ8ce} textBtn="Acceder">
          <label>
            Usuario
            <input id="user" name="user" placeholder="Ejemplo: Juan sazon" />
            <Span
              htmlFor="user"
              required="Se requiere este campo. *"
              minlength={[5, "Su usurio debe tener almenos 4 caracteres"]} />
          </label>
          <label>
            Contraseña
            <input id="password" name="password" placeholder="*************" type="password" />
            <Span
              htmlFor="password"
              required="Se requiere este campo. *"
              minlength={[8, "Su contraseña debe tener almenos 8 caracteres"]} />
          </label>
        </Form>
      </main >
      <footer>
        <span>copy right © ® 2024</span>
      </footer>
    </div >
  )
}  