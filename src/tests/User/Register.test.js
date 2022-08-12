import {render, screen} from "@testing-library/react";
import Register from "../../componenets/User/Register";
import userEvent from "@testing-library/user-event";
import {CANCEL_REGISTER, UPDATE_ADD_USER} from "../../reducers/userReducer";

it('should show username and password input fields', function () {
    render(<Register _useDispatch={() => {}} _useSelector={() => {}}/>)
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
});

it('should show Register and Register buttons', function () {
    render(<Register _useDispatch={() => {}} _useSelector={() => {}}/>)
    expect(screen.getByText('Register')).toBeInTheDocument()
    expect(screen.getByText('Register')).toBeInTheDocument()
});

it('should show Editor and Follower radios', function () {
    render(<Register _useDispatch={() => {}} _useSelector={() => {}}/>)
    expect(screen.getByText('Editor')).toBeInTheDocument()
    expect(screen.getByText('Follower')).toBeInTheDocument()
});

it('should update username when user types in username field', function () {
    const dispatch = jest.fn()
    const state = {
        userReducer: {
            addNewUser: {
                username: '',
                password: '',
                role: ''
            }}}
    render(<Register _useDispatch={() => dispatch} _useSelector={fn => fn(state)}/>)
    const usernameElement = screen.getByPlaceholderText('Username')
    const username = 'brady'
    userEvent.type(usernameElement, username)
    expect(dispatch).toHaveBeenCalledWith({type: UPDATE_ADD_USER, payload: {username: 'brady', password: '', role: ''}})
});

it('should update password when user types in password field', function () {
    const dispatch = jest.fn()
    const state = {
        userReducer: {
            addNewUser: {
                username: '',
                password: '',
                role: ''
            }}}
    render(<Register _useDispatch={() => dispatch} _useSelector={fn => fn(state)}/>)
    const passwordElement = screen.getByPlaceholderText('Password')
    const password = 'mypass'
    userEvent.type(passwordElement, password)
    expect(dispatch).toHaveBeenCalledWith({type: UPDATE_ADD_USER, payload: {username: '', password: 'mypass', role: ''}})
});

it('should dispatch initiateRegister when userClicks login', function () {
    const dispatch = jest.fn()
    const state = {
        userReducer: {
            credentials: {
                username: 'brady',
                password: 'mypass',
                role: 'Editor'
            }}}
    render(<Register _useDispatch={() => dispatch} _useSelector={fn => fn(state)}/>)
    userEvent.click(screen.getByText("Register"))
    expect(typeof dispatch.mock.calls[0][0]).toBe('function')
});

it('should dispatch CANCEL_REGISTER when userClicks Cancel', function () {
    const dispatch = jest.fn()
    const state = {
        userReducer: {
            addNewUser: {
                username: 'brady',
                password: 'mypass',
                role: 'Editor'
            }}}
    render(<Register _useDispatch={() => dispatch} _useSelector={fn => fn(state)}/>)
    userEvent.click(screen.getByText("Cancel"))
    expect(dispatch).toHaveBeenCalledWith({type: CANCEL_REGISTER})
});