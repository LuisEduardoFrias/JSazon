//
"use client"
import Image from 'next/image'
import useStore from 'str/store'
import useOutsideClick from 'hk/use_outside_click'
import TFoodBill, { TFood } from "md/food"
import Card from 'cp/card'
import Menu from 'cp/menu'
import 'st/home.css'

export default function Home() {
  const { showMenu, changeShowMenu } = useStore((state) => ({ showMenu: state.showMenu, changeShowMenu: state.changeShowMenu }));
  const menuRef = useOutsideClick(() => changeShowMenu(false), 2);
  const userName = "yirbel"
  const data: TFoodBill[] = [
    {
      date: "2024/7/13",
      foods: [
        {
          description: "Agua",
          price: 15
        },
        {
          description: "regresco cola real",
          price: 30
        },
        {
          description: "regresco coca cola",
          price: 40
        },
      ],
      paid: true,
    },
    {
      date: "2024/7/14",
      foods: [
        {
          description: "marta india",
          price: 50
        },
        {
          description: "marta lowenbroun",
          price: 100
        },
        {
          description: "Jugo grande",
          price: 50
        }
      ],
      paid: true,
    },
    {
      date: "2024/7/15",
      foods: [
        {
          description: "Jugo pequeño",
          price: 40
        },
        {
          description: "Mini comida con pollo",
          price: 125
        },
        {
          description: "Plato del dia con pollo",
          price: 150
        },
        {
          description: "Plato del dia con cerdo",
          price: 175
        }
      ],
      paid: true,
    },
    {
      date: "2024/7/16",
      foods: [
        {
          description: "Plato del dia con vacalao",
          price: 175
        },
        {
          description: "Plato del dia con arenque",
          price: 175
        },
        {
          description: "Plato del dia con bisted de res",
          price: 175
        },
        {
          description: "Servicio con chuleta",
          price: 200
        }
      ],
      paid: true,
    },
    {
      date: "2024/7/17",
      foods: [
        {
          description: "Servicio de sancocho",
          price: 200
        },
        {
          description: "Servicio con pollo horneado",
          price: 200
        },
        {
          description: "Sandwish con pollo",
          price: 130
        },
        {
          description: "Sandwish",
          price: 70
        }
      ],
      paid: false,
    },
    {
      date: "2024/7/18",
      foods: [
        {
          description: "Clud sandwish",
          price: 70
        },
        {
          description: "Clud sandwish",
          price: 70
        },
      ],
      paid: false,
    },
    {
      date: "2024/7/19",
      foods: [
        {
          description: "Sandwish",
          price: 70
        },
        {
          description: "Plato del dia",
          price: 150
        },
      ],
      paid: false,
    }
  ]

  const total = data.filter(o => o.paid === false)
    .map(o => o.foods)
    .map(o => o.map(e => e.price))
    .map(o => o.reduce((ps, p) => ps + p))
    .reduce((ps, p) => ps + p);

  return (
    <div className="container-home">
      {showMenu && <Menu ref={menuRef} />}
      <header>
        <Image priority src="/prompt.jpg" width="300" height="300" alt="a" />
        <span className="user-name">
          {userName.substr(0, 1).toUpperCase() + userName.substr(1)}
        </span>
        <span>
          Tt: ${total}.00
        </span>
      </header>
      <main>
        {
          data.reverse().map((obj: TFoodBill, index: number) => <Card key={index} data={obj} />)
        }
      </main>
    </div>
  )
}