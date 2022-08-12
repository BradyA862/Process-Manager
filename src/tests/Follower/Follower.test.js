import {render, screen} from "@testing-library/react";
import Follower from "../../componenets/Follower/Follower";

it('should show ProcessList by default', function () {
    const state = {
        processReducer: {
            inProcess: false,
            processToView: null
        }}
    const processList = 'processList'
    const header = 'header'
    const mockList = () => <div>{processList}</div>
    const dispatch = jest.fn()
    render(<Follower _useSelector={fn => fn(state)} _useDispatch={() => dispatch} ProcessListX={mockList}/>)
    expect(screen.getByText('processList')).toBeInTheDocument()
});

it('should show ViewProcessStages when processToView not null', function () {
    const state = {
        processReducer: {
            inProcess: false,
            processToView: 1
        }}
    const processToView = 'expected'
    const mock = () => <div>{processToView}</div>
    const dispatch = jest.fn()
    render(<Follower _useSelector={fn => fn(state)} _useDispatch={() => dispatch} ViewProcessStagesX={mock}/>)
    expect(screen.getByText('expected')).toBeInTheDocument()
});

it('should show ProcessResponse when inProcess true', function () {
    const state = {
        processReducer: {
            inProcess: true,
            processToView: null
        }}
    const process = 'expected'
    const mock = () => <div>{process}</div>
    const dispatch = jest.fn()
    render(<Follower _useSelector={fn => fn(state)} _useDispatch={() => dispatch} ProcessResponseX={mock}/>)
    expect(screen.getByText('expected')).toBeInTheDocument()
});