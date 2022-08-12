import UserList from "../../componenets/User/UserList";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {CANCEL_USER_LIST} from "../../reducers/userReducer";

it('should show 3 users', function () {
    const state = {
        userReducer: {
            users: [
                {username: 'brady', password: 'mypass', id: 1, role: 'Editor'},
                {username: 'admin', password: 'admin', id: 2, role: 'Follower'},
                {username: 'user', password: 'pass', id: 3, role: 'Follower'}
            ]}}
    const mockUser = ({staticUser}) => <div>{staticUser.id}</div>
    render(<UserList StaticUserX={mockUser} _useSelector={fn => fn(state)} _useDispatch={() => {}}/>)
    expect(screen.getByText(state.userReducer.users[0].id)).toBeInTheDocument()
    expect(screen.getByText(state.userReducer.users[1].id)).toBeInTheDocument()
    expect(screen.getByText(state.userReducer.users[2].id)).toBeInTheDocument()
});

it('should show Back button', function () {
    const state = {
        userReducer: {
            users: [
                {username: 'brady', password: 'mypass', id: 1, role: 'Editor'},
                {username: 'admin', password: 'admin', id: 2, role: 'Follower'},
                {username: 'user', password: 'pass', id: 3, role: 'Follower'}
            ]}}
    const mockUser = ({staticUser}) => <div>{staticUser.id}</div>
    render(<UserList StaticUserX={mockUser} _useSelector={fn => fn(state)} _useDispatch={() => {}}/>)
    expect(screen.getByText('Back')).toBeInTheDocument()
});

it('should dispatch CANCEL_USER_LIST when Back button clicked', function () {
    const dispatch = jest.fn()
    const state = {
        userReducer: {
            users: [
                {username: 'brady', password: 'mypass', id: 1, role: 'Editor'},
                {username: 'admin', password: 'admin', id: 2, role: 'Follower'},
                {username: 'user', password: 'pass', id: 3, role: 'Follower'}
            ]}}
    const mockUser = ({staticUser}) => <div>{staticUser.id}</div>
    render(<UserList StaticUserX={mockUser} _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    userEvent.click(screen.getByText('Back'))
    expect(dispatch).toHaveBeenCalledWith({type: CANCEL_USER_LIST})
});