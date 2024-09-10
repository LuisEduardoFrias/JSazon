import { cookies } from 'next/headers'
import BillController from 'ct/bill_controller'

export function GET(req: Request) {

  const cookieStore = cookies()
  const token = cookieStore.get('token')
  
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  const { error, data } = BillController.get(id)

  return Response.json({ error, data }, {
    status: 200
  })
}