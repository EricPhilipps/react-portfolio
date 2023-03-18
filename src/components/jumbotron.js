import '../App.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Jumbotron = () => {
    return (
        <Card className="card text-center">
            <Card.Body>
                <Card.Title>
                    A Little Bit More About Me
                </Card.Title>
                <Card.Text>
                    I am from Rochester, Minnesota looking for my first opportunity as a developer. I 
                    have a fairly wide range of skills that I have learned through some undergraduate 
                    classes at the University of Minnesota Twin Cities and also from the University's 
                    Full Stack Bootcamp that I graduated from in 2022. Since the bootcamp I have trying 
                    to learn new technologies and also keep the knowledge that I gained from it.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Jumbotron;