import {Button, Card, Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {DELETE_USER, EDIT_USER, initiateDeleteUser} from "../../reducers/userReducer";

export default function StaticUser({
                                       staticUser,
                                       _useDispatch = useDispatch,
                                       _useSelector = useSelector
}) {
    const dispatch = _useDispatch()

    const loggedInUser = _useSelector(state => state.userReducer.loggedInUser)

    const id = staticUser.id
    const role = staticUser.role

    function handleDelete() {
        dispatch({type: DELETE_USER, payload: id})
        dispatch(initiateDeleteUser())
    }

    function handleEdit() {
        dispatch({type: EDIT_USER, payload: {id: id, role: role} })
    }

    if (loggedInUser.role === 'Editor') {
        return <Card>
            <Card.Body>
                <Row>
                    <Col>
                        <h2>{staticUser.username}</h2>
                    </Col>
                    <Col>
                        <h2>{staticUser.role}</h2>
                    </Col>
                    <Col>
                        <h2>{staticUser.id}</h2>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col>
                        <Button onClick={handleEdit}>Edit</Button>
                    </Col>
                    <Col>
                        <Button onClick={handleDelete}>Delete</Button>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    } else {
        return <Card>
            <Card.Body>
                <Row>
                    <Col>
                        <h2>{staticUser.username}</h2>
                    </Col>
                    <Col>
                        <h2>{staticUser.role}</h2>
                    </Col>
                    <Col>
                        <h2>{staticUser.id}</h2>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    }
}