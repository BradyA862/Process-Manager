import {render, screen} from "@testing-library/react";
import StaticResponse from "../../componenets/Static/StaticResponse";

it('should show username, title, prompt, stageType, stageNumber, and answer', function () {
    const state = {
        processReducer: {
            processes: [{
                id: 1,
                title: 'title1',
                stages: [
                    {id: 2, prompt: 'prompt1', stageType: 'Boolean', stageNumber: 1, answer: 'answer1'},
                    {id: 3, prompt: 'prompt2', stageType: 'Text', stageNumber: 2, answer: 'answer2'},
                    {id: 4, prompt: 'prompt3', stageType: 'MultChoice', stageNumber: 3, answer: 'answer3'},
                ]},{
                id: 5,
                title: 'title2',
                stages: [
                    {id: 6, prompt: 'prompt4', stageType: 'Boolean', stageNumber: 1, answer: 'answer4'},
                    {id: 7, prompt: 'prompt5', stageType: 'Text', stageNumber: 2, answer: 'answer5'},
                    {id: 8, prompt: 'prompt6', stageType: 'MultChoice', stageNumber: 3, answer: 'answer6'},
                ]}],
        stages: [
            {id: 2, prompt: 'prompt1', stageType: 'Boolean', stageNumber: 1, answer: 'answer1'},
            {id: 3, prompt: 'prompt2', stageType: 'Text', stageNumber: 2, answer: 'answer2'},
            {id: 4, prompt: 'prompt3', stageType: 'MultChoice', stageNumber: 3, answer: 'answer3'},
            {id: 6, prompt: 'prompt4', stageType: 'Boolean', stageNumber: 1, answer: 'answer4'},
            {id: 7, prompt: 'prompt5', stageType: 'Text', stageNumber: 2, answer: 'answer5'},
            {id: 8, prompt: 'prompt6', stageType: 'MultChoice', stageNumber: 3, answer: 'answer6'}
        ]}}
    const staticResponse = {
        userId: 1,
        processId: 1,
        stageId: 2,
        username: 'brady',
        title: 'title1',
        prompt: 'prompt1',
        stageType: 'Boolean',
        stageNumber: 1,
        answer: 'answer1'
    }
    render(<StaticResponse _useSelector={fn => fn(state)} _useDispatch={() => {}} staticResponse={staticResponse}/>)
    expect(screen.getByText('brady')).toBeInTheDocument()
    expect(screen.getByText('title1')).toBeInTheDocument()
    expect(screen.getByText('prompt1')).toBeInTheDocument()
    expect(screen.getByText(/Boolean/i)).toBeInTheDocument()
    expect(screen.getByText(1)).toBeInTheDocument()
    expect(screen.getByText('answer1')).toBeInTheDocument()
});