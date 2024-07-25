//
import Image from 'next/image';
import Load from 'cp/loading'

export default function Loading() {
  const Style = {
    width: '100%',
    height: '100%',
    display: 'grid',
    placeContent: 'center',
  }

  const StyleLoad = {
    position:'absolute',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)'
  }

  return (
    <div style={Style}>
      <Image src="/logo.jpg" priority width="300" height="300" alt="a" />
    <div style={StyleLoad}>
      <Load />
    </div>
    </div>
  )
}