import React from 'react'
import Image from 'next/image'

import {
  Container,
  Row,
  Col
} from 'react-bootstrap'

import LargestRect from '../../asset/projectImages/largestRectangleArea.jpg'
import DndAPI from '../../asset/projectImages/dndAPI.jpg'
import ProductivityAPI from '../../asset/projectImages/productivityAPI.jpg'
import MaterialDesignLayout from '../../asset/projectImages/materialDesignLayout.jpg'
import MyCarePre from '../../asset/projectImages/tracingApp.jpg'
import MyCare from '../../asset/projectImages/TracingApp.png'
import HealthPalPre from '../../asset/projectImages/healthPal.jpg'
import HealthPal from '../../asset/projectImages/HealthPal.png'

function Presentation() {
  return (
    <Container>
      <Row>
        <Col md={4} sm={6} xs={12} className='my-2 hover-grow'>
            <a href='https://docs.google.com/presentation/d/1vSSiyIky8suDdOVWnttZnSCf6EeKyQ9PU_ePOMKB8Us/edit'>
              <Image src={LargestRect}
              width={700} 
              height={500} /> 
            </a>
            <small>26 Nov 2021</small>
          </Col>

          <Col md={4} sm={6} xs={12} className='my-2 hover-grow'>
            <a href='https://docs.google.com/presentation/d/12e2H7CkIH_ra0v193vJiFhhONRL3n7rceSPGrI6Tquw/edit'>
              <Image src={DndAPI}
              width={700} 
              height={500} /> 
            </a>
            <small>21 Dec 2021</small>
          </Col>

          <Col md={4} sm={6} xs={12} className='my-2 hover-grow'>
            <a href='https://docs.google.com/presentation/d/1XuYT_XIrA1zWbWtbrl4qVP6x9bYB0bCUK7g838Q8nFM/edit'>
              <Image src={ProductivityAPI}
              width={700} 
              height={500} /> 
            </a>
            <small>29 Dec 2021</small>
          </Col>

          <Col md={4} sm={6} xs={12} className='my-2 hover-grow'>
            <a href='https://docs.google.com/presentation/d/1V8CFj_ukkRWludXRUieKo-sCS52PlOTs2pFLS9d3kDI/edit'>
              <Image src={MaterialDesignLayout}
              width={700} 
              height={500} /> 
            </a>
            <small>30 Mar 2022</small>
          </Col>

          <Col md={4} sm={6} xs={12} className='my-2 hover-grow'>
            <a href='https://docs.google.com/presentation/d/12X1WXMQ-OSVi5H2KzkoZYfmc5Hri_pejy6TFHImrgOU/edit'>
              <Image src={MyCarePre}
              width={700} 
              height={500} /> 
            </a>
            <small>4 May 2022</small>
          </Col>

          <Col md={4} sm={6} xs={12} className='my-2 hover-grow'>
            <a href='https://www.figma.com/file/MnEnNwQs4mqpre9FlB8pQR/Tracing-App'>
              <Image src={MyCare}
              width={700} 
              height={500} /> 
            </a>
            <small>4 May 2022</small>
          </Col>

          <Col md={4} sm={6} xs={12} className='my-2 hover-grow'>
            <a href='https://docs.google.com/presentation/d/1OETA_FCWuDxiG3iCJx0Q9fI_rFOvBtpddmZr8B2SZqs/edit'>
              <Image src={HealthPalPre}
              width={700} 
              height={500} /> 
            </a>
            <small>19 May 2022</small>
          </Col>

          <Col md={4} sm={6} xs={12} className='my-2 hover-grow'>
            <a href='https://www.figma.com/file/PbSAms8iyIkhTVobZQsqon/HealthPal'>
              <Image src={HealthPal}
              width={700} 
              height={500} /> 
            </a>
            <small>19 May 2022</small>
          </Col>
      </Row>
    </Container>
  )
}

export default Presentation