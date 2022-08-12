import {render, screen} from "@testing-library/react";
import Login from "../../componenets/User/Login";
import userEvent from "@testing-library/user-event";
import {START_REGISTER, UPDATE_CREDENTIALS} from "../../reducers/userReducer";

it('should show username and password input fields', function () {
    render(<Login _useDispatch={() => {}} _useSelector={() => {}}/>)
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
});

it('should show Login and Register buttons', function () {
    render(<Login _useDispatch={() => {}} _useSelector={() => {}}/>)
    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByText('Register')).toBeInTheDocument()
});

it('should show Editor and Follower radios', function () {
    render(<Login _useDispatch={() => {}} _useSelector={() => {}}/>)
    expect(screen.getByText('Editor')).toBeInTheDocument()
    expect(screen.getByText('Follower')).toBeInTheDocument()
});

it('should update username when user types in username field', function () {
    const dispatch = jest.fn()
    const state = {
        userReducer: {
            credentials: {
                username: '',
                password: '',
                role: ''
            }}}
    render(<Login _useDispatch={() => dispatch} _useSelector={fn => fn(state)}/>)
    const usernameElement = screen.getByPlaceholderText('Username')
    const username = 'brady'
    userEvent.type(usernameElement, username)
    expect(dispatch).toHaveBeenCalledWith({type: UPDATE_CREDENTIALS, payload: {username: 'brady', password: '', role: ''}})
});

it('should update password when user types in password field', function () {
    const dispatch = jest.fn()
    const state = {
        userReducer: {
            credentials: {
                username: '',
                password: '',
                role: ''
            }}}
    render(<Login _useDispatch={() => dispatch} _useSelector={fn => fn(state)}/>)
    const passwordElement = screen.getByPlaceholderText('Password')
    const password = 'mypass'
    userEvent.type(passwordElement, password)
    expect(dispatch).toHaveBeenCalledWith({type: UPDATE_CREDENTIALS, payload: {username: '', password: 'mypass', role: ''}})
});

it('should dispatch initiateLogin when userClicks login', function () {
    const dispatch = jest.fn()
    const state = {
        userReducer: {
            credentials: {
                username: 'brady',
                password: 'mypass',
                role: 'Editor'
            }}}
    render(<Login _useDispatch={() => dispatch} _useSelector={fn => fn(state)}/>)
    userEvent.click(screen.getByText("Login"))
    expect(typeof dispatch.mock.calls[0][0]).toBe('function')
});

it('should dispatch REGISTER_START when userClicks Register', function () {
    const dispatch = jest.fn()
    const state = {
        userReducer: {
            credentials: {
                username: 'brady',
                password: 'mypass',
                role: 'Editor'
            }}}
    render(<Login _useDispatch={() => dispatch} _useSelector={fn => fn(state)}/>)
    userEvent.click(screen.getByText("Register"))
    expect(dispatch).toHaveBeenCalledWith({type: START_REGISTER})
});