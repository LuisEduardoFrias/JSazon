import { cookies } from 'next/headers'
import AdminController from 'ct/admin_controller'

export function GET(res: Request) {

  const cookieStore = cookies()
  const token = cookieStore.get('token')
  console.log(token)

  const { error, data } = BillController.get(id)

  return Response.json({ error, data }, {
    status: 200
  })
  return Response.json({ error: null, data: "Okey" }, { status: 200 })
}