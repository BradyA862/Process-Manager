import {render, screen} from "@testing-library/react";
import EditStage from "../../../componenets/Editor/Stage/EditStage";
import userEvent from "@testing-library/user-event";
import {CANCEL_EDIT_STAGE, UPDATE_EDIT_STAGE} from "../../../reducers/processReducer";

/** NOT MULT CHOICE **/

it('should show prompt input field', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: '',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => {}}/>)
    expect(screen.getByPlaceholderText('prompt')).toBeInTheDocument()
});

it('should update prompt when user types in input field', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: '',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    const dispatch = jest.fn()
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    const promptElement = screen.getByPlaceholderText('prompt')
    const prompt = 'Test'
    userEvent.type(promptElement, prompt)
    expect(dispatch).toHaveBeenCalledWith({type: UPDATE_EDIT_STAGE, payload: {
            prompt: 'Test',
            type: '',
            number: '',
            answers: {a: '', b: '', c: '', d: ''}
        }})
});

it('should show dropdown menu', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: '',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => {}}/>)
    expect(screen.getByText('Stage Type')).toBeInTheDocument()
});

it('should show Boolean, Multiple Choice, and Text when dropdown menu clicked', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: '',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => {}}/>)
    userEvent.click(screen.getByText('Stage Type'))
    expect(screen.getByText('Boolean')).toBeInTheDocument()
    expect(screen.getByText('Multiple Choice')).toBeInTheDocument()
    expect(screen.getByText('Text')).toBeInTheDocument()
});

it('should update stageType when Boolean in dropdown menu clicked', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: '',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    const dispatch = jest.fn()
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    userEvent.click(screen.getByText('Stage Type'))
    userEvent.click(screen.getByText('Boolean'))
    expect(dispatch).toHaveBeenCalledWith({type: UPDATE_EDIT_STAGE, payload: {
            prompt: '',
            type: 'Boolean',
            number: '',
            answers: {a: '', b: '', c: '', d: ''}
        }})
});

it('should update stageType when Multiple Choice in dropdown menu clicked', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: '',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    const dispatch = jest.fn()
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    userEvent.click(screen.getByText('Stage Type'))
    userEvent.click(screen.getByText('Multiple Choice'))
    expect(dispatch).toHaveBeenCalledWith({type: UPDATE_EDIT_STAGE, payload: {
            prompt: '',
            type: 'MultChoice',
            number: '',
            answers: {a: '', b: '', c: '', d: ''}
        }})
});

it('should update stageType when Text in dropdown menu clicked', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: '',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    const dispatch = jest.fn()
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    userEvent.click(screen.getByText('Stage Type'))
    userEvent.click(screen.getByText('Text'))
    expect(dispatch).toHaveBeenCalledWith({type: UPDATE_EDIT_STAGE, payload: {
            prompt: '',
            type: 'Text',
            number: '',
            answers: {a: '', b: '', c: '', d: ''}
        }})
});



it('should show stage number radio buttons 1, 2, and 3', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: '',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => {}}/>)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
});

it('should show Cancel and Add buttons', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: '',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => {}}/>)
    expect(screen.getByText('Cancel')).toBeInTheDocument()
    expect(screen.getByText('Add')).toBeInTheDocument()
});

it('should dispatch CANCEL_EDIT_STAGE when cancel is clicked', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: '',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    const dispatch = jest.fn()
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    userEvent.click(screen.getByText('Cancel'))
    expect(dispatch).toHaveBeenCalledWith({type: CANCEL_EDIT_STAGE})
});

it('should dispatch initiateEditStage when Add is clicked', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: '',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    const dispatch = jest.fn()
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    userEvent.click(screen.getByText('Add'))
    expect(typeof dispatch.mock.calls[0][0]).toBe('function')
});

/** MULT CHOICE STAGE **/
it('should show prompt input field MultChoice', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: 'MultChoice',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => {}}/>)
    expect(screen.getByPlaceholderText('prompt')).toBeInTheDocument()
});

it('should show update prompt when user types in input field MultChoice', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: 'MultChoice',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    const dispatch = jest.fn()
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    const promptElement = screen.getByPlaceholderText('prompt')
    const prompt = 'Test'
    userEvent.type(promptElement, prompt)
    expect(dispatch).toHaveBeenCalledWith({type: UPDATE_EDIT_STAGE, payload: {
            prompt: 'Test',
            type: 'MultChoice',
            number: '',
            answers: {a: '', b: '', c: '', d: ''}
        }})
});

it('should show dropdown menu MultChoice', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: 'MultChoice',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => {}}/>)
    expect(screen.getByText('Stage Type')).toBeInTheDocument()
});

it('should show Boolean, Multiple Choice, and Text when dropdown menu clicked MultChoice', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: 'MultChoice',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => {}}/>)
    userEvent.click(screen.getByText('Stage Type'))
    expect(screen.getByText('Boolean')).toBeInTheDocument()
    expect(screen.getByText('Multiple Choice')).toBeInTheDocument()
    expect(screen.getByText('Text')).toBeInTheDocument()
});

it('should update stageType when Boolean in dropdown menu clicked MultChoice', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: 'MultChoice',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    const dispatch = jest.fn()
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    userEvent.click(screen.getByText('Stage Type'))
    userEvent.click(screen.getByText('Boolean'))
    expect(dispatch).toHaveBeenCalledWith({type: UPDATE_EDIT_STAGE, payload: {
            prompt: '',
            type: 'Boolean',
            number: '',
            answers: {a: '', b: '', c: '', d: ''}
        }})
});

it('should update stageType when Multiple Choice in dropdown menu clicked MultChoice', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: 'MultChoice',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    const dispatch = jest.fn()
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    userEvent.click(screen.getByText('Stage Type'))
    userEvent.click(screen.getByText('Multiple Choice'))
    expect(dispatch).toHaveBeenCalledWith({type: UPDATE_EDIT_STAGE, payload: {
            prompt: '',
            type: 'MultChoice',
            number: '',
            answers: {a: '', b: '', c: '', d: ''}
        }})
});

it('should update stageType when Text in dropdown menu clicked MultChoice', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: 'MultChoice',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    const dispatch = jest.fn()
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    userEvent.click(screen.getByText('Stage Type'))
    userEvent.click(screen.getByText('Text'))
    expect(dispatch).toHaveBeenCalledWith({type: UPDATE_EDIT_STAGE, payload: {
            prompt: '',
            type: 'Text',
            number: '',
            answers: {a: '', b: '', c: '', d: ''}
        }})
});

it('should show stage number radio buttons 1, 2, and 3 MultChoice', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: 'MultChoice',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => {}}/>)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
});

it('should show Cancel and Add buttons MultChoice', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: 'MultChoice',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => {}}/>)
    expect(screen.getByText('Cancel')).toBeInTheDocument()
    expect(screen.getByText('Add')).toBeInTheDocument()
});

it('should dispatch CANCEL_EDIT_STAGE when cancel is clicked MultChoice', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: 'MultChoice',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    const dispatch = jest.fn()
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    userEvent.click(screen.getByText('Cancel'))
    expect(dispatch).toHaveBeenCalledWith({type: CANCEL_EDIT_STAGE})
});

it('should dispatch initiateEditStage when Add is clicked MultChoice', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: 'MultChoice',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    const dispatch = jest.fn()
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    userEvent.click(screen.getByText('Add'))
    expect(typeof dispatch.mock.calls[0][0]).toBe('function')
});

it('should show input fields for A, B, C, and D MultChoice', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: 'MultChoice',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => {}}/>)
    expect(screen.getByPlaceholderText('A')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('B')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('C')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('D')).toBeInTheDocument()
});

it('should show update answer A when user types in input field MultChoice', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: 'MultChoice',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    const dispatch = jest.fn()
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    const answerElement = screen.getByPlaceholderText('A')
    const answer = 'Test'
    userEvent.type(answerElement, answer)
    expect(dispatch).toHaveBeenCalledWith({type: UPDATE_EDIT_STAGE, payload: {a: 'Test', b: '', c: '', d: ''}
    })
});

it('should show update answer B when user types in input field MultChoice', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: 'MultChoice',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    const dispatch = jest.fn()
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    const answerElement = screen.getByPlaceholderText('B')
    const answer = 'Test'
    userEvent.type(answerElement, answer)
    expect(dispatch).toHaveBeenCalledWith({type: UPDATE_EDIT_STAGE, payload: {a: '', b: 'Test', c: '', d: ''}
    })
});

it('should show update answer C when user types in input field MultChoice', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: 'MultChoice',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    const dispatch = jest.fn()
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    const answerElement = screen.getByPlaceholderText('C')
    const answer = 'Test'
    userEvent.type(answerElement, answer)
    expect(dispatch).toHaveBeenCalledWith({type: UPDATE_EDIT_STAGE, payload: {a: '', b: '', c: 'Test', d: ''}
    })
});

it('should show update answer D when user types in input field MultChoice', function () {
    const state = {
        processReducer: {
            stageToEdit: {
                prompt: '',
                type: 'MultChoice',
                number: '',
                answers: {a: '', b: '', c: '', d: ''}
            }}}
    const dispatch = jest.fn()
    render(<EditStage _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    const answerElement = screen.getByPlaceholderText('D')
    const answer = 'Test'
    userEvent.type(answerElement, answer)
    expect(dispatch).toHaveBeenCalledWith({type: UPDATE_EDIT_STAGE, payload: {a: '', b: '', c: '', d: 'Test'}
    })
});
