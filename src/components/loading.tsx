//
import RestaurantSvg from 'svg/restaurant_svg'
import 'st/loading.css'

export default function Loading({ id }: { id: string }) {
  return (
            <div className="container-loading">
    <div className="loading">
      <div>
      </div>
      <RestaurantSvg id={id}/>
    </div>
    </div>
  )
}