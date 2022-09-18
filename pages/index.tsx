import { Headers } from '@c/Headers'
import { Navbars } from '@c/Navbars'
import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Headers />
      <Navbars />
    </>
  )
}

export default Home
