import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import box1 from '../Images/box1.png'
import box2 from '../Images/box2.png'
import box4 from '../Images/box4.jpg'
import request from '../Images/request.png'
import come from '../Images/come.png'
import cash from '../Images/cash.png'

function Service() {
  return (
    <div className="service">
        <div className='s1'>
        <h1>Our Services</h1>
        <br />
        <br />
        <h3>TrashMaster is a Private Comapany which provide the service to the<br /> people in a best practise way.</h3>
        <h3>-:We Provide two Services:-</h3>
        <h4>1) Trash Collection Service (we will provide you the value according to your trash)</h4>
        <h4>2) Garbage Collection Service (here we will collect your daily unwanted garbage from your area & dispose it, this include monthly subscription)</h4>
        <h4>It is as easy as calling or dropping us a note and.. <br />boom! You get rid of your stuff just like that!</h4>
        <p>It help you to sell your trash material Or old stuff in proper maintained manner instead of just throwing it away.</p>
        <p>Our main aim is to make the Earth a better place to live.</p>
        <p>Being healthy is not just important but also we have to make our surrounding healthier which provide nurturing to everyone.</p>
        <div>
            <Container>
                <Row>
                    <Col md={5}>
                    <img src={box1} alt='Not found'/>
                    </Col>
                    <Col md={6}>
                    <img src={box2} alt='Not found'/>
                    </Col>
                </Row>
                </Container>
                <Container className='contain-box'> 
                <Row> 
                    <h2>We actually follow 3 basic Steps..</h2>
                </Row>
                <br />
                <Row>
                    <Col md={4}>
                    <h3>Your Request Or Propsal</h3>
                    <img src={request}  alt='Not found'/>
                    </Col>
                    <Col md={4}>
                    <h3>We Come to collect Your Scrap</h3>
                    <img src={come}  alt='Not found'/>
                    </Col>
                    <Col md={4}>
                    <h3>Get Paid of your trash</h3>
                    <img src={cash}  alt='Not found'/>
                    </Col>
                </Row> 
                <br />
                <Row>
                    <Col md={12}>
                    <img src={box4}  alt='Not found'/>
                    </Col>
                </Row>  
            </Container>
        </div>
        </div>
    
    </div>
  )
}

export default Service
