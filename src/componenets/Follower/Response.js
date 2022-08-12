import {useDispatch, useSelector} from "react-redux";
import {Button, Col, Form, Row} from "react-bootstrap";
import {EDIT_RESPONSE, initiateAddResponse} from "../../reducers/userReducer";

export default function Response({
                                     _useDispatch = useDispatch,
                                     _useSelector = useSelector,
                                     staticStage
                                 }) {

    const dispatch = _useDispatch()

    const process = _useSelector(state => state.processReducer.processToTake)
    const responseToAdd = _useSelector(state => state.userReducer.responseToAdd)
    const loggedInUser = _useSelector(state => state.userReducer.loggedInUser)
    const users = _useSelector(state => state.userReducer.users)
    const user = users.find(element => element.username === loggedInUser.username && element.role === loggedInUser.role)

    function handleSaveResponse() {
        alert("Answer Saved! You still need to submit your response")
        dispatch(initiateAddResponse())
    }

    function onResponseTextChange(change) {
        dispatch({type: EDIT_RESPONSE, responseToAdd: change})
    }

    function handleOnChange(change) {
        dispatch({type: EDIT_RESPONSE, responseToAdd: change})
    }

    const {
        id, stageNumber, prompt,
        stageType, answers
    } = staticStage ? staticStage : {}

    return <Form>
        <Form.Group as={Row}>
            <Form.Label column>
                Process
            </Form.Label>
            <Col>
                <Form.Control value={process.title} disabled={true}/>
            </Col>
        </Form.Group>

        <Form.Group as={Row}>
            <Form.Label column>
                Stage {stageNumber}
            </Form.Label>
            <Col>
                <Form.Control type='textarea' row={2} value={prompt} disabled={true}/>
            </Col>
        </Form.Group>

        <Form.Group as={Row}>
            {stageType === 'Boolean' &&
                <div key={'default-radio'} required={true}>
                    <Form.Check
                        inline
                        name='radio 1'
                        label="True"
                        value="True"
                        type="radio"
                        onChange={e => handleOnChange({
                            ...responseToAdd,
                            userId: user.id,
                            processId: process.id,
                            stageId: id,
                            username: loggedInUser.username,
                            stageType: stageType,
                            stageNumber: stageNumber,
                            answer: e.target.value
                        })}/>
                    <Form.Check
                        inline
                        name='radio 1'
                        label="False"
                        value="False"
                        type="radio"
                        onChange={e => handleOnChange({
                            ...responseToAdd,
                            userId: user.id,
                            processId: process.id,
                            stageId: id,
                            username: loggedInUser.username,
                            stageType: stageType,
                            stageNumber: stageNumber,
                            answer: e.target.value
                        })}/>
                </div>
            }
            {stageType === 'MultChoice' &&
                <div key={`default-radio`} required={true}>
                    <Form.Check
                        inline
                        name='radio 1'
                        label={answers.answerA}
                        value={answers.answerA}
                        type="radio"
                        onChange={e => handleOnChange({
                            ...responseToAdd,
                            userId: user.id,
                            processId: process.id,
                            stageId: id,
                            username: loggedInUser.username,
                            stageType: stageType,
                            stageNumber: stageNumber,
                            answer: e.target.value
                        })}/>
                    <Form.Check
                        inline
                        name='radio 1'
                        label={answers.answerB}
                        value={answers.answerB}
                        type="radio"
                        onChange={e => handleOnChange({
                            ...responseToAdd,
                            userId: user.id,
                            processId: process.id,
                            stageId: id,
                            username: loggedInUser.username,
                            stageType: stageType,
                            stageNumber: stageNumber,
                            answer: e.target.value
                        })}/>
                    <Form.Check
                        inline
                        name='radio 1'
                        label={answers.answerC}
                        value={answers.answerC}
                        type="radio"
                        onChange={e => handleOnChange({
                            ...responseToAdd,
                            userId: user.id,
                            processId: process.id,
                            stageId: id,
                            username: loggedInUser.username,
                            stageType: stageType,
                            stageNumber: stageNumber,
                            answer: e.target.value
                        })}/>
                    <Form.Check
                        inline
                        name='radio 1'
                        label={answers.answerD}
                        value={answers.answerD}
                        type="radio"
                        onChange={e => handleOnChange({
                            ...responseToAdd,
                            userId: user.id,
                            processId: process.id,
                            stageId: id,
                            username: loggedInUser.username,
                            stageType: stageType,
                            stageNumber: stageNumber,
                            answer: e.target.value
                        })}/>
                </div>
            }
            {stageType === 'Text' &&
                <Form.Control as="textarea" rows={1} placeholder='Enter response here' required={true}
                              onChange={e => onResponseTextChange({
                                  ...responseToAdd,
                                  userId: user.id,
                                  processId: process.id,
                                  stageId: id,
                                  username: loggedInUser.username,
                                  stageType: stageType,
                                  stageNumber: stageNumber,
                                  answer: e.target.value
                              })}/>}
        </Form.Group>
        <Button onClick={handleSaveResponse}>Save</Button>
    </Form>

    // if (staticStage.type === 'Boolean') {
    //     return <Form>
    //         <Form.Label
    //     </Form>
    // }
    // else if (staticStage.type === 'MultChoice') {
    //
    // }
    // else if (staticStage.type === 'Text') {
    //
    // }

}