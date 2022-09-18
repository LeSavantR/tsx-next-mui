import { Headers } from '@c/Headers'
import { Navbars } from '@c/Navbars'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const navbarItems = [
    {
      url: '#',
      name: 'Facturas'
    },
    {
      url: '#',
      name: 'Cotizaciones'
    },
  ]
  return (
    <>
      <Headers />
      <Navbars
        title='LeSavant Invoices'
        user='LeSavant'
        btn='Logout'
        navbarItems={navbarItems}
      />
    </>
  )
}

export default Home
