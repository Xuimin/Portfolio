import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import {
  Card,
  Container,
  Row, 
  Col
} from 'react-bootstrap'

import TopNav from '../components/partials/navbar'
import Footer from '../components/partials/footer'

import Profile from '../asset/profile.jpg'

function About() {
  const router = useRouter() 
  const linkHandler = (link) => {
    router.push(link)
  }

  return (
    <section>
      <TopNav />

      <Container>
        <h1 className='my-5'>
          <a onClick={() => linkHandler('/')} className='pointer navigate'> ←</a> 
          <span className='title'> About Me! </span>
          <a onClick={() => linkHandler('/skills')} className='pointer navigate'>→ </a>
        </h1>

        <Row className='mb-5 justify-content-end'>
          <Col sm={3}>
            <Image src={Profile} 
              width={200} 
              height={250}
              alt="Profile" /> <br />
              
            <a href='https://github.com/Xuimin' className='pointer navigate'>
               <i className='bi-github'> </i>Xuimin
            </a> <br />
            <i className='bi-phone'> </i> 
            <span className='pointer navigate'>+60123456789</span> <br /> 
            <i className='bi-instagram'> </i> 
            <span className='pointer navigate'>Xuimin Chan</span> <br />                
            <i className='bi-envelope'> </i> 
            <span className='pointer navigate'>xuimin.kt27@gmail.com / xuimin21c@forwardschool.edu.com</span> <br />      
          </Col>

          <Col sm={7}>
            <div className="d-flex flex-column justify-content-center my-auto">
              <h4 className='subtitle'>Education <i className="bi-book icon"></i></h4>
              <ul>
                <li className='no-list'> 
                  <span>EasyWork</span> <br/>
                  <span>Year Attended: Nov 2021 - Present</span> <br/>
                  <span>Position: Developer Trainee/Intership Program</span>
                </li> <br/>
                    
                <li className='no-list'> 
                  <span>Forward School, Georgetown</span> <br/>
                  <span>Year Attended: June 2021 - Present</span> <br/>
                  <span>Qualification: NitroDegree in Applied Software Engineering</span>
                </li> <br/>
                    
                <li className='no-list'> 
                  <span>SMJK Phor Tay</span> <br/>
                  <span>Year Attended: 2016 - 2020</span> <br/>
                  <span>Qualification: Sijil Pelajaran Malaysia (SPM)</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        
        <div className='quotes'>
          <i className='bi-quote'></i>
            To me, knowing isn&apos;t enough; we need to put what we&apos;ve learned into practice.
          <i className='bi-quote'></i>
        </div> <br/> 

        <Row>
          
        </Row>

        <p>
          Hi, my name is Xui Min. I&apos;m born and raised in Penang. I&apos;m a student studying Applied Software Engineering in <a href="https://www.forwardschool.co/" className='pointer link'>Forward School</a> and also a member in the <a href="https://www.forwardschool.co/blog-posts/meet-the-pioneers-the-elite-8" className='pointer link'>Elite8</a>.
        </p>

        <p>
          I was not involved in anything coding-related during my high school years. However, after understanding more about it, I became intrigued and wanted to learn more. 
          <small>(View my full story <a href="https://www.forwardschool.co/stories/chan-xui-min" className='pointer link'>here</a>)</small>
        </p>

        <p>
          Now that I completed my one year plus in Forward School, I have gain a lot of knowledge as well as did some projects. <a onClick={() => linkHandler('/projects')} className='pointer link'>(Here are some of my projects).</a> On top of that, I&apos;ve learn different <a onClick={() => linkHandler('/skills')} className='pointer link'>programming languages, framework/library and so on.</a> Despite the fact that I had only been learning for about 7 months, I have thoroughly enjoyed every second of it and am grateful for the decision I made.
        </p>

        <p>
          Currently, I am having my internship with Easywork as a QA (Quality Assurance) Engineer. Before that, I was working with Exabytes on a CSR project using WordPress (Elementor). This project is basically migrating a website&apos;s content into WordPress.
        </p>
      </Container>
      <Footer />
    </section>
  )
}

export default About