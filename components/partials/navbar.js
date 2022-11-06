import React, { useState } from 'react'
import { useRouter } from 'next/router'

import {
  Offcanvas,
  Nav,
  Button
} from 'react-bootstrap'

function TopNav() {
  const router = useRouter()
  const linkHandler = (link) => {
    router.push(link)
    setShow(false)
  }

  const [ show, setShow ] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>
        <i className='bi-chevron-double-right'></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contents</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav.Link onClick={() => linkHandler('/')}><i className='bi-house mr-2'> </i>Home</Nav.Link>
        <Nav.Link onClick={() => linkHandler('/about')}><i className='bi-person mr-2'> </i>About</Nav.Link>
        <Nav.Link onClick={() => linkHandler('/skills')}><i className='bi-book mr-2'> </i>Skills</Nav.Link>
        <Nav.Link onClick={() => linkHandler('/projects')}><i className='bi-award mr-2'> </i>Projects</Nav.Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default TopNav