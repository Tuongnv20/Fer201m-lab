import { news } from "../shared/ListOfNews";
import { Link } from "react-router-dom";
import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize'

const New = () => {
    return (
        <>
            <div className="new-header">
                <h1>Movie News</h1>
            </div>
            <div className="film-content">
                <Container>
                    {news.map((n =>
                        <Row>
                            <Col
                                m={12}
                                s={12}
                            >
                                <Card
                                    closeIcon={<Icon>close</Icon>}
                                    header={<CardTitle image={n.image} reveal waves="light" />}
                                    revealIcon={<Icon>more_vert</Icon>}
                                    title={n.title}
                                >
                                    hi
                                </Card>
                            </Col>
                        </Row>
                    ))}
                </Container>
            </div>
        </>
    )
}

export default New;