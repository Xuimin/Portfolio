import React from 'react'
import Image from 'next/image'

import { 
  Container, 
  Row, 
  Col
} from 'react-bootstrap'

import Portfolio1 from '../../asset/projectImages/portfolio1.jpg'
import Japan from '../../asset/projectImages/japan.jpg'
import FoodOrdering from '../../asset/projectImages/foodOrdering.jpg'
import Productivity from '../../asset/projectImages/productivity.jpg'
import BooksCorner from '../../asset/projectImages/booksCorner.jpg'

function AllProjects() {
  return (
    <Container>
      <Row>
        <Col md={4} sm={6} xs={12} className='my-2 hover-grow'>
          <a href='https://clever-borg-95242d.netlify.app/'>
            <Image src={Portfolio1}
            width={700} 
            height={500}
            alt="My First Portfolio" /> 
          </a>
          <small>19 Jul 2021</small>
        </Col>

        <Col md={4} sm={6} xs={12} className='my-2 hover-grow'>
          <a href='https://wonderful-jones-2a7d5a.netlify.app/'>
            <Image src={Japan}
            width={700} 
            height={500}
            alt="Japan" /> 
          </a>
          <small>19 Jul 2021</small>
        </Col>

        <Col md={4} sm={6} xs={12} className='my-2 hover-grow'>
          <a href='http://127.0.0.1:3000/'>
            <Image src={FoodOrdering}
            width={700} 
            height={500}
            alt="FoodOrdering" /> 
          </a>
          <small>23 Sep 2021</small>
        </Col>

        <Col md={4} sm={6} xs={12} className='my-2 hover-grow'>
          <a href='https://xuimin-productivity-app.netlify.app/'>
            <Image src={Productivity}
            width={700} 
            height={500}
            alt="Productivity App" /> 
          </a>
          <small>29 Dec 2021</small>
        </Col>
        
        <Col md={4} sm={6} xs={12} className='my-2 hover-grow'>
          <a href='https://books-corner-client.vercel.app/'>
            <Image src={BooksCorner}
            width={700} 
            height={500}
            alt="Books Corner App" /> 
          </a>
          <small>24 Jan 2022</small>
        </Col>
      </Row>
    </Container>
  )
}

export default AllProjects