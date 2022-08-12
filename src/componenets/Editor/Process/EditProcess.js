import {useDispatch, useSelector} from "react-redux";
import {Button, Card, Col, Form, InputGroup, Row} from "react-bootstrap";
import {CANCEL_EDIT_PROCESS, initiateEditProcess, UPDATE_TITLE} from "../../../reducers/processReducer";

export default function EditProcess({
                                        _useDispatch = useDispatch,
                                        _useSelector = useSelector
                                    }) {

    const dispatch = _useDispatch()

    const processToEdit = _useSelector(state => state.processReducer.processToEdit)

    function handleCancel() {
        dispatch({type: CANCEL_EDIT_PROCESS})
    }

    function handleEdit(event) {
        event.preventDefault()
        dispatch(initiateEditProcess())
    }

    function updateTitle(title) {
        dispatch({type: UPDATE_TITLE, payload: {...processToEdit, title}})
    }

    return <Card>
        <Card.Header>
            <h1>Edit Process</h1>
        </Card.Header>
        <Card.Body>
            <Form>
                <Form.Group>
                    <InputGroup>
                        <InputGroup.Text>Title</InputGroup.Text>
                        <Form.Control placeholder={processToEdit.title} onChange={e => updateTitle(e.target.value)} required={true}/>
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
                    <Button onClick={handleEdit}>Save</Button>
                </Col>
            </Row>
        </Card.Footer>
    </Card>

}