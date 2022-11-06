import React from 'react'
import { useRouter } from 'next/router'

import {
  Button
} from 'react-bootstrap'

import TopNav from '../components/partials/navbar'

function Home() {
  const router = useRouter()
  const linkHandler = (link) => {
    router.push(link)
  }

  return (
    <>
      <section className='front'>
        <TopNav />
        <h1 className='front'>
          Welcome to Xuimin's Portfolio
          <br/>
          <ul className='box-area'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <Button className='fullwidth' onClick={() => linkHandler('/about')}>Let's go!</Button>
        </h1>
      </section>
    </>
  )
}

export default Home