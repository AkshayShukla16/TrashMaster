import React,{useState} from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import img1 from '../Images/img1.png'
import img2 from '../Images/img2.PNG'
import pic3 from '../Images/pic3.jpg'
import img4 from '../Images/img4.jpeg'
import man1 from '../Images/man1.png'
import Trash1 from '../Images/Trash1.PNG'
import Trash2 from '../Images/Trash2.PNG'
import Trash3 from '../Images/Trash3.PNG'
import Trash4 from '../Images/Trash4.jpg'
import Trash5 from '../Images/Trash5.PNG'
import pledge from '../Images/pledge.png'


function Homepage() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }
  return (
    <div className='homepage'>
      <Carousel activeIndex={index} onSelect={handleSelect} >

      <Carousel.Item className='carousal-item'>
         <img src={img1} alt="First slide"/>
      </Carousel.Item>

      <Carousel.Item className='carousal-item'>
        <img src={img2} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item className='carousal-item'>
        <img src={pic3} alt="Third slide"/>
      </Carousel.Item>

      <Carousel.Item className='carousal-item'>
        <img src={img4}  alt="Third slide"/>
      </Carousel.Item>
    </Carousel>

   <div className='below-step'>
    <div className='text-design'>
      <h2>🎇 Congratulations! We're so very proud of you! 🎇</h2>
    </div>
      <Container className='container'>
        <Row>
          <Col md={6} className='column1'>
          <h3>Person of the Month goes to...</h3>
          <h3>Mr. Satvik Menon</h3>
          <br />
          <h4>Thank you! for your hard work and dedication to the work. You're truly a man of work and art.</h4>
          <h4>We genuinely appreciate how incredible you are.</h4>
          <h4>His continuous contribution towards the Clean-up drive paved a way for better sustainability.</h4>
          </Col>
          <Col md={4} className='column2'>
          <img src={man1} />
          </Col>
        </Row>
      </Container>
   </div>
   <div className='trash'>
   <div className='text-value'>
        <h2>🚀🚀 Get Value for Your Trash!! 💰</h2>
    </div>
     <Container className='mycontainer'>
      <Row>
        <Col className="col-1" md={6}>
          <h3>--Metal, bottle-cans, Tin Sheet--</h3>
          <br />
          <img src={Trash1} alt="image not found"/>
          <br />
          <h5>Sell these type of trashes <br /> Get good value of it..</h5>
        </Col>
        <Col className="col-1" md={6}>
          <h3>--Plastics, bags, polythene..--</h3>
          <br />
          <img src={Trash2} alt="image not found"/>
          <br />
          <h5>♲ Reduce, Reuse, Recycle <br /> Save nature by following 3'R Mantra's</h5>
        </Col>
      </Row>
      <Row>
        <Col className="col-2" md={6}>
          <h3>--All Electronic devices (E-Waste)--</h3>
          <br />
          <img src={Trash4} alt="image not found"/>
          <br />
          <h5>It is very hazardious to environment<br /> Recycle it Or Sell to us..</h5>
        </Col>
        <Col className="col-2" md={6}>
          <h3>--Destroyed or non-usable Toys--</h3>
          <br />
          <img src={Trash3} alt="image not found"/>
          <br />
          <h5>Sell it and get Price<br />Keep Surrounding Clean</h5>
        </Col>
      </Row>
      <Row>
        <Col className="col-3" md={6}>
          <h3>--Take a Pledge--</h3>
          <br />
          <img src={pledge} alt="image not found"/>
          <br />
         <h5>Swachh Bharat Mission<br />It is our duty to make Earth a better place to live.</h5>
        </Col>
        <Col className="col-3" md={6}>
          <h3>--Paper Or Newspaper Waste--</h3>
          <br />
          <img src={Trash5} alt="image not found"/>
          <br />
          <h5>Sell those stacks of outdated newspapers.<br />Or Recycle it at your home</h5>
        </Col>
      </Row>
     </Container>
   </div>
    </div>
  )
}

export default Homepage
