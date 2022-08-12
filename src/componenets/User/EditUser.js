import {useDispatch, useSelector} from "react-redux";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {CANCEL_EDIT_USER, EDIT_USER, initiateEditRole} from "../../reducers/userReducer";

export default function EditUser({
                                     _useDispatch = useDispatch,
                                     _useSelector = useSelector
}) {
    const dispatch = _useDispatch()

    const user = _useSelector(state => state.userReducer.userToEdit)

    function updateRole(role) {
        dispatch({type: EDIT_USER, payload: {...user, role}})
    }

    function handleBack() {
        dispatch({type: CANCEL_EDIT_USER})
    }

    function handleSave() {
        dispatch(initiateEditRole())
    }

    return <Card>
        <Card.Header>
            <Row>
                <Col>
                    <h2>{user.username}</h2>
                </Col>
                <Col>
                    <h2>{user.id}</h2>
                </Col>
            </Row>
        </Card.Header>
        <Card.Body>
            <Form>
                <Form.Group>
                    <div>
                        <Form.Check inline label='Editor' type='radio' value='Editor' name='user' required={true}
                                    onChange={e => updateRole(e.target.value)}/>
                        <Form.Check inline label='Follower' type='radio' value='Follower' name='user' required={true}
                                    onChange={e => updateRole(e.target.value)}/>
                    </div>
                </Form.Group>
            </Form>
        </Card.Body>
        <Card.Footer>
            <Row>
                <Col>
                    <Button onClick={handleBack}>Back</Button>
                </Col>
                <Col>
                    <Button onClick={handleSave}>Save</Button>
                </Col>
            </Row>
        </Card.Footer>
    </Card>
}