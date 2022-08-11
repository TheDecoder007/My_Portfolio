import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

function Contact() {
  return (
      <Form>
        <h3 className="text-center">Please Reach Out!</h3>
      <Row>
        <Col>
          <Form.Control placeholder="Your Name" />
        </Col>
        <Col>
          <Form.Control placeholder="Your Company" />
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />        
      </Form.Group>
      <InputGroup>
        <InputGroup.Text>Your Message</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Contact;
