import {useDispatch, useSelector} from "react-redux";
import {
    CANCEL_REGISTER,
    initiateRegister,
    UPDATE_ADD_USER
} from "../../reducers/userReducer";
import {Button, Card, Form, InputGroup, Row} from "react-bootstrap";

export default function Register({
                                  _useDispatch = useDispatch,
                                  _useSelector = useSelector,
                              }) {

    const dispatch = _useDispatch()

    const addNewUser = _useSelector(state => state.userReducer.addNewUser)

    function updateUsername(username) {
        dispatch({type: UPDATE_ADD_USER, payload: {...addNewUser, username}})
    }

    function updatePassword(password) {
        dispatch({type: UPDATE_ADD_USER, payload: {...addNewUser, password}})
    }

    function updateRole(role) {
        dispatch({type: UPDATE_ADD_USER, payload: {...addNewUser, role}})
    }

    function handleSubmit(event) {
        event.preventDefault()
        dispatch(initiateRegister())
    }

    function handleCancel() {
        dispatch({type: CANCEL_REGISTER})
    }

    return <Card style={{borderWidth: 2, backgroundColor: '#879dad'}}>
        <Card.Body>
            <Form onSubmit={handleSubmit}>
                <div className='d-flex justify-content-center'>
                    <Form.Text>
                        <h1 className="text-black">
                            Register
                        </h1>
                    </Form.Text>
                </div>
                <Form.Group className='mb-3'>
                    <InputGroup className='mb-2'>
                        <InputGroup.Text>Username</InputGroup.Text>
                        <Form.Control placeholder='Username' onChange={e => updateUsername(e.target.value)} required={true}/>
                    </InputGroup>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <InputGroup>
                        <InputGroup.Text>Password</InputGroup.Text>
                        <Form.Control placeholder='Password' onChange={e => updatePassword(e.target.value)} required={true}/>
                    </InputGroup>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <div>
                        <Form.Check inline label='Editor' type='radio' value='Editor' name='user' required={true} onChange={e => updateRole(e.target.value)}/>
                        <Form.Check inline label='Follower' type='radio' value='Follower' name='user' required={true} onChange={e => updateRole(e.target.value)}/>
                    </div>
                </Form.Group>
                <Row className='p-3'>
                    <Button type={"submit"} variant={"primary"}
                            style={{backgroundColor: '#9dad87', borderColor: '#000000'}}>
                        Register</Button>
                </Row>
                <Row className='p-3'>
                    <Button type='button' onClick={handleCancel}
                            style={{backgroundColor: '#9dad87', borderColor: '#000000'}}>
                        Cancel</Button>
                </Row>
            </Form>
        </Card.Body>
    </Card>
}