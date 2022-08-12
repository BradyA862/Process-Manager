import {render, screen} from "@testing-library/react";
import Response from "../../componenets/Follower/Response";

it('should show process title, stage number, stage type, prompt, and radio buttons for Boolean stage', function () {
    const state ={
        processReducer: {
            processToTake: {
                title: 'title',
                stages: [
                    {prompt: 'prompt1', stageType: 'Boolean', stageNumber: 1},
                    {prompt: 'prompt2', stageType: 'Text', stageNumber: 2},
                    {prompt: 'prompt3', stageType: 'MultChoice', stageNumber: 3}
                ]}},
        userReducer: {
            responseToAdd: {
                userId: '',
                processId: '',
                stageId: '',
                username: '',
                stageType: '',
                stageNumber: '',
                answer: ''
            },
            loggedInUser: {username: 'brady', role: 'Editor'},
            users: [
                {username: 'brady', role: 'Editor'},
                {username: 'user', role: 'Follower'},
                {username: 'admin', role: 'Editor'}
            ]}}
    const staticStage = {
        id: 1,
        stageNumber: 1,
        prompt: 'prompt1',
        stageType: 'Boolean',
        answer: []
    }
    render(<Response _useSelector={fn => fn(state)} _useDispatch={() => {}} staticStage={staticStage}/>)
    expect(screen.getByDisplayValue('title')).toBeInTheDocument()
    expect(screen.getByText(/1/i)).toBeInTheDocument()
    expect(screen.getByDisplayValue('prompt1')).toBeInTheDocument()
    expect(screen.getByText('True')).toBeInTheDocument()
    expect(screen.getByText('False')).toBeInTheDocument()
});

it('should show process title, stage number, stage type, prompt for Text stage', function () {
    const state ={
        processReducer: {
            processToTake: {
                title: 'title',
                stages: [
                    {prompt: 'prompt1', stageType: 'Boolean', stageNumber: 1},
                    {prompt: 'prompt2', stageType: 'Text', stageNumber: 2},
                    {prompt: 'prompt3', stageType: 'MultChoice', stageNumber: 3}
                ]}},
        userReducer: {
            responseToAdd: {
                userId: '',
                processId: '',
                stageId: '',
                username: '',
                stageType: '',
                stageNumber: '',
                answer: ''
            },
            loggedInUser: {username: 'brady', role: 'Editor'},
            users: [
                {username: 'brady', role: 'Editor'},
                {username: 'user', role: 'Follower'},
                {username: 'admin', role: 'Editor'}
            ]}}
    const staticStage = {
        id: 2,
        stageNumber: 2,
        prompt: 'prompt2',
        stageType: 'Text',
        answer: []
    }
    render(<Response _useSelector={fn => fn(state)} _useDispatch={() => {}} staticStage={staticStage}/>)
    expect(screen.getByDisplayValue('title')).toBeInTheDocument()
    expect(screen.getByText(/2/i)).toBeInTheDocument()
    expect(screen.getByDisplayValue('prompt2')).toBeInTheDocument()
});

it('should show process title, stage number, stage type, prompt, and answers for MultChoice stage', function () {
    const state ={
        processReducer: {
            processToTake: {
                title: 'title',
                stages: [
                    {prompt: 'prompt1', stageType: 'Boolean', stageNumber: 1},
                    {prompt: 'prompt2', stageType: 'Text', stageNumber: 2},
                    {prompt: 'prompt3', stageType: 'MultChoice',
                        stageNumber: 3, answerA: 'A', answerB: 'B', answerC: 'C', answerD: 'D'}
                ]}},
        userReducer: {
            responseToAdd: {
                userId: '',
                processId: '',
                stageId: '',
                username: '',
                stageType: '',
                stageNumber: '',
                answer: ''
            },
            loggedInUser: {username: 'brady', role: 'Editor'},
            users: [
                {username: 'brady', role: 'Editor'},
                {username: 'user', role: 'Follower'},
                {username: 'admin', role: 'Editor'}
            ]}}
    const staticStage = {
        id: 2,
        stageNumber: 3,
        prompt: 'prompt3',
        stageType: 'MultChoice',
        answers: {
            answerA: 'A',
            answerB: 'B',
            answerC: 'C',
            answerD: 'D'
        }}
    render(<Response _useSelector={fn => fn(state)} _useDispatch={() => {}} staticStage={staticStage}/>)
    expect(screen.getByDisplayValue('title')).toBeInTheDocument()
    expect(screen.getByText(/3/i)).toBeInTheDocument()
    expect(screen.getByDisplayValue('prompt3')).toBeInTheDocument()
    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
    expect(screen.getByText('C')).toBeInTheDocument()
    expect(screen.getByText('D')).toBeInTheDocument()
});