import '../App.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const RepoCard = (props) => {
    return (
        <Card className="repo-card text-center">
            <Card.Body>
                <Card.Title>
                    {props.title}
                </Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Button className="btn" href={props.link}>Github Link</Button>
            </Card.Body>
        </Card>
    )
}

export default RepoCard;