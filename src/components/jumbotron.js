import '../App.scss';
import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Jumbotron = () => {
    return (
        <Card className="text-center">
            <Card.Body>
                <Card.Title>
                    Hello,  my name is Eric and I am a Front/Back End Developer in Minneapolis, MN
                </Card.Title>
                <Card.Text>
                    Experience: JavaScript, CSS, HTML, Java, C++, C
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Jumbotron;