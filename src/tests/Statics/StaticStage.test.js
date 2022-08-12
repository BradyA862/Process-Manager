import {render, screen} from "@testing-library/react";
import StaticStage from "../../componenets/Static/StaticStage";



/** EDITOR BOOLEAN **/
it('should show stageNumber and prompt EditorBoolean', function () {
    const state = {
        userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Editor'
            }}}
    const staticStage = {
        id: 1,
        prompt: 'prompt',
        stageNumber: 2,
        stageType: 'Boolean'
    }
    render(<StaticStage staticStage={staticStage} _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText(2)).toBeInTheDocument()
    expect(screen.getByText('prompt')).toBeInTheDocument()
});

it('should show True and False radio buttons EditorBoolean', function () {
    const state = {
        userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Editor'
            }}}
    const staticStage = {
        id: 1,
        prompt: 'prompt',
        stageNumber: 2,
        stageType: 'Boolean'
    }
    render(<StaticStage staticStage={staticStage} _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText('True')).toBeInTheDocument()
    expect(screen.getByText('False')).toBeInTheDocument()
});

it('should show Edit and Delete buttons EditorBoolean', function () {
    const state = {
        userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Editor'
            }}}
    const staticStage = {
        id: 1,
        prompt: 'prompt',
        stageNumber: 2,
        stageType: 'Boolean'
    }
    render(<StaticStage staticStage={staticStage} _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText('Edit')).toBeInTheDocument()
    expect(screen.getByText('Delete')).toBeInTheDocument()
});

/** EDITOR MULTCHOICE **/
it('should show stageNumber and prompt EditorMultChoice', function () {
    const state = {
        userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Editor'
            }}}
    const staticStage = {
        id: 1,
        prompt: 'prompt',
        stageNumber: 2,
        stageType: 'MultChoice'
    }
    render(<StaticStage staticStage={staticStage} _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText(2)).toBeInTheDocument()
    expect(screen.getByText('prompt')).toBeInTheDocument()
});

it('should show A, B, C, and D radio buttons EditorMultChoice', function () {
    const state = {
        userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Editor'
            }}}
    const staticStage = {
        id: 1,
        prompt: 'prompt',
        stageNumber: 2,
        stageType: 'MultChoice'
    }
    render(<StaticStage staticStage={staticStage} _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
    expect(screen.getByText('C')).toBeInTheDocument()
    expect(screen.getByText('D')).toBeInTheDocument()
});

it('should show Edit and Delete buttons EditorMultChoice', function () {
    const state = {
        userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Editor'
            }}}
    const staticStage = {
        id: 1,
        prompt: 'prompt',
        stageNumber: 2,
        stageType: 'MultChoice'
    }
    render(<StaticStage staticStage={staticStage} _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText('Edit')).toBeInTheDocument()
    expect(screen.getByText('Delete')).toBeInTheDocument()
});

/** EDITOR TEXT **/
it('should show stageNumber and prompt EditorText', function () {
    const state = {
        userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Editor'
            }}}
    const staticStage = {
        id: 1,
        prompt: 'prompt',
        stageNumber: 2,
        stageType: 'Text'
    }
    render(<StaticStage staticStage={staticStage} _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText(2)).toBeInTheDocument()
    expect(screen.getByText('prompt')).toBeInTheDocument()
});

it('should show text input field EditorText', function () {
    const state = {
        userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Editor'
            }}}
    const staticStage = {
        id: 1,
        prompt: 'prompt',
        stageNumber: 2,
        stageType: 'Text'
    }
    render(<StaticStage staticStage={staticStage} _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByPlaceholderText('Answer')).toBeInTheDocument()
});

it('should show Edit and Delete buttons EditorText', function () {
    const state = {
        userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Editor'
            }}}
    const staticStage = {
        id: 1,
        prompt: 'prompt',
        stageNumber: 2,
        stageType: 'Text'
    }
    render(<StaticStage staticStage={staticStage} _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText('Edit')).toBeInTheDocument()
    expect(screen.getByText('Delete')).toBeInTheDocument()
});

/** FOLLOWER BOOLEAN **/
it('should show stageNumber and prompt FollowerBoolean', function () {
    const state = {
        userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Follower'
            }}}
    const staticStage = {
        id: 1,
        prompt: 'prompt',
        stageNumber: 2,
        stageType: 'Boolean'
    }
    render(<StaticStage staticStage={staticStage} _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText(2)).toBeInTheDocument()
    expect(screen.getByText('prompt')).toBeInTheDocument()
});

it('should show True and False radio buttons FollowerBoolean', function () {
    const state = {
        userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Follower'
            }}}
    const staticStage = {
        id: 1,
        prompt: 'prompt',
        stageNumber: 2,
        stageType: 'Boolean'
    }
    render(<StaticStage staticStage={staticStage} _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText('True')).toBeInTheDocument()
    expect(screen.getByText('False')).toBeInTheDocument()
});

/** FOLLOWER MULTCHOICE **/
it('should show stageNumber and prompt FollowerMultChoice', function () {
    const state = {
        userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Follower'
            }}}
    const staticStage = {
        id: 1,
        prompt: 'prompt',
        stageNumber: 2,
        stageType: 'MultChoice'
    }
    render(<StaticStage staticStage={staticStage} _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText(2)).toBeInTheDocument()
    expect(screen.getByText('prompt')).toBeInTheDocument()
});

it('should show A, B, C, and D radio buttons FollowerMultChoice', function () {
    const state = {
        userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Follower'
            }}}
    const staticStage = {
        id: 1,
        prompt: 'prompt',
        stageNumber: 2,
        stageType: 'MultChoice'
    }
    render(<StaticStage staticStage={staticStage} _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
    expect(screen.getByText('C')).toBeInTheDocument()
    expect(screen.getByText('D')).toBeInTheDocument()
});


/** FOLLOWER TEXT **/
it('should show stageNumber and prompt FollowerText', function () {
    const state = {
        userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Follower'
            }}}
    const staticStage = {
        id: 1,
        prompt: 'prompt',
        stageNumber: 2,
        stageType: 'Text'
    }
    render(<StaticStage staticStage={staticStage} _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText(2)).toBeInTheDocument()
    expect(screen.getByText('prompt')).toBeInTheDocument()
});

it('should show text input field FollowerText', function () {
    const state = {
        userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Follower'
            }}}
    const staticStage = {
        id: 1,
        prompt: 'prompt',
        stageNumber: 2,
        stageType: 'Text'
    }
    render(<StaticStage staticStage={staticStage} _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByPlaceholderText('Answer')).toBeInTheDocument()
});