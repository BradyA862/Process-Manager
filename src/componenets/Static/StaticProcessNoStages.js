import {useDispatch, useSelector} from "react-redux";
import {Button, Card, Col, Row} from "react-bootstrap";
import {
    DELETE_PROCESS, DO_PROCESS,
    EDIT_PROCESS,
    initiateDeleteProcess,
    initiateStageList,
    VIEW_PROCESS
} from "../../reducers/processReducer";

export default function StaticProcessNoStages({
                                                  staticProcess,
                                                  _useDispatch = useDispatch,
                                                  _useSelector = useSelector
                                              }) {

    const dispatch = _useDispatch()

    const loggedInUser = _useSelector(state => state.userReducer.loggedInUser)
    const stages = staticProcess.stages

    function handleViewProcess() {
        dispatch({type: VIEW_PROCESS, payload: staticProcess.id})
        dispatch(initiateStageList())
    }

    function handleEdit() {
        dispatch({type: EDIT_PROCESS, payload: staticProcess})
    }

    function handleDelete() {
        dispatch({type: DELETE_PROCESS, payload: staticProcess.id})
        dispatch(initiateDeleteProcess())
    }

    function doProcess() {
        dispatch({type: DO_PROCESS, payload: staticProcess})
    }


    if (loggedInUser.role === 'Editor') {

        return <Card className={'m-3'} style={{backgroundColor: "#879dad"}}>
            <Card.Body>
                <Row>
                    <Col className="d-flex justify-content-start">
                        <h2>{staticProcess.title}</h2>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <h4>Number Of Stages: {stages.length}</h4>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col className="d-flex justify-content-start">
                        <Button onClick={handleViewProcess} style={{
                            backgroundColor: "#878aad",
                            borderColor: "#000000"
                        }}>View Process</Button>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Button onClick={handleEdit} style={{
                            backgroundColor: "#ad9787",
                            borderColor: "#000000"
                        }}>Edit</Button>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button onClick={handleDelete} style={{
                            backgroundColor: "#ad879d",
                            borderColor: "#000000"
                        }}>Delete</Button>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>

    } else {

        return <Card>
            <Card.Body>
                <Row>
                    <Col>
                        <h2>{staticProcess.title}</h2>
                    </Col>
                    <Col>
                        <h4>Number Of Stages: {stages.length}</h4>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col>
                        <Button onClick={handleViewProcess}>View Process</Button>
                    </Col>
                    <Col>
                        <Button onClick={doProcess}>Do Process</Button>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    }
}