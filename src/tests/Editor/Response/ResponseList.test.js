import {render, screen} from "@testing-library/react";
import ResponseList from "../../../componenets/Editor/Responses/ResponseList";

it('should show 3 responses', function () {
    const state = {
        userReducer: {
            responses: [
                {answer: 'response1', title: 'title1'},
                {answer: 'response2', title: 'title2'},
                {answer: 'response3', title: 'title3'},
        ]}}
    const mock = ({staticResponse}) => <div>{staticResponse.answer}</div>
    render(<ResponseList StaticResponseX={mock} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText(state.userReducer.responses[0].answer)).toBeInTheDocument()
    expect(screen.getByText(state.userReducer.responses[1].answer)).toBeInTheDocument()
    expect(screen.getByText(state.userReducer.responses[2].answer)).toBeInTheDocument()
});