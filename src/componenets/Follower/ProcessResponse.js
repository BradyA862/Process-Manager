import {useDispatch, useSelector} from "react-redux";
import Response from "./Response";
import {Button} from "react-bootstrap";
import {CANCEL_RESPONSE} from "../../reducers/processReducer";


export default function ProcessResponse({
                                            _useDispatch = useDispatch,
                                            _useSelector = useSelector,
                                            ResponseX = Response
                                        }) {

    const dispatch = _useDispatch()

    const stages = _useSelector(state => state.processReducer.processToTake.stages)

    function CancelResponse() {
        dispatch({type: CANCEL_RESPONSE})
    }

    return <div>
        {stages.map(
            (staticStage, index) => <div key={index}>
                <ResponseX staticStage={staticStage}/>
            </div>)
        }
        <Button onClick={CancelResponse}>Cancel</Button>
    </div>

}