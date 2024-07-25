//
"use client"

import { useEffect, useState } from 'react'
import useStore from 'str/store'
import useOutsideClick from 'hk/use_outside_click'
import ClientDtos from "dto/client_dtos"
import SGetClients from 'sv/client'
import Loading from 'cp/loading'
import Card from 'cp/card'
import Menu from 'cp/menu'
import 'st/home.css'

export default function Admin() {
  const [clients, setClients] = useState(null)
  const { showMenu, changeShowMenu, session } = useStore((state) => ({
    showMenu: state.showMenu,
    changeShowMenu: state.changeShowMenu,
    session: state.session
  }));

  const menuRef = useOutsideClick(() => changeShowMenu(false), 2);

  useEffect(() => {
    if (session)
      (async () => {
        const { error, data } = await SGetClients();

        if (error) {
          alert("error homa: " + error)
        }

        setClients(data)

      })();
  }, [session])

  return (
    <div className="container-home">
      {showMenu && <Menu ref={menuRef} />}
      {
        clients ?
          [...clients]?.reverse().map((obj: ClientDtos, index: number) =>
            <ClientCard key={index} data={obj} />) :
          <Loading />
      }
    </div>
  )
}

function ClientCard({ data }: { data: ClientDtos }) {
  return (
    <div>
      <span>
        Cliente:
      </span>

      <span>
        {data.name}
      </span>

      <span>
        Deuda:
      </span>
      <span>
        {data.totalDebt}
      </span>
    </div>
  )
}