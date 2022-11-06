import React from 'react'
import { useRouter } from 'next/router'

import {
  Container,
  Tabs,
  Tab
} from 'react-bootstrap'

import TopNav from '../components/partials/navbar'
import Footer from '../components/partials/footer'

import Assignment from '../components/my_work/Assignment'
import AllProjects from '../components/my_work/AllProjects'
import Presentation from '../components/my_work/Presentation'
import MobileApp from '../components/my_work/MobileApp'

function Projects() {
  const router = useRouter() 
  const linkHandler = (link) => {
    router.push(link)
  }

  return (
    <section>
      <TopNav />

      <Container>
      <h1 className='my-5'>
          <a onClick={() => linkHandler('/skills')} className='pointer navigate'> ←</a> 
          <span className='title'> My Work </span>
        </h1>
        
        <Tabs defaultActiveKey="assignment" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="assignment" title="Class Assignment">
            <Assignment />
          </Tab>

          <Tab eventKey="project" title="Project">
            <AllProjects />
          </Tab>

          <Tab eventKey="presentation" title="Presentation/Prototype">
            <Presentation />
          </Tab>

          <Tab eventKey="mobile_app" title="Mobile App">
            <MobileApp />
          </Tab>
        </Tabs>
        <Footer />
      </Container>
    </section>
  )
}

export default Projects