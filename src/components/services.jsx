import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";

export const Services = (props) => {
  const employeerrouteChange = () => {
    let path = `https://forms.gle/5kjEBZVxaCMCCB1m6`;
    window.open(path);
  };

  const studentrouteChange = () => {
    let path = `https://forms.gle/Fj8Bp1aUUHwUSGmA9`;
    window.open(path);
  }; 
    return (
      <div id='services' className='text-center registeration'>
        <div className='container'>
          <div className='section-title'>
            <h2>Registration</h2>
          </div>
          <div className='row'>
            <Card className='card-detail1' style={{ width: "width: 18rem" }}>
              <Card.Img
                variant='top'
                src='img/student-reg.jpg'
                width={200}
                height={200}
              />
              <Card.Body>
                <Card.Title>
                  <h3>Student Registration</h3>
                </Card.Title>
                <Card.Text>
                  Please register here our team will contact you
                </Card.Text>
                <Button
                  onClick={studentrouteChange}
                  variant='primary'
                  className='blink'
                  size='lg'>
                  Registration
                </Button>
              </Card.Body>
            </Card>
            <Card className='card-detail2' style={{ width: "width: 18rem" }}>
              <Card.Img
                variant='top'
                src='img/employeer-reg.jpg'
                width={200}
                height={200}
              />
              <Card.Body>
                <Card.Title>
                  <h3>Employeer Registration</h3>
                </Card.Title>
                <Card.Text>
                  Please register here our team will contact you
                </Card.Text>
                <Button
                  onClick={employeerrouteChange}
                  variant='primary'
                  className='blink'
                  size='lg'>
                  Registration
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );}

export default Services;