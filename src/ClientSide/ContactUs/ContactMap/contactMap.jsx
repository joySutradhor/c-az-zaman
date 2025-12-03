import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect } from 'react'

const ContactMap = () => {
  useEffect(() => {
    const map = L.map('map', {
      attributionControl: false
    }).setView([23.761562, 90.365007], 14) 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)

    L.marker([23.761562, 90.365007]) 
      .addTo(map)
      .bindPopup('Shyamoli Square (Level-8), Mirpur Road, Dhaka, Bangladesh')
      .openPopup()

    return () => {
      map.remove()
    }
  }, [])

  return (
    <div className='sectionGap w-full overflow-hidden'>
      <div
        id='map'
        className='w-full h-auto lg:h-[435px] 2xl:h-[700px] aspect-video rounded-lg md:rounded-2xl'
      ></div>
    </div>
  )
}

export default ContactMap
