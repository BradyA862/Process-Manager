import {useDispatch, useSelector} from "react-redux";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADD_PROCESS} from "../../reducers/processReducer";
import {VIEW_RESPONSES, VIEW_USERS} from "../../reducers/userReducer";

export default function EditorHeader({
                                         _useDispatch = useDispatch,
                                         _useSelector = useSelector
                                     }) {

    const users = _useSelector(state => state.userReducer.users)
    const loggedInUser = _useSelector(state => state.userReducer.loggedInUser)
    const user = users.find(element => element.username === loggedInUser.username && element.role === loggedInUser.role)

    const dispatch = _useDispatch()

    function handleAddProcess() {
        dispatch({type: ADD_PROCESS})
    }

    function handleViewUsers() {
        dispatch({type: VIEW_USERS})
    }

    function handleViewResponses() {
        dispatch({type: VIEW_RESPONSES, payload: user.id})
    }

    return <Navbar style={{backgroundColor: "#878aad"}}>
        <Container>
            <Navbar.Brand>
                <h4>
                    Editor
                </h4>
            </Navbar.Brand>
            <Nav variant="pills">
                <Nav.Link className="me-5" onClick={handleAddProcess}>Add Process</Nav.Link>
                <Nav.Link className="me-5" onClick={handleViewUsers}>View Users</Nav.Link>
                <Nav.Link className="me-5" onClick={handleViewResponses}>View Responses</Nav.Link>
            </Nav>
            <Button>Logout</Button>
        </Container>
    </Navbar>
}

//TODO LOGOUT

