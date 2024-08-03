'use client'
import Image from 'next/image';
import useStore from 'str/store.ts'
import { useRouter } from 'next/navigation';
import Form, { Span } from 'cp/form';
import User from 'md/user';
import SLogin from 'sv/login';
import 'st/login.css';

export default function Login() {
  const router = useRouter();
  const { addSession } = useStore((state) => ({ addSession: state.addSession }));

  async function handlerService(user: User) {
    const { error, data } = await SLogin(user);

    if (error) {
      //notify
      alert("error login: "+error)
      return;
    }

    addSession(data)
    router.push('/');
  }

  return (
    <div className="container-login">
      <header>
        <Image src="/logo.jpg" priority width="300" height="300" alt="a" />
      </header>
      <main>
        <Form<User> onService={handlerService} textBtn="Acceder">
          <label>
            Usuario
            <input id="user" name="user" placeholder="Ejemplo: Juan sazon" />
              <Span
                htmlFor="user"
                required="Se requiere este campo. *"
                minlength={[4, "Su usurio debe tener almenos 4 caracteres"]} />
            </label>
          <label>
            Contraseña
            <input id="password" name="password" placeholder="*************" type="password" />
            <Span
              htmlFor="password"
              required="This field is required."
              minlength={[8, "This field must be at least 8 characters."]} />
          </label>
        </Form>
      </main >
      <footer>
        <span>copy right © ® 2024</span>
      </footer>
    </div >
  )
}  