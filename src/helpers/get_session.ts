//
import { jwtVerify } from 'jose';
import { getCookie } from 'hp/local_cookie';
import UserDtos from 'dtos/user_dtos';

export default async function GetSession(): userInit {
  const jwt = getCookie('access_token');
  console.log("get_session: ", jwt)

  if (jwt === undefined) return null;

  try {
    const session = await jwtVerify(jwt, new TextEncoder().encode(process.env.SECRET_JWT_KEY))
    return session.payload.data.user;
  }
  catch (error) {
    console.error("token no valido. ", error)
    return null;
  }
}