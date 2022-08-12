import {render, screen} from "@testing-library/react";
import StaticUser from "../../componenets/Static/StaticUser";
import userEvent from "@testing-library/user-event";
import {DELETE_USER, EDIT_USER} from "../../reducers/userReducer";

it('should show username, role, and id', function () {
    const state = {
        userReducer: {
            loggedInUser: {username: 'brady', role: 'Editor'}}}
    const staticUser =
        {id: 1, username: 'user', role: 'Follower'}
    render(<StaticUser staticUser={staticUser} _useSelector={fn => fn(state)} _useDispatch={() => {}}/>)
    expect(screen.getByText(1)).toBeInTheDocument()
    expect(screen.getByText('user')).toBeInTheDocument()
    expect(screen.getByText('Follower')).toBeInTheDocument()
});

it('should show Edit button', function () {
    const state = {
        userReducer: {
            loggedInUser: {username: 'brady', role: 'Editor'}}}
    const staticUser =
        {id: 1, username: 'user', role: 'Follower'}
    render(<StaticUser staticUser={staticUser} _useSelector={fn => fn(state)} _useDispatch={() => {}}/>)
    expect(screen.getByText('Edit')).toBeInTheDocument()
});

it('should show Delete button', function () {
    const state = {
        userReducer: {
            loggedInUser: {username: 'brady', role: 'Editor'}}}
    const staticUser =
        {id: 1, username: 'user', role: 'Follower'}
    render(<StaticUser staticUser={staticUser} _useSelector={fn => fn(state)} _useDispatch={() => {}}/>)
    expect(screen.getByText('Delete')).toBeInTheDocument()
});

it('should dispatch DELETE_USER when Delete button is clicked', function () {
    const dispatch = jest.fn()
    const state = {
        userReducer: {
            loggedInUser: {username: 'brady', role: 'Editor'}}}
    const staticUser =
        {id: 1, username: 'user', role: 'Follower'}
    render(<StaticUser staticUser={staticUser} _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    userEvent.click(screen.getByText('Delete'))
    expect(dispatch).toHaveBeenCalledWith({type: DELETE_USER, payload: 1})
});

it('should dispatch EDIT_USER when Edit button is clicked', function () {
    const dispatch = jest.fn()
    const state = {
        userReducer: {
            loggedInUser: {username: 'brady', role: 'Editor'}}}
    const staticUser =
        {id: 1, username: 'user', role: 'Follower'}
    render(<StaticUser staticUser={staticUser} _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    userEvent.click(screen.getByText('Edit'))
    expect(dispatch).toHaveBeenCalledWith({type: EDIT_USER, payload: {id: 1, role: 'Follower'}})
});