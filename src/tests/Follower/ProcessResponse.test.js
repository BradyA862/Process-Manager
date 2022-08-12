import {render, screen} from "@testing-library/react";
import ProcessResponse from "../../componenets/Follower/ProcessResponse";
import userEvent from "@testing-library/user-event";
import {CANCEL_RESPONSE} from "../../reducers/processReducer";

it('should show 3 stages', function () {
    const state = {
        processReducer: {
            processToTake: {
                title: 'title',
                stages: [
                    {id: 1, prompt: 'prompt1'},
                    {id: 2, prompt: 'prompt2'},
                    {id: 3, prompt: 'prompt3'},
                ]
            }
        }
    }

    const mock = ({staticStage}) => <div>{staticStage.prompt}</div>
    render(<ProcessResponse _useDispatch={() => {
    }} _useSelector={fn => fn(state)} ResponseX={mock}/>)
    expect(screen.getByText(state.processReducer.processToTake.stages[0].prompt)).toBeInTheDocument()
    expect(screen.getByText(state.processReducer.processToTake.stages[1].prompt)).toBeInTheDocument()
    expect(screen.getByText(state.processReducer.processToTake.stages[2].prompt)).toBeInTheDocument()
});

it('should show Cancel button', function () {
    const state = {
        processReducer: {
            processToTake: {
                title: 'title',
                stages: [
                    {id: 1, prompt: 'prompt1'},
                    {id: 2, prompt: 'prompt2'},
                    {id: 3, prompt: 'prompt3'},
                ]
            }
        }
    }

    const mock = ({staticStage}) => <div>{staticStage.prompt}</div>
    render(<ProcessResponse _useDispatch={() => {
    }} _useSelector={fn => fn(state)} ResponseX={mock}/>)
    expect(screen.getByText('Cancel')).toBeInTheDocument()
});

it('should dispatch CANCEL_RESPONSE when Cancel button clicked', function () {
    const state = {
        processReducer: {
            processToTake: {
                title: 'title',
                stages: [
                    {id: 1, prompt: 'prompt1'},
                    {id: 2, prompt: 'prompt2'},
                    {id: 3, prompt: 'prompt3'},
                ]}}}
    const dispatch = jest.fn()
    const mock = ({staticStage}) => <div>{staticStage.prompt}</div>
    render(<ProcessResponse _useDispatch={() => dispatch} _useSelector={fn => fn(state)} ResponseX={mock}/>)
    userEvent.click(screen.getByText('Cancel'))
    expect(dispatch).toHaveBeenCalledWith({type: CANCEL_RESPONSE})
});
