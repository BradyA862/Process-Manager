import {useDispatch, useSelector} from "react-redux";
import ProcessList from "../Shared/ProcessList";
import ViewProcessStages from "../Shared/ViewProcessStages";
import {initiateProcessList} from "../../reducers/processReducer";
import {initiateUserList} from "../../reducers/userReducer";
import {useEffect} from "react";
import ProcessResponse from "./ProcessResponse";

export default function Follower({
                                     _useSelector = useSelector,
                                     _useDispatch = useDispatch,
                                     ProcessListX = ProcessList,
                                     ViewProcessStagesX = ViewProcessStages,
                                     ProcessResponseX = ProcessResponse,
                                 }) {

    const dispatch = _useDispatch()

    const inProcess = _useSelector(state => state.processReducer.inProcess)
    const viewingProcess = _useSelector(state => state.processReducer.processToView)

    useEffect(() => {
        dispatch(initiateProcessList())
        dispatch(initiateUserList())
    })

    if (inProcess) {
        return <ProcessResponseX/>
    }

    else if (viewingProcess) {
        return <ViewProcessStagesX/>
    }

    else {
        return  <ProcessListX/>
    }

}