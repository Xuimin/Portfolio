import React from 'react'
import Image from 'next/image'

import {
  Container,
  Row,
  Col
} from 'react-bootstrap'

import BlackNote from '../../asset/projectImages/blacknote-android.jpg'
import PrimeGenerator from '../../asset/projectImages/primegenerator-android.jpg'
import ContactList from '../../asset/projectImages/contactlist-android.jpg'
import MyCare from '../../asset/projectImages/mycare-android.jpg'

function MobileApp() {
    return (
      <Container>
        <Row>
          <Col md={3} sm={6} xs={12} className='my-2 hover-grow'>
              <a href='https://github.com/Xuimin/Android-BlackNoteClone'>
                <Image src={BlackNote}
                width={300} 
                height={600}
                alt="BlackNote" /> 
              </a>
              <small>15 Jun 2022</small>
            </Col>
  
            <Col md={3} sm={6} xs={12} className='my-2 hover-grow'>
              <a href='https://github.com/Xuimin/Android-PrimeNumberGenerator'>
                <Image src={PrimeGenerator}
                width={300} 
                height={600}
                alt="Prime Number Generator" /> 
              </a>
              <small>2 Sep 2022</small>
            </Col>

            <Col md={3} sm={6} xs={12} className='my-2 hover-grow'>
              <a href='https://github.com/Xuimin/Android-MyCare_retrofit'>
                <Image src={MyCare}
                width={300} 
                height={600}
                alt="MyCare" /> 
              </a>
              <small>12 Sep 2022</small>
            </Col>
            
            <Col md={3} sm={6} xs={12} className='my-2 hover-grow'>
              <a href='https://github.com/Xuimin/Android-ContactList'>
                <Image src={ContactList}
                width={300} 
                height={600}
                alt="Contact List" /> 
              </a>
              <small>28 Sep 2022</small>
            </Col>
        </Row>
      </Container>
    )
  }
  
  export default MobileApp