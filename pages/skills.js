import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { 
  Container, 
  Row,
  Col,
  Card
} from 'react-bootstrap'

import TopNav from '../components/partials/navbar'
import Footer from '../components/partials/footer'

// Languages
import HTML from '../asset/skillsImages/HTML-logo.png'
import CSS from '../asset/skillsImages/CSS-logo.png'
import JS from '../asset/skillsImages/JavaScript-logo.png'
import PHP from '../asset/skillsImages/PHP-logo.png'
import Node from '../asset/skillsImages/NodeJs-logo.jpg'
import Reactjs from '../asset/skillsImages/ReactJs-logo.png'
import Nextjs from '../asset/skillsImages/NextJs-logo.jpg'
import Java from '../asset/skillsImages/Java-logo.png'
import Kotlin from '../asset/skillsImages/Kotlin-logo.jpg'
import Python from '../asset/skillsImages/Python-logo.png'
import MySQL from '../asset/skillsImages/Mysql-logo.png'

// Tools
import Github from '../asset/skillsImages/Github-logo.png'
import VSC from '../asset/skillsImages/Vscode-logo.png'
import Netlify from '../asset/skillsImages/Netlify-logo.png'
import Vercel from '../asset/skillsImages/Vercel-logo.png'
import Docker from '../asset/skillsImages/Docker-logo.png'
import Scrimba from '../asset/skillsImages/Scrimba-logo.png'
import Heroku from '../asset/skillsImages/Heroku-logo.png'
import Sass from '../asset/skillsImages/Sass-logo.jpg'
import AndroidStudio from '../asset/skillsImages/AndroidStudio-logo.jpg'
import IntelliJ from '../asset/skillsImages/IntelliJ-logo.png'
import PyCharm from '../asset/skillsImages/Pycharm-logo.png'
import Figma from '../asset/skillsImages/Figma-logo.png'
import MongoDB from '../asset/skillsImages/MongoDB-logo.jpg'
import Postman from '../asset/skillsImages/Postman-logo.png'
import Newman from '../asset/skillsImages/Newman-logo.png'

// Frameworks
import Bootstrap from '../asset/skillsImages/Bootstrap-logo.png'
import Materialize from '../asset/skillsImages/Materialize-logo.png'
import ReactBootstrap from '../asset/skillsImages/React-bootstrap-logo.png'
import ReactMUI from '../asset/skillsImages/React-mui-logo.png'
import Tailwindcss from '../asset/skillsImages/Tailwindcss-logo.png'
import Laravel from '../asset/skillsImages/Laravel-logo.jpg'
import WordPress from '../asset/skillsImages/Wordpress-logo.png'
import Zap from '../asset/skillsImages/Zap-logo.jpg'

function Skills() {
  const router = useRouter() 
  const linkHandler = (link) => {
    router.push(link)
  }

  return (
    <section>
      <TopNav />

      <Container>
      <h1 className='my-5'>
        <a onClick={() => linkHandler('/about')} className='pointer navigate'> ←</a> 
        <span className='title'> My Skills </span>
        <a onClick={() => linkHandler('/projects')} className='pointer navigate'>→ </a>
      </h1>

      <Row className="justify-content-center mt-5">
        <Col md={3} className="text-center mt-5">
          <div>
            <h5>Languages <i className="bi-code-slash icon"></i></h5>
            <span>HTML<i className="bi-check2 icon"></i> </span>
            <span>CSS<i className="bi-check2 icon"></i> </span> <br />
            <span>JavaScript<i className="bi-check2 icon"></i> </span> 
            <span>PHP<i className="bi-check2 icon"></i> </span> <br />
            <span>NodeJS<i className="bi-check2 icon"></i> </span> 
            <span>ReactJS<i className="bi-check2 icon"></i> </span> <br />
            <span>NextJS<i className="bi-check2 icon"></i> </span> 
            <span>Java<i className="bi-check2 icon"></i> </span> <br />
            <span>Kotlin<i className="bi-check2 icon"></i> </span> 
            <span>Python<i className="bi-check2 icon"></i> </span> <br />
            <span>MYSQL<i className="bi-check2 icon"></i> </span> 
          </div>

          <br /> <br /> <br />

          <div>
            <h5>Frameworks/Others <i className="bi-collection-fill icon"></i></h5>
            <span>Bootstrap<i className="bi-check2 icon"></i> </span>
            <span>Materialize<i className="bi-check2 icon"></i> </span> <br />
            <span>React MUI<i className="bi-check2 icon"></i> </span> 
            <span>React Bootstrap<i className="bi-check2 icon"></i> </span> <br />
            <span>TailwindCSS<i className="bi-check2 icon"></i> </span>
            <span>Laravel<i className="bi-check2 icon"></i> </span> <br />
            <span>WordPress<i className="bi-check2 icon"></i> </span>
            <span>OWASP ZAP<i className="bi-check2 icon"></i> </span> <br />
          </div>

          <br /> <br /> <br />

          <div>
            <h5>Tools <i className="bi-tools icon"></i></h5>
            <span>Github<i className="bi-check2 icon"></i> </span>
            <span>VS Code<i className="bi-check2 icon"></i> </span> <br />
            <span>Netlify<i className="bi-check2 icon"></i> </span> 
            <span>Vercel<i className="bi-check2 icon"></i> </span> <br />
            <span>Scrimba<i className="bi-check2 icon"></i> </span> 
            <span>Heroku<i className="bi-check2 icon"></i> </span> <br />
            <span>Sass<i className="bi-check2 icon"></i> </span> 
            <span>Android Studio<i className="bi-check2 icon"></i> </span> <br />
            <span>IntelliJ<i className="bi-check2 icon"></i> </span> 
            <span>PyCharm<i className="bi-check2 icon"></i> </span> <br />
            <span>Figma<i className="bi-check2 icon"></i> </span> 
            <span>MongoDB<i className="bi-check2 icon"></i> </span> <br />
            <span>Postman<i className="bi-check2 icon"></i> </span> 
            <span>Newman<i className="bi-check2 icon"></i> </span> <br />
            <span>Docker<i className="bi-check icon"></i> </span> 
          </div>
        </Col>

        <Col md={4} className="justify-content-center">
          <div className="text-center mt-4 mb-4">
            <Image src={HTML} className="img-fluid radius" height={80} width={80} alt="HTML" />
            <Image src={CSS} className="img-fluid radius" height={80} width={80} alt="CSS" />
            <Image src={JS} className="img-fluid radius" height={80} width={80} alt="JS" />
            <Image src={PHP} className="img-fluid radius" height={80} width={80} alt="PHP" />
            <Image src={Node} className="img-fluid radius" height={80} width={80} alt="NodeJS" />
            <Image src={Reactjs} className="img-fluid radius" height={80} width={80} alt="ReactJS" />
            <Image src={Nextjs} className="img-fluid radius" height={80} width={80} alt="NextJS" />
            <Image src={Java} className="img-fluid radius" height={80} width={80} alt="Java" />
            <Image src={Kotlin} className="img-fluid radius" height={80} width={80} alt="Kotlin" />
            <Image src={Python} className="img-fluid radius" height={80} width={80} alt="Python" />
            <Image src={MySQL} className="img-fluid radius" height={80} width={80} alt="MySQL" />
          </div>

          <hr />

          <div className="text-center mt-4 mb-4">
            <Image src={Bootstrap} className="img-fluid radius" height={80} width={80} alt="Bootstrap" />
            <Image src={Materialize} className="img-fluid radius" height={80} width={80} alt="Materialiaze" />
            <Image src={ReactMUI} className="img-fluid radius" height={80} width={80} alt="React MUI" />
            <Image src={ReactBootstrap} className="img-fluid radius" height={80} width={80} alt="React Bootstrap" />
            <Image src={Tailwindcss} className="img-fluid radius" height={80} width={80} alt="Tailwind CSS" />
            <Image src={Laravel} className="img-fluid radius" height={80} width={80} alt="Laravel" />
            <Image src={WordPress} className="img-fluid radius" height={80} width={80} alt="WordPress" />
            <Image src={Zap} className="img-fluid radius" height={80} width={80} alt="ZAP" /> 
          </div>

          <hr />

          <div className="text-center mt-4 mb-4">
            <Image src={Github} className="img-fluid radius" height={80} width={80} alt="GitHub" /> 
            <Image src={VSC} className="img-fluid radius" height={80} width={80} alt="VS Code" /> 
            <Image src={Netlify} className="img-fluid radius" height={80} width={80} alt="Netlify" /> 
            <Image src={Vercel} className="img-fluid radius" height={80} width={80} alt="Vercel" /> 
            <Image src={Scrimba} className="img-fluid radius" height={80} width={80} alt="Scrimba" /> 
            <Image src={Heroku} className="img-fluid radius" height={80} width={80} alt="Heroku" /> 
            <Image src={Sass} className="img-fluid radius" height={80} width={80} alt="Sass" /> 
            <Image src={AndroidStudio} className="img-fluid radius" height={80} width={80} alt="Android Studio" /> 
            <Image src={IntelliJ} className="img-fluid radius" height={80} width={80} alt="IntelliJ IDEA" /> 
            <Image src={PyCharm} className="img-fluid radius" height={80} width={80} alt="PyCharm" /> 
            <Image src={Figma} className="img-fluid radius" height={80} width={80} alt="Figma" /> 
            <Image src={MongoDB} className="img-fluid radius" height={80} width={80} alt="MongoDB" /> 
            <Image src={Postman} className="img-fluid radius" height={80} width={80} alt="Postman" /> 
            <Image src={Newman} className="img-fluid radius" height={80} width={80} alt="Newman" /> 
            <Image src={Docker} className="img-fluid radius" height={80} width={80} alt="Docker" /> 
          </div>
        </Col>
      </Row>
      <Footer />
      </Container>
    </section>
  )
}

export default Skills