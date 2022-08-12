import {render, screen} from "@testing-library/react";
import EditProcess from "../../../componenets/Editor/Process/EditProcess";
import userEvent from "@testing-library/user-event";
import {CANCEL_EDIT_PROCESS, UPDATE_TITLE} from "../../../reducers/processReducer";

it('should show title input field', function () {
    const state = {
        processReducer: {
            processToEdit: {title: 'Title', stages: []}
        }}
    render(<EditProcess _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByPlaceholderText('Title')).toBeInTheDocument()
});

it('should dispatch UPDATE_TITLE when user types in title input field', function () {
    const state = {
        processReducer: {
            processToEdit: {title: 'Title', stages: []}
        }}
    const dispatch = jest.fn()
    render(<EditProcess _useDispatch={() => dispatch} _useSelector={fn => fn(state)}/>)
    const titleElement = screen.getByPlaceholderText('Title')
    const title = 'title'
    userEvent.type(titleElement, title)
    expect(dispatch).toHaveBeenCalledWith({type: UPDATE_TITLE, payload: {title: 'title', stages: []}})
});

it('should show Cancel and Save buttons', function () {
    const state = {
        processReducer: {
            processToEdit: {title: '', stages: []}
        }}
    render(<EditProcess _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText('Cancel')).toBeInTheDocument()
    expect(screen.getByText('Save')).toBeInTheDocument()
});

it('should dispatch CANCEL_ADD_PROCESS when Cancel button clicked', function () {
    const state = {
        processReducer: {
            processToEdit: {title: '', stages: []}
        }}
    const dispatch = jest.fn()
    render(<EditProcess _useDispatch={() => dispatch} _useSelector={fn => fn(state)}/>)
    userEvent.click(screen.getByText('Cancel'))
    expect(dispatch).toHaveBeenCalledWith({type: CANCEL_EDIT_PROCESS})
});

it('should dispatch initiateEditProcess when Save button clicked', function () {
    const state = {
        processReducer: {
            processToEdit: {title: '', stages: []}
        }}
    const dispatch = jest.fn()
    render(<EditProcess _useDispatch={() => dispatch} _useSelector={fn => fn(state)}/>)
    userEvent.click(screen.getByText('Save'))
    expect(typeof dispatch.mock.calls[0][0]).toBe('function')
});

