import {render, screen} from "@testing-library/react";
import ProcessList from "../../componenets/Shared/ProcessList";

it('should show 3 processes', function () {
    const state = {
        processReducer: {
            processes: [
                {title: 'title1', stages: []},
                {title: 'title2', stages: []},
                {title: 'title3', stages: []}
                ]}}
    const mock = ({staticProcess}) => <div>{staticProcess.title}</div>
    render(<ProcessList _useSelector={fn => fn(state)} StaticProcessX={mock}/>)
    expect(screen.getByText(state.processReducer.processes[0].title)).toBeInTheDocument()
    expect(screen.getByText(state.processReducer.processes[1].title)).toBeInTheDocument()
    expect(screen.getByText(state.processReducer.processes[2].title)).toBeInTheDocument()
});

