import {useDispatch, useSelector} from "react-redux";
import {
    ADD_STAGE,
    CANCEL_VIEW_PROCESS,
    initiateStageList,
    TAKE_PROCESS
} from "../../reducers/processReducer";
import {Button, Card, Col, Row} from "react-bootstrap";
import StaticStage from "../Static/StaticStage";
import {useEffect} from "react";

export default function ViewProcessStages({
                                              _useSelector = useSelector,
                                              _useDispatch = useDispatch,
                                              StaticStageX = StaticStage
                                          }) {

    const dispatch = _useDispatch()

    const processId = _useSelector(state => state.processReducer.processToView)
    const processes = _useSelector(state => state.processReducer.processes)
    const process = processes.find(element => element.id === processId)
    const stages = _useSelector(state => state.processReducer.stages)
    const role = _useSelector(state => state.userReducer.loggedInUser.role)

    function handleBack() {
        dispatch({type: CANCEL_VIEW_PROCESS})
    }

    function handleNewStage() {
        dispatch({type: ADD_STAGE})
    }

    function handleTakeProcess() {
        dispatch({type: TAKE_PROCESS, payload: processId})
    }

    useEffect(() => {
        dispatch(initiateStageList())
    })

    if (role === 'Editor') {
        return <Card style={{backgroundColor: "#879dad"}}>
            <Card.Header>
                <Card.Title>
                    <div className="d-flex justify-content-center">
                        <h1>Title: {process.title}</h1>
                    </div>
                </Card.Title>
            </Card.Header>
            <Card.Body>
                {stages.map(
                    (staticStage, index) => <div key={index}>
                        <StaticStageX staticStage={staticStage}/>
                    </div>
                )}
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col className="d-flex justify-content-start">
                        <Button onClick={handleNewStage}
                                style={{backgroundColor: "#87adaa", borderColor: "#000000", borderWidth: 1}}>
                            Add Stage
                        </Button>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button onClick={handleBack}
                                style={{backgroundColor: "#ad9787", borderColor: "#000000", borderWidth: 1}}>
                            Back</Button>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    } else {

        return <Card>
            <Card.Header>
                <Card.Title>
                    <div>
                        <h2>{process.title}</h2>
                    </div>
                </Card.Title>
            </Card.Header>
            <Card.Body>
                {stages.map(
                    (staticStage, index) => <div key={index}>
                        <StaticStageX staticStage={staticStage}/>
                    </div>
                )}
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col>
                        <Button onClick={handleTakeProcess}>Do Process</Button>
                    </Col>
                    <Col>
                        <Button onClick={handleBack}>Back</Button>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>

    }


}