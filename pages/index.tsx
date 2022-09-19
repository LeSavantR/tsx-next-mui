import { Headers } from '@c/Headers'
import { Main } from '@c/Main'
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
      <Main />
    </>
  )
}

export default Home
