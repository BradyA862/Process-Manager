import {render, screen} from "@testing-library/react";
import ViewProcessStages from "../../componenets/Shared/ViewProcessStages";

it('should show title and 3 stages Editor', function () {
    const state = {
        processReducer: {
            processes: [
                {
                    id: 1,
                    title: 'title1',
                    stages: [{id: 1, prompt: 'stage1'}, {id: 2, prompt: 'stage2'}, {id: 3, prompt: 'stage3'}]
                },
                {
                    id: 2,
                    title: 'title2',
                    stages: [{id: 4, prompt: 'stage4'}, {id: 5, prompt: 'stage5'}, {id: 6, prompt: 'stage6'}]
                },
                {
                    id: 3,
                    title: 'title3',
                    stages: [{id: 7, prompt: 'stage7'}, {id: 7, prompt: 'stage7'}, {id: 9, prompt: 'stage9'}]
                }
            ],
            processToView: 1,
            stages: [{id: 1, prompt: 'stage1'}, {id: 2, prompt: 'stage2'}, {id: 3, prompt: 'stage3'},
                {id: 4, prompt: 'stage4'}, {id: 5, prompt: 'stage5'}, {id: 6, prompt: 'stage6'},
                {id: 7, prompt: 'stage7'}, {id: 8, prompt: 'stage8'}, {id: 9, prompt: 'stage9'}]
        }, userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Editor'
            }
        }
    }
    const dispatch = jest.fn()
    const mock = ({staticStage}) => <div>{staticStage.prompt}</div>
    render(<ViewProcessStages StaticStageX={mock} _useDispatch={() => dispatch} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText('title1')).toBeInTheDocument()
    expect(screen.getByText(state.processReducer.processes[0].stages[0].prompt)).toBeInTheDocument()
    expect(screen.getByText(state.processReducer.processes[0].stages[1].prompt)).toBeInTheDocument()
    expect(screen.getByText(state.processReducer.processes[0].stages[2].prompt)).toBeInTheDocument()
});

it('should show Add Stage and Back button Editor', function () {
    const state = {
        processReducer: {
            processes: [
                {
                    id: 1,
                    title: 'title1',
                    stages: [{id: 1, prompt: 'stage1'}, {id: 2, prompt: 'stage2'}, {id: 3, prompt: 'stage3'}]
                },
                {
                    id: 2,
                    title: 'title2',
                    stages: [{id: 4, prompt: 'stage4'}, {id: 5, prompt: 'stage5'}, {id: 6, prompt: 'stage6'}]
                },
                {
                    id: 3,
                    title: 'title3',
                    stages: [{id: 7, prompt: 'stage7'}, {id: 7, prompt: 'stage7'}, {id: 9, prompt: 'stage9'}]
                }
            ],
            processToView: 1,
            stages: [{id: 1, prompt: 'stage1'}, {id: 2, prompt: 'stage2'}, {id: 3, prompt: 'stage3'},
                {id: 4, prompt: 'stage4'}, {id: 5, prompt: 'stage5'}, {id: 6, prompt: 'stage6'},
                {id: 7, prompt: 'stage7'}, {id: 8, prompt: 'stage8'}, {id: 9, prompt: 'stage9'}]
        }, userReducer: {
            loggedInUser: {
                username: 'brady',
                role: 'Editor'
            }
        }
    }
    const dispatch = jest.fn()
    const mock = ({staticStage}) => <div>{staticStage.prompt}</div>
    render(<ViewProcessStages StaticStageX={mock} _useDispatch={() => dispatch} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText('Add Stage')).toBeInTheDocument()
    expect(screen.getByText('Back')).toBeInTheDocument()
});
