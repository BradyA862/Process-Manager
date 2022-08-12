import {render, screen} from "@testing-library/react";
import StaticProcessNoStages from "../../componenets/Static/StaticProcessNoStages";
import userEvent from "@testing-library/user-event";
import {DELETE_PROCESS, EDIT_PROCESS, VIEW_PROCESS} from "../../reducers/processReducer";

it('should show process title and number of stages', function () {
    const state = {
        userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Editor'
            }}}
    const staticProcess = {title: 'title', stages: ['1', '2', '3']}
    const stages = staticProcess.stages
    render(<StaticProcessNoStages staticProcess={staticProcess} _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText('title')).toBeInTheDocument()
    expect(stages.length).toBe(3)
});

it('should show View Process button', function () {
    const state = {
        userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Editor'
            }}}
    const staticProcess = {title: 'title', stages: ['1', '2', '3']}
    render(<StaticProcessNoStages staticProcess={staticProcess} _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText('View Process')).toBeInTheDocument()
});

it('should dispatch VIEW_PROCESS with staticProcess payload when View Process is clicked', function () {
    const state = {
        userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Editor'
            }}}
    const staticProcess = {id: 1, title: 'title', stages: ['1', '2', '3']}
    const dispatch = jest.fn()
    render(<StaticProcessNoStages staticProcess={staticProcess} _useDispatch={() => dispatch} _useSelector={fn => fn(state)}/>)
    userEvent.click(screen.getByText('View Process'))
    expect(dispatch).toHaveBeenCalledWith({type: VIEW_PROCESS, payload: staticProcess.id})
});

it('should show Edit button', function () {
    const state = {
        userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Editor'
            }}}
    const staticProcess = {title: 'title', stages: ['1', '2', '3']}
    render(<StaticProcessNoStages staticProcess={staticProcess} _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText('Edit')).toBeInTheDocument()
});

it('should dispatch EDIT_PROCESS with staticProcess payload when Edit is clicked', function () {
    const state = {
        userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Editor'
            }}}
    const staticProcess = {title: 'title', stages: ['1', '2', '3']}
    const dispatch = jest.fn()
    render(<StaticProcessNoStages staticProcess={staticProcess} _useDispatch={() => dispatch} _useSelector={fn => fn(state)}/>)
    userEvent.click(screen.getByText('Edit'))
    expect(dispatch).toHaveBeenCalledWith({type: EDIT_PROCESS, payload: staticProcess})
});

it('should show Delete button', function () {
    const state = {
        userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Editor'
            }}}
    const staticProcess = {title: 'title', stages: ['1', '2', '3']}
    render(<StaticProcessNoStages staticProcess={staticProcess} _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText('Delete')).toBeInTheDocument()
});

it('should dispatch DELETE_PROCESS with staticProcess payload when Delete is clicked', function () {
    const state = {
        userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Editor'
            }}}
    const staticProcess = {title: 'title', stages: ['1', '2', '3']}
    const dispatch = jest.fn()
    render(<StaticProcessNoStages staticProcess={staticProcess} _useDispatch={() => dispatch} _useSelector={fn => fn(state)}/>)
    userEvent.click(screen.getByText('Delete'))
    expect(dispatch).toHaveBeenCalledWith({type: DELETE_PROCESS, payload: staticProcess.id})
});