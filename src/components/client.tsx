//
"use client"
import { useEffect, useState } from 'react'
import BillDtos from "dtc/bill_dtos"
import SGetBills from 'sv/bill'
import UserDto from 'dto/user_dtos'
import Loading from 'cp/loading'
import Card from 'cp/card'
import 'st/client.css'

export default function Client({ session }: { session: UserDto }) {
  const [bills, setbills] = useState(null)

  useEffect(() => {
    if (session)
      (async () => {
        const { error, data } = await SGetBills(session.key)

        if (error) {
          alert("error homa: " + error)
        }

        setbills(data)
      })();
  }, [session])


  const total = !bills ? 0 :
    bills.length > 0 ?
      bills?.filter(o => o.paid === false)
        .map(o => o.totalInvoiceCost)
        .reduce((ps, p) => ps + p) :
      0;

  return (
    <div className="container-client">
      <span>
        Total: ${total ?? 0}.00
      </span>
      {
        bills ?
          bills.length > 0 ?
            [...bills]?.reverse().map((obj: BillDtos, index: number) =>
              <Card key={index} data={obj} rol={"client"} />) :
            <div style={{
              marginBlockStart: "15px", width: "100%",
              textAlign: "center", fontWeight: "700",
              fontSize: "28px"
            }}>
              <span>Sin facturas</span>
            </div>
          :
          <Loading />
      }
    </div>
  )
}