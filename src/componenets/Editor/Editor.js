import {useDispatch, useSelector} from "react-redux";
import ProcessList from "../Shared/ProcessList";
import AddProcess from "./Process/AddProcess";
import AddStage from "./Stage/AddStage";
import EditProcess from "./Process/EditProcess";
import EditStage from "./Stage/EditStage";
import EditorHeader from "./EditorHeader";
import {useEffect} from "react";
import {initiateProcessList} from "../../reducers/processReducer";
import {initiateGetResponse, initiateUserList} from "../../reducers/userReducer";
import ViewProcessStages from "../Shared/ViewProcessStages";
import ResponseList from "./Responses/ResponseList";

export default function Editor({
                                   _useSelector = useSelector,
                                   _useDispatch = useDispatch,
                                   ProcessListX = ProcessList,
                                   AddProcessX = AddProcess,
                                   AddStageX = AddStage,
                                   EditProcessX = EditProcess,
                                   EditStageX = EditStage,
                                   EditorHeaderX = EditorHeader,
                                   ViewProcessStagesX = ViewProcessStages,
                                   ResponseListX = ResponseList
                               }) {

    const dispatch = _useDispatch()

    const processToAdd = _useSelector(state => state.processReducer.processToAdd)
    const stageToAdd = _useSelector(state => state.processReducer.stageToAdd)
    const processToEdit = _useSelector(state => state.processReducer.processToEdit)
    const stageToEdit = _useSelector(state => state.processReducer.stageToEdit)
    const processToView = _useSelector(state => state.processReducer.processToView)
    const viewingResponses = _useSelector(state => state.userReducer.viewingResponses)

    useEffect(() => {
        dispatch(initiateProcessList())
        dispatch(initiateGetResponse())
        dispatch(initiateUserList())
    })

    if (processToEdit) {
        return <EditProcessX/>

    } else if (processToAdd) {
        return <AddProcessX/>

    } else if (processToView) {
        if (stageToAdd) {
            return <AddStageX/>
        }

        if (stageToEdit) {
            return <EditStageX/>
        }

        return <ViewProcessStagesX/>

    } else if (viewingResponses) {
        return <ResponseListX/>

    } else{
        return <div>
            <EditorHeaderX/>
            <ProcessListX/>
        </div>
    }

}

