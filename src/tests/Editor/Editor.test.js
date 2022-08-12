import {render, screen} from "@testing-library/react";
import Editor from "../../componenets/Editor/Editor";

it('should show process list by default', function () {
    const state = {
        processReducer: {
            processToAdd: null,
            stageToAdd: null,
            processToEdit: null,
            stageToEdit: null,
        },
    userReducer: {
        viewingResponses: false
    }}
    const processList = 'processList'
    const header = 'header'
    const mockList = () => <div>{processList}</div>
    const mockHeader = () => <div>{header}</div>
    const dispatch = jest.fn()
    render(<Editor ProcessListX={mockList} _useSelector={fn => fn(state)} _useDispatch={() => dispatch} EditorHeaderX={mockHeader}/>)
    expect(screen.getByText('processList')).toBeInTheDocument()
});

it('should show EditProcess when processToEdit not null', function () {
    const state = {
        processReducer: {
            processToAdd: null,
            stageToAdd: null,
            processToEdit: 'process',
            stageToEdit: null,
        },
        userReducer: {
            viewingResponses: false
        }}
    const dispatch = jest.fn()
    const process = 'process'
    const mock = () => <div>{process}</div>
    render(<Editor EditProcessX={mock} _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    expect(screen.getByText('process')).toBeInTheDocument()
});

it('should show AddStage when processToView and stageToAdd not null', function () {
    const state = {
        processReducer: {
            processToAdd: null,
            stageToAdd: 'stage',
            processToEdit: null,
            stageToEdit: null,
            processToView: 1,
        },
        userReducer: {
            viewingResponses: false
        }}
    const dispatch = jest.fn()
    const process = 'process'
    const stage = 'stage'
    const mockProcess = () => <div>{process}</div>
    const mockStage = () => <div>{stage}</div>
    render(<Editor EditProcessX={mockProcess} AddStageX={mockStage} _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    expect(screen.getByText('stage')).toBeInTheDocument()
});

it('should show EditStage when processToView & stageToEdit not null', function () {
    const state = {
        processReducer: {
            processToAdd: null,
            stageToAdd: null,
            processToEdit: null,
            stageToEdit: 'stage',
            processToView: 1,
        },
        userReducer: {
            viewingResponses: false
        }}
    const dispatch = jest.fn()
    const process = 'process'
    const stage = 'stage'
    const mockProcess = () => <div>{process}</div>
    const mockStage = () => <div>{stage}</div>
    render(<Editor EditProcessX={mockProcess} EditStageX={mockStage} _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    expect(screen.getByText('stage')).toBeInTheDocument()
});

it('should show AddProcess when processToAdd not null', function () {
    const state = {
        processReducer: {
            processToAdd: 'process',
            stageToAdd: null,
            processToEdit: null,
            stageToEdit: null,
        },
        userReducer: {
            viewingResponses: false
        }}
    const dispatch = jest.fn()
    const process = 'process'
    const mock = () => <div>{process}</div>
    render(<Editor AddProcessX={mock} _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    expect(screen.getByText('process')).toBeInTheDocument()
});

it('should show ResponseList when viewingResponses true', function () {
    const state = {
        processReducer: {
            processToAdd: null,
            stageToAdd: null,
            processToEdit: null,
            stageToEdit: null,
        },
        userReducer: {
            viewingResponses: true
        }}
    const dispatch = jest.fn()
    const response = 'response'
    const mock = () => <div>{response}</div>
    render(<Editor ResponseListX={mock} _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    expect(screen.getByText('response')).toBeInTheDocument()
});