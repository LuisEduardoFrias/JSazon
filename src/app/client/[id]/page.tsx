'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import BillDtos from "dtc/bill_dtos"
import SGetBills from 'sv/bill'
import UserDto from 'dto/user_dtos'
import Loading from 'cp/loading'
import Card from 'cp/card'
import 'st/client.css'

export default function ClientDetailt() {
  const params = useParams();

  const [bills, setbills] = useState(null)

  useEffect(() => {
    (async () => {
      const { error, data } = await SGetBills(params.id)

      if (error) {
        alert("Home, error: " + JSON.stringify(error))
      }

      setbills(data)
    })();
  }, [])


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