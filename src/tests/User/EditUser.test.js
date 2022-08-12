import {render, screen} from "@testing-library/react";
import EditUser from "../../componenets/User/EditUser";
import {CANCEL_EDIT_USER} from "../../reducers/userReducer";
import userEvent from "@testing-library/user-event";

it('should show username and id of user', function () {
    const state = {
        userReducer: {
            userToEdit: {
                id: 1,
                username: 'brady'
            }}}
    render(<EditUser _useSelector={fn => fn(state)} _useDispatch={() => {}}/>)
    expect(screen.getByText(1)).toBeInTheDocument()
    expect(screen.getByText('brady')).toBeInTheDocument()
});

it('should show Editor and Follower radio buttons', function () {
    const state = {
        userReducer: {
            userToEdit: {
                id: 1,
                username: 'brady'
            }}}
    render(<EditUser _useSelector={fn => fn(state)} _useDispatch={() => {}}/>)
    expect(screen.getByText('Editor')).toBeInTheDocument()
    expect(screen.getByText('Follower')).toBeInTheDocument()
});

it('should show Back and Save buttons', function () {
    const state = {
        userReducer: {
            userToEdit: {
                id: 1,
                username: 'brady'
            }}}
    render(<EditUser _useSelector={fn => fn(state)} _useDispatch={() => {}}/>)
    expect(screen.getByText('Back')).toBeInTheDocument()
    expect(screen.getByText('Save')).toBeInTheDocument()
});

it('should dispatch CANCEL_EDIT_USER when Back button is clicked', function () {
    const state = {
        userReducer: {
            userToEdit: {
                id: 1,
                username: 'brady'
            }}}
    const dispatch = jest.fn()
    render(<EditUser _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    userEvent.click(screen.getByText('Back'))
    expect(dispatch).toHaveBeenCalledWith({type: CANCEL_EDIT_USER})
});

it('should dispatch initiateEditRole when Save button is clicked', function () {
    const state = {
        userReducer: {
            userToEdit: {
                id: 1,
                username: 'brady'
            }}}
    const dispatch = jest.fn()
    render(<EditUser _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    userEvent.click(screen.getByText('Save'))
    expect(typeof dispatch.mock.calls[0][0]).toBe('function')
});


