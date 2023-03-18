import '../App.scss';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Button href="/" variant="primary">Home</Button> {' '}
            <Button href="/about" variant="primary">About Me</Button> {' '}
            <Button href="/work" variant="primary">See My Work!</Button> {' '}
          </Navbar.Brand>
            <Navbar.Text> 

            </Navbar.Text>
        </Container>
      </Navbar>
    )
}

export default Navigation;