import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Contact = () => {
    return (
        <Container className="contact-container">
            <Row>
                <Col>
                    <Button className="contact-btn" href="https://github.com/EricPhilipps"><AiFillGithub /></Button>
                </Col>
                <Col>
                    <Button className="contact-btn" href="mailto:ericphilipps123@gmail.com"><AiOutlineMail /></Button>
                </Col>
                <Col>
                    <Button className="contact-btn" href="https://www.linkedin.com/in/eric-philipps-32a223263/">< AiFillLinkedin  /></Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;