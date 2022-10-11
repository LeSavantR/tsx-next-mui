import { Headers } from '@c/Headers'
import { Main } from '@c/Main'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Headers />
      <Main />
    </>
  )
}

export default Home
