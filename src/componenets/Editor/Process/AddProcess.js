import {useDispatch, useSelector} from "react-redux";
import {CANCEL_ADD_PROCESS, initiateAddProcess, UPDATE_TITLE} from "../../../reducers/processReducer";
import {Button, Card, Col, Form, InputGroup, Row} from "react-bootstrap";

export default function AddProcess({
                                       _useDispatch = useDispatch,
                                       _useSelector = useSelector
                                   }) {

    const dispatch = _useDispatch()

    const processToAdd = _useSelector(state => state.processReducer.processToAdd)

    function updateTitle(title) {
        dispatch({type: UPDATE_TITLE, payload: {...processToAdd, title}})
    }

    function handleSave(event) {
        event.preventDefault()
        dispatch(initiateAddProcess())
    }

    function handleCancel() {
        dispatch({type: CANCEL_ADD_PROCESS})
    }

    return <Card>
        <Card.Header>
            <h1>Add A Process</h1>
        </Card.Header>
        <Card.Body>
            <Form>
                <Form.Group>
                    <InputGroup>
                        <InputGroup.Text>Title</InputGroup.Text>
                        <Form.Control placeholder='Title' onChange={e => updateTitle(e.target.value)} required={true}/>
                    </InputGroup>
                </Form.Group>
            </Form>
        </Card.Body>
        <Card.Footer>
            <Row>
                <Col>
                    <Button onClick={handleCancel}>Cancel</Button>
                </Col>
                <Col>
                    <Button onClick={handleSave}>Save</Button>
                </Col>
            </Row>
        </Card.Footer>
    </Card>


}