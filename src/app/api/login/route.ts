import { serialize } from 'cookie'
import jwt from 'jsonwebtoken'
import SessionController from 'ct/session_controller.ts'

const SECRET_JWT_KEY = process.env.SECRET_JWT_KEY;

type LoginRequest = {
  user: string;
  password: string;
}

export async function POST(req: Request) {
  try {
    const { user, password }: LoginRequest = await req.json();

    const { error, data } = SessionController.login(user, password);

    if (!error) {
      const token = jwt.sign({ data }, SECRET_JWT_KEY, { expiresIn: '1h' });

      const cookie = serialize('access_token', token, {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60,
        path: '/',
      });

      const newHeaders = new Headers();
      newHeaders.set('Set-Cookie', cookie);

      return Response.json({ error: null, data: { ...data.user } }, {
        headers: newHeaders,
        status: 200,
      });

    } else {
      return Response.json({ message: 'Invalid credentials' }, {
        status: 401,
      });
    }

  } catch (error) {
    console.log("lerror: " + error);
    return Response.json({ message: 'Internal server error' }, {
      status: 500,
    });
  }
}
