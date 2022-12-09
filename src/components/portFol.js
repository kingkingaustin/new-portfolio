import React from 'react'
import shoppingcart from '../assets/shoppingcart.png'
import simpleCalc from '../assets/simpleCalc.png'
import muiNavBar from '../assets/muiNavBar.png'
import cssWeatherApp from '../assets/cssWeatherApp.png'

const PortFol = () => {


  const portfols = [
    {
      id: 1,
      title: 'ShoppingApp',
      src: shoppingcart,
      style: 'text-center text-xl',
      href: 'https://github.com/kingkingaustin/ShoppingCart',
      href2: 'https://www.linkedin.com/posts/king-augustin-1422a1249_a-shopping-web-page-created-with-contextapi-activity-7005445665568825344-9iVO?utm_source=share&utm_medium=member_desktop'
    },
    {
      id: 2,
      title: 'calculatorApp',
      style: 'text-center text-xl ',
      src: simpleCalc,
      href: 'https://github.com/kingkingaustin/SimpleCalculator',
      href2: 'https://www.linkedin.com/posts/king-augustin-1422a1249_a-simple-calculator-created-using-react-and-activity-7005450756145242112-6rX2?utm_source=share&utm_medium=member_desktop'
    },
    {
      id: 3,
      title: 'navbarMui',
      style: 'text-center text-xl',
      src: muiNavBar,
      href: 'https://github.com/kingkingaustin/MUINavbar',
      href2: 'https://www.linkedin.com/posts/king-augustin-1422a1249_materialui-reactjs-frontenddeveloper-activity-7005456529789251584-m8pK?utm_source=share&utm_medium=member_desktop'
    },
    {
      id: 4,
      title: 'cssWeatherApp',
      style: 'text-center text-xl',
      src: cssWeatherApp,
      href: 'https://github.com/kingkingaustin/weather_app',
      href2: 'https://www.linkedin.com/posts/king-augustin-1422a1249_react-css-openweatherapi-activity-7006576791293222912-090Z?utm_source=share&utm_medium=member_desktop'
    }

  ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>PortFolio</p>
          <p className='py-6 text-xl'> check out my work here </p>
        </div>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            portfols.map(({ id, title, src,style, href, href2 }) => (
              <div key={id} className='shadow-lg shadow-gray-600 rounded-lg'>
                <img src={src} alt='' className='rounded-md duration-200 hover:scale-105' />
                <p className={`mt-0 text-white items-center duration-200 hover:scale-105 ${style}`}> {title} </p>
                <div className='flex items-center justify-center'>
                  <a href={href2}>
                    <button className='mt-0 text-xl w-1/2 px-6 py-3 m-4 duation-200 hover:scale-105'>Demo</button>
                  </a>
                  <a href={href}>
                    <button className='mt-0 w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                  </a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PortFol