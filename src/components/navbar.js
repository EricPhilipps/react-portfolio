import '../App.scss';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Navigation = () => {
    return (
        <Navbar className="nav">
        <Container>
          <Navbar.Brand href="#home">
            <Button className= "btn" href="/" variant="primary">Home</Button> {' '}
            <Button className= "btn" href="/about" variant="primary">About Me</Button> {' '}
            <Button className= "btn" href="/work" variant="primary">See My Work!</Button> {' '}
          </Navbar.Brand>
            <Navbar.Text> 

            </Navbar.Text>
        </Container>
      </Navbar>
    )
}

export default Navigation;