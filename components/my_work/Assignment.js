import React from 'react'
import Image from 'next/image'

import { 
  Container,
  Col,
  Row 
} from 'react-bootstrap'

import Asus from '../../asset/projectImages/asus-clone.jpg'
import Ethereum from '../../asset/projectImages/ethereum-clone.jpg'
import Huawei from '../../asset/projectImages/huawei-clone.jpg'
import IntelGaming from '../../asset/projectImages/intelGaming-clone.jpg'
import Keychron from '../../asset/projectImages/keychron-clone.jpg'
import Polkadot from '../../asset/projectImages/polkadot-clone.jpg'
import Redmi from '../../asset/projectImages/redmi-clone.jpg'
import USDCoin from '../../asset/projectImages/usdc-clone.jpg'
import Quotes from '../../asset/projectImages/quotes-pwa.jpg'

function Assignment() {
  return (
    <Container>
      <Row>
        <Col md={4} sm={6} xs={12} className='my-2 hover-grow'>
          <a href='https://xm-huawei-clone-website.netlify.app/'>
            <Image src={Huawei}
            width={700} 
            height={500} /> 
          </a>
          <small>29 Jun 2021</small>
        </Col>

        <Col md={4} sm={6} xs={12} className='my-2 hover-grow'>
          <a href='https://xm-redmi-clone-website.netlify.app/'>
            <Image src={Redmi}
            width={700} 
            height={500} /> 
          </a>
          <small>29 Jun 2021</small>
        </Col>

        <Col md={4} sm={6} xs={12} className='my-2 hover-grow'>
          <a href='https://xm-keychron-clone-website.netlify.app/'>
            <Image src={Keychron}
            width={700} 
            height={500} /> 
          </a>
          <small>1 Jul 2021</small>
        </Col>

        <Col md={4} sm={6} xs={12} className='my-2 hover-grow'>
          <a href='https://xm-asus-clone-website.netlify.app/'>
            <Image src={Asus}
            width={700} 
            height={500} /> 
          </a>
          <small>5 Jul 2021</small>
        </Col>

        <Col md={4} sm={6} xs={12} className='my-2 hover-grow'>
          <a href='https://xm-ethereum-clone-website.netlify.app/'>
            <Image src={Ethereum}
            width={700} 
            height={500} /> 
          </a>
          <small>6 Jul 2021</small>
        </Col>
        
        <Col md={4} sm={6} xs={12} className='my-2 hover-grow'>
          <a href='https://xm-intel-gaming-clone-website.netlify.app/'>
            <Image src={IntelGaming}
            width={700} 
            height={500} /> 
          </a>
          <small>8 Jul 2021</small>
        </Col>

        <Col md={4} sm={6} xs={12} className='my-2 hover-grow'>
          <a href='https://xm-usd-coin-clone-website.netlify.app/'>
            <Image src={USDCoin}
            width={700} 
            height={500} /> 
          </a>
          <small>12 Jul 2021</small>
        </Col>
        
        <Col md={4} sm={6} xs={12} className='my-2 hover-grow'>
          <a href='https://xm-polkadot-clone-website.netlify.app/'>
            <Image src={Polkadot}
            width={700} 
            height={500} /> 
          </a>
          <small>13 Jul 2021</small>
        </Col>

        <Col md={4} sm={6} xs={12} className='my-2 hover-grow'>
          <a href='https://xm-inspirational-quotesxm.netlify.app/'>
            <Image src={Quotes}
            width={700} 
            height={500} /> 
          </a>
          <small>15 May 2022</small>
        </Col>
      </Row>
    </Container>
  )
}

export default Assignment