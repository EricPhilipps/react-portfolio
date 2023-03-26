import RepoCard from '../components/repoCard';
import repos from '../components/repoInfo'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Work = () => {
    return(
        <>
        <Container className="work-container">
            <Row>
                <Col>
                    <RepoCard title={repos[0].title} description={repos[0].description} link={repos[0].link} />
                </Col>
                <Col>
                    <RepoCard title={repos[1].title} description={repos[1].description} link={repos[1].link} />
                </Col>
                <Col>
                    <RepoCard title={repos[2].title} description={repos[2].description} link={repos[2].link} />
                </Col>

            </Row>
                   {/*} <RepoCard title={repos[3].title} description={repos[3].description} link={repos[3].link} />
                    <RepoCard title={repos[4].title} description={repos[4].description} link={repos[4].link} /> */}
        </Container>
        </>
    )
}

export default Work;