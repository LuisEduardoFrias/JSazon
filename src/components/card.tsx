//
"use client"
import useStore from "str/store";
import Cronos from 'hp/cronos'
import TFoodBill, { TFood } from 'md/food'
import AddSvg from 'svg/add_svg'
import 'st/card.css'

export default function Card({ data }: { data: TFoodBill }) {
  const changeShowMenu = useStore((state) => state.changeShowMenu);
  const cronos = new Cronos();

  return (
    <div className="container-card">
      {data.paid &&
        <div className="facade">
          <span>Pagada</span>
        </div>
      }
      <div className="header">
        <span>
          Fecha:
        </span>
        <span>
          {cronos.format(data.date)}
        </span>
        {cronos.isEqualDates(data.date) &&
          <button className="add-btn" onClick={() => changeShowMenu(true)}>
            <AddSvg />
          </button>
        }
      </div>
      <div className="body">
        {data.foods.map((food: TFood, index: number) =>
          <div key={index}>
            <div>
              <span>
                Descripción:
              </span>
              <span>
                {food.description}
              </span>
            </div>
            <div>
              <span>
                Precio:
              </span>
              <span>
                ${food.price}.00
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="footer">
        <span>
          Total:
        </span>
        <span>
          ${data.foods.map(o => o.price).reduce((ps, p) => ps + p)}.00
        </span>
      </div>
    </div>
  )
}