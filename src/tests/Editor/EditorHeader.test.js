import {render, screen} from "@testing-library/react";
import EditorHeader from "../../componenets/Editor/EditorHeader";
import userEvent from "@testing-library/user-event";
import {ADD_PROCESS} from "../../reducers/processReducer";
import {VIEW_RESPONSES, VIEW_USERS} from "../../reducers/userReducer";

it('should buttons for Add Process, View Users, View Responses, and Logout', function () {
    const state = {
        userReducer: {
            users: [
                {id: 1, username: 'brady', role: 'Editor'},
                {id: 2, username: 'admin', role: 'Follower'},
                {id: 3, username: 'follower', role: 'Follower'},
            ],
            loggedInUser: {username: 'brady', role: 'Editor'}
        }}
    render(<EditorHeader _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText('Add Process')).toBeInTheDocument()
    expect(screen.getByText('View Users')).toBeInTheDocument()
    expect(screen.getByText('View Responses')).toBeInTheDocument()
    expect(screen.getByText('Logout')).toBeInTheDocument()
});

it('should dispatch ADD_PROCESS when Add Process button clicked', function () {
    const state = {
        userReducer: {
            users: [
                {id: 1, username: 'brady', role: 'Editor'},
                {id: 2, username: 'admin', role: 'Follower'},
                {id: 3, username: 'follower', role: 'Follower'},
            ],
            loggedInUser: {username: 'brady', role: 'Editor'}
        }}
    const dispatch = jest.fn()
    render(<EditorHeader _useDispatch={() => dispatch} _useSelector={fn => fn(state)}/>)
    userEvent.click(screen.getByText('Add Process'))
    expect(dispatch).toHaveBeenCalledWith({type: ADD_PROCESS})
});

it('should dispatch VIEW_USERS when Add Process button clicked', function () {
    const state = {
        userReducer: {
            users: [
                {id: 1, username: 'brady', role: 'Editor'},
                {id: 2, username: 'admin', role: 'Follower'},
                {id: 3, username: 'follower', role: 'Follower'},
            ],
            loggedInUser: {username: 'brady', role: 'Editor'}
        }}
    const dispatch = jest.fn()
    render(<EditorHeader _useDispatch={() => dispatch} _useSelector={fn => fn(state)}/>)
    userEvent.click(screen.getByText('View Users'))
    expect(dispatch).toHaveBeenCalledWith({type: VIEW_USERS})
});

it('should dispatch VIEW_RESPONSES when Add Process button clicked', function () {
    const state = {
        userReducer: {
            users: [
                {id: 1, username: 'brady', role: 'Editor'},
                {id: 2, username: 'admin', role: 'Follower'},
                {id: 3, username: 'follower', role: 'Follower'},
            ],
            loggedInUser: {username: 'brady', role: 'Editor'}
        }}
    const user = {id: 1, username: 'brady', role: 'Editor'}
    const dispatch = jest.fn()
    render(<EditorHeader _useDispatch={() => dispatch} _useSelector={fn => fn(state)}/>)
    userEvent.click(screen.getByText('View Responses'))
    expect(dispatch).toHaveBeenCalledWith({type: VIEW_RESPONSES, payload: user.id})
});
