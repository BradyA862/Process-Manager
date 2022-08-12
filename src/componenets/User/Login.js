import {useDispatch, useSelector} from "react-redux";
import {initiateLogin, START_REGISTER, UPDATE_CREDENTIALS} from "../../reducers/userReducer";
import {Button, Card, Form, InputGroup, Row} from "react-bootstrap";

export default function Login({
                                  _useDispatch = useDispatch,
                                  _useSelector = useSelector,
                              }) {

    const dispatch = _useDispatch()

    const credentials = _useSelector(state => state.userReducer.credentials)

    function updateUsername(username) {
        dispatch({type: UPDATE_CREDENTIALS, payload: {...credentials, username}})
    }

    function updatePassword(password) {
        dispatch({type: UPDATE_CREDENTIALS, payload: {...credentials, password}})
    }

    function updateRole(role) {
        dispatch({type: UPDATE_CREDENTIALS, payload: {...credentials, role}})
    }

    function handleSubmit(event) {
        event.preventDefault()
        dispatch(initiateLogin())
    }

    function handleRegister() {
        dispatch({type: START_REGISTER})
    }

    return <Card style={{borderWidth: 2, backgroundColor: '#879dad'}}>
        <Card.Body>
            <Form onSubmit={handleSubmit}>
                <div className='d-flex justify-content-center'>
                <Form.Text>
                    <h1 className="text-black">
                        Login
                    </h1>
                </Form.Text>
                </div>
                <Form.Group className='mb-3'>
                    <InputGroup className='mb-2'>
                        <InputGroup.Text>Username</InputGroup.Text>
                        <Form.Control placeholder='Username' onChange={e => updateUsername(e.target.value)}
                                      required={true}/>
                    </InputGroup>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <InputGroup>
                        <InputGroup.Text>Password</InputGroup.Text>
                        <Form.Control placeholder='Password' onChange={e => updatePassword(e.target.value)}
                                      required={true}/>
                    </InputGroup>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <div>
                        <Form.Check inline label='Editor' type='radio' value='Editor' name='user' required={true}
                                    onChange={e => updateRole(e.target.value)}/>
                        <Form.Check inline label='Follower' type='radio' value='Follower' name='user' required={true}
                                    onChange={e => updateRole(e.target.value)}/>
                    </div>
                </Form.Group>
                <Row className='p-3'>
                    <Button type={"submit"} variant={"primary"}
                            style={{backgroundColor: '#9dad87', borderColor: '#000000'}}>
                        Login</Button>
                </Row>
                <Row className='p-3'>
                    <Button type='button' onClick={handleRegister}
                            style={{backgroundColor: '#9dad87', borderColor: '#000000'}}>
                        Register</Button>
                </Row>
            </Form>
        </Card.Body>
    </Card>
}