//
"use client"
import { useState, forwardRef } from 'react'
import useStore from 'str/store'
import { TFood } from 'md/food'
import 'st/menu.css'

const Menu = forwardRef(function Menu(props, ref) {
  const changeShowMenu = useStore((state) => state.changeShowMenu);
  const [showVerify, setShowVerify] = useState({ show: false });

  return (
    <div className="container-menu" >
      {showVerify.show &&
        <div className="varify" ref={(el) => ref.current[0].current = el} >
          <div>
            <span>
              Agregar <i><b>"{showVerify.obj.description}:
                ${showVerify.obj.price}.00"</b></i> a la factura?
            </span>
            <div>
              <button onClick={() => setShowVerify({ show: false })}>
                Agregar
              </button>
              <button onClick={() => setShowVerify({ show: false })}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      }
      <ul ref={(el) => ref.current[1].current = el} >
        <button className="clase-btn" onClick={() => changeShowMenu(false)}>
          x
        </button>
        {data.map((o: TFood, i: number) =>
          <li key={i} onClick={() => setShowVerify({ show: true, obj: o })}>
            <div>
              <span>
                Descripción:
              </span>
              <span>
                {o.description}
              </span>
            </div>
            <div>
              <span>
                Precio:
              </span>
              <span>
                ${o.price}.00
              </span>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
});

export default Menu;

const data = [
  {
    description: "Otro",
    price: 0
  },
  {
    description: "Jugo pequeño",
    price: 40
  },
  {
    description: "Jugo grande",
    price: 50
  },
  {
    description: "Jugo grande sin hielo",
    price: 60
  },
  {
    description: "Agua",
    price: 15
  },
  {
    description: "Marta india",
    price: 50
  },
  {
    description: "Marta lowenbrow",
    price: 100
  },
  {
    description: "Gatorade",
    price: 75
  },
  {
    description: "Sandwish",
    price: 70
  },
  {
    description: "Sandwish con pollo",
    price: 130
  },
  {
    description: "Grud Sandwish",
    price: 200
  },
  {
    description: "Grud Sandwish con pollo",
    price: 250
  },
  {
    description: "yaroa pequeña",
    price: 125
  },
  {
    description: "yaroa grande",
    price: 200
  },
  {
    description: "Pica pollo, 2 piesas",
    price: 150
  },
  {
    description: "Desayuno de 100",
    price: 100
  },
  {
    description: "Desayuno de 150",
    price: 150
  },
  {
    description: "Friton con salami",
    price: 100
  },
  {
    description: "Plato del dia pequeño con pollo",
    price: 125
  },
  {
    description: "Plato del dia normal con pollo",
    price: 150
  },
  {
    description: "Plato del dia grande con pollo",
    price: 200
  },
]