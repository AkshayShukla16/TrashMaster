import React, {useState, useEffect} from 'react'
import { Container, Row, Col,Button } from 'react-bootstrap'
import beach from '../Images/beach.PNG'
import fort from '../Images/fort.PNG'
import register from '../Images/register.png'

function Announcement() {
    const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  return (
    <div className='announcement'>
        <div className='my-announce'>
        <h1 style={{color:"rgb(229, 255, 0)"}}> 📢📢 Event Announcement! 📢📢</h1>
        <br />
        <br />
        <Container>
            <Row>
                <Col md={6} className='col-beach'>
                <h3 style={{color:"cyan"}}>Coastal Clean Up drive</h3>
                <h2 style={{color:"white"}}>Februrary 1, 2023</h2>
                <h4 style={{color:"rgb(58, 255, 39)"}}>Location: <span style={{color:"rgb(238, 112, 107)"}}>Juhu-Versova Beach, Mumbai-400053</span></h4>
                <h2 style={{color:"rgb(226, 146, 221)"}}>Time: 10 AM to Noon</h2>
                <br />
                <img src={beach} alt="No item" style={{height: '75%', border:"2px solid yellow" }}/>
                </Col>

                <Col md={6} className='col-beach'>
                <h3 style={{color:"cyan"}}>Fort Clean Up drive</h3>
                <h2 style={{color:"white"}}>Februrary 10, 2023</h2>
                <h4 style={{color:"rgb(58, 255, 39)"}}>Location: <span style={{color:"rgb(238, 112, 107)"}}>Raigad Fort, Mahad</span></h4>
                <h2 style={{color:"rgb(226, 146, 221)"}}>Time: 10 AM to Noon</h2>
                <br />
                <img src={fort} alt="No item" style={{ border:"2px solid yellow" }}/>
                </Col>
            </Row>
            <Row>
                <Col className="mydiv" md={12}>     
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <br />
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <br />
          <div className="field">
        
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <br />
          <div className="field">
         
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <br />
          <Button className="fluid ui button blue">Register</Button>
        </div>
      </form>
   </Col>
            <Col md={6}>
                <img  src={register} alt='Not found'/>
                </Col>           
</Row>
        </Container>
        </div>
      
    </div>
  )
}

export default Announcement
