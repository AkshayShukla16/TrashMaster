import React, {useRef} from 'react'
import contact from '../Images/contact.png'
import { Container,Row, Col } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
function Connect() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ayqvs52', 'template_hvk5xof', form.current, 'MKkeNeqkZH8eFuROh')
        .then((result) => {
            alert("Message Sent Successfully!!")
        }, (error) => {
            alert('Something went wrong!')  
        });
    };
  return (
    <div className='connect'>
 
        <Container className='contain1'>
            <Row>
                <Col md={5}>
                <h1 style={{color: 'rgb(229, 255, 0)'}}> ✆ Contact Us!</h1> 
                </Col>
                <Col md={7}>
                <h2 style={{color: 'white'}}>Get In Touch.</h2>
                <h3 style={{color: 'cyan'}}>Mobile: +91 9876543210</h3>
                <h3 style={{color: 'rgb(235, 71, 107)'}}>Toll Free: 18001456704</h3>
                </Col>   
            </Row>
            <br />
            <Row>
                <Col md={5}>
                <form ref={form} onSubmit={sendEmail}>
                        <Row>
                          <Col sm={12} className='px-1'>
                          <input type='text' placeholder='Name' name='name' required />
                          </Col>
                          </Row>
                          <Row>
                          <Col sm={12} className='px-1'>
                          <input type='email' name='email' placeholder='Email Id'required />
                          </Col>
                          </Row>
                          <Row>
                          <Col sm={12}>
                          <textarea name='message' placeholder='Contains Phone No, Address, Your Message' required />
                          </Col>
                          </Row>
                          <Row>
                            <Col sm={12}>
                            <button type='submit'>Send</button>
                            </Col>
                          </Row>
                      </form>
                </Col>
                <Col md={6}>
                    <img src={contact} alt='Not Found' style={{height:"90%", width: "70%"}}/>
                </Col>
            </Row>
        </Container>
        
     </div>
  )
}

export default Connect
