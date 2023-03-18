import '../App.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const HelloCard = () => {
    return (
        <Card className="hello-card card text-center">
            <Card.Body>
                <Card.Title>
                    Hello, My Name Is Eric Philipps
                </Card.Title>
                <Card.Subtitle>Get to Know Me!</Card.Subtitle>
                <Card.Text>
                    I am a full stack web developer that lives in Rochester Minnesota. Currently, I am 
                    a bike mechanic and salesman looking for work in software or web developement. 
                    I have worked with plenty of different languages and am always interested in learning 
                    new concepts and technologies. The outdoors is where I feel at home whether it be biking, 
                    snowboarding, canoeing, or backpacking! But anyways, welcome to my portfolio and feel free 
                    to have a look around!
                </Card.Text>
                <Button href="/about"variant="primary">Learn More About Me</Button>
            </Card.Body>
        </Card>
    )
}

export default HelloCard;