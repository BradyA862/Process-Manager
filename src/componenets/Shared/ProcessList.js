import {useSelector} from "react-redux";
import StaticProcessNoStages from "../Static/StaticProcessNoStages";

export default function ProcessList({
                                        _useSelector = useSelector,
                                        StaticProcessX = StaticProcessNoStages
}) {

    const processes = _useSelector(state => state.processReducer.processes)

    return <div>
        {processes.map(
            (staticProcess, index) => <div key={index}>
                <StaticProcessX staticProcess={staticProcess}/>
            </div>
        )}
    </div>
}