//
"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import useStore from 'str/store'
import useOutsideClick from 'hk/use_outside_click'
import BillDtos from "dtc/bill_dtos"
import FoodDtos from "dtc/food_dtos"
import SGetBills from 'sv/bill'
import Loading from 'cp/loading'
import Client from 'cp/client'
import Admin from 'cp/admin'
import Card from 'cp/card'
import Menu from 'cp/menu'
import 'st/home.css'

export default function Home() {
  const [showMenu, setshowMenu] = useState(false)
  const { session } = useStore((state) => ({ session: state.session }));

  const menuRef = useOutsideClick(() => setshowMenu(false));

  return (
    <div className="container-home">
      <header>
        <Image priority src="/prompt.jpg" width="300" height="300" alt="a" />
        <span className="user-name">
          {session?.userName}
        </span>
      </header>
      {
        showMenu && <aside ref={menuRef} >
          menu
        </aside>
      }
      <main>
        {
          session &&
            session?.rol === "client" ?
            <Client session={session} /> :
            <Admin session={session} />
        }
      </main>
    </div>
  )
}