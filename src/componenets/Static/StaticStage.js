import {useDispatch, useSelector} from "react-redux";
import {Button, Col, Form, Row} from "react-bootstrap";
import {DELETE_STAGE, EDIT_STAGE, initiateDeleteStage} from "../../reducers/processReducer";

export default function StaticStage({
                                        staticStage,
                                        _useDispatch = useDispatch,
                                        _useSelector = useSelector
                                    }) {
    const dispatch = _useDispatch()

    const loggedInUser = _useSelector(state => state.userReducer.loggedInUser)
    const stageType = staticStage.stageType
    const role = loggedInUser.role


    function handleEdit() {
        dispatch({type: EDIT_STAGE, payload: staticStage})
    }

    function handleDelete() {
        dispatch({type: DELETE_STAGE, payload: staticStage.id})
        dispatch(initiateDeleteStage())
    }

    if (role === 'Editor') {

        if (stageType === 'Boolean') {
            return <Form style={{borderWidth: 2}}>
                <Row>
                    <Col>
                        <Form.Label>
                            <Row>
                                <h2>{staticStage.stageNumber + '.'}{' '}{staticStage.prompt}</h2>
                            </Row>
                        </Form.Label>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Row className="m-2 d-flex" style={{width: 100}}>
                            <Button onClick={handleEdit} style={{
                                backgroundColor: "#87adaa",
                                borderColor: "#000000"
                            }}>Edit</Button>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <div className="ms-1">
                                <Form.Check inline label='True' type='radio' value='true' required={true}/>
                                <Form.Check inline label='False' type='radio' value='false' required={true}/>
                            </div>
                        </Form.Group>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Row className="m-2 d-flex" style={{width: 100}}>
                            <Button onClick={handleDelete} style={{
                                backgroundColor: "#ad879d",
                                borderColor: "#000000"
                            }}>Delete</Button>
                        </Row>
                    </Col>
                </Row>
                <hr className="m=2"/>
            </Form>
        }

        if (stageType === 'MultChoice') {
            return <Form>
                <Row>
                    <Col>
                        <Form.Label>
                            <Row>
                                <h2>{staticStage.stageNumber + '.'}{' '}{staticStage.prompt}</h2>
                            </Row>
                        </Form.Label>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Row className="m-2 d-flex" style={{width: 100}}>
                            <Button onClick={handleEdit} style={{
                                backgroundColor: "#87adaa",
                                borderColor: "#000000"
                            }}>Edit</Button>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col className="ms-3">
                        <Form.Group>
                            <Row>
                                <Form.Check inline label='A' type='radio' required={true}/>
                            </Row>
                            <Row>
                                <Form.Check inline label='B' type='radio' required={true}/>
                            </Row>
                            <Row>
                                <Form.Check inline label='C' type='radio' required={true}/>
                            </Row>
                            <Row>
                                <Form.Check inline label='D' type='radio' required={true}/>
                            </Row>
                        </Form.Group>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Row className="m-2 d-flex" style={{width: 100, height: 20}}>
                            <Button onClick={handleDelete} style={{
                                backgroundColor: "#ad879d",
                                borderColor: "#000000"
                            }}>Delete</Button>
                        </Row>
                    </Col>
                </Row>
                <hr className="m=2"/>
            </Form>
        }

        if (stageType === 'Text') {
            return <Form>
                <Row>
                    <Col>
                        <Form.Label>
                            <Row>
                                <h2>{staticStage.stageNumber + '.'}{' '}{staticStage.prompt}</h2>
                            </Row>
                        </Form.Label>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Row className="m-2 d-flex" style={{width: 100}}>
                            <Button onClick={handleEdit} style={{
                                backgroundColor: "#87adaa",
                                borderColor: "#000000"
                            }}>Edit</Button>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group style={{maxWidth: 750}}>
                            <Form.Control placeholder='Answer'/>
                        </Form.Group>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Row className="m-2 d-flex" style={{width: 100}}>
                            <Button onClick={handleDelete} style={{
                                backgroundColor: "#ad879d",
                                borderColor: "#000000"
                            }}>Delete</Button>
                        </Row>
                    </Col>
                </Row>
                <hr className="m=2"/>
            </Form>
        }

    } else {

        if (stageType === 'Boolean') {
            return <Form>
                <Form.Label>
                    <Row>
                        <Col>
                            <h2>{staticStage.stageNumber}</h2>
                        </Col>
                        <Col>
                            <h2>{staticStage.prompt}</h2>
                        </Col>
                    </Row>
                </Form.Label>
                <Form.Group>
                    <div>
                        <Form.Check inline label='True' type='radio' value='true' required={true}/>
                        <Form.Check inline label='False' type='radio' value='false' required={true}/>
                    </div>
                </Form.Group>
                <hr className="m=2"/>
            </Form>
        }

        if (stageType === 'MultChoice') {
            return <Form>
                <Form.Label>
                    <Row>
                        <Col>
                            <h2>{staticStage.stageNumber}</h2>
                        </Col>
                        <Col>
                            <h2>{staticStage.prompt}</h2>
                        </Col>
                    </Row>
                </Form.Label>
                <Form.Group>
                    <Row>
                        <Form.Check inline label='A' type='radio' required={true}/>
                    </Row>
                    <Row>
                        <Form.Check inline label='B' type='radio' required={true}/>
                    </Row>
                    <Row>
                        <Form.Check inline label='C' type='radio' required={true}/>
                    </Row>
                    <Row>
                        <Form.Check inline label='D' type='radio' required={true}/>
                    </Row>
                </Form.Group>
                <hr className="m=2"/>
            </Form>
        }

        if (stageType === 'Text') {
            return <Form>
                <Form.Label>
                    <Row>
                        <Col>
                            <h2>{staticStage.stageNumber}</h2>
                        </Col>
                        <Col>
                            <h2>{staticStage.prompt}</h2>
                        </Col>
                    </Row>
                </Form.Label>
                <Form.Group>
                    <Form.Control placeholder='Answer'/>
                </Form.Group>
                <hr className="m=2"/>
            </Form>
        }
    }
}