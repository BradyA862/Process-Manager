import {useSelector} from "react-redux";
import {Card, Col, Row} from "react-bootstrap";

export default function StaticResponse({
                                           staticResponse,
                                           _useSelector = useSelector
                                       }) {

    const userId = staticResponse.userId
    const processId = staticResponse.processId
    const stageId = staticResponse.stageId
    const username = staticResponse.username
    const stageType = staticResponse.stageType
    const stageNumber = staticResponse.stageNumber
    const answer = staticResponse.answer


    const processes = _useSelector(state => state.processReducer.processes)
    const process = processes.find(element => element.id === processId)
    const stages = process.stages
    const stage = stages.find(element => element.id === stageId)

    return <Card>
        <Card.Header>
            <Card.Title>
                <Row>
                    <Col>
                        <h1>{process.title}</h1>
                    </Col>
                    <Col>
                        <h4>Process ID:{processId}</h4>
                    </Col>
                </Row>
            </Card.Title>
            <Card.Subtitle>
                <Row>
                    <Col>
                        <h4>Stage ID: {stageId}</h4>
                    </Col>
                    <Col>
                        <h4>Type: {stageType}</h4>
                    </Col>
                    <Col>
                        <h4>Stage Number: {stageNumber}</h4>
                    </Col>
                </Row>
            </Card.Subtitle>
        </Card.Header>
        <Card.Body>
            <Row>
                <h3>{stage.prompt}</h3>
            </Row>
            <Row>
                <Col>
                    <h3>{answer}</h3>
                </Col>
            </Row>
        </Card.Body>
        <Card.Footer>
            <Row>
                <Col>
                    <p>{username}</p>
                </Col>
                <Col>
                    <p>{userId}</p>
                </Col>
            </Row>
        </Card.Footer>
    </Card>
}