// noinspection JSCheckFunctionSignatures

import {Button, Card, Col, Dropdown, Form, InputGroup, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {CANCEL_EDIT_STAGE, initiateEditStage, UPDATE_EDIT_STAGE} from "../../../reducers/processReducer";

export default function EditStage({
                                      _useDispatch = useDispatch,
                                      _useSelector = useSelector
                                  }) {

    const dispatch = _useDispatch()
    const stageToEdit = _useSelector(state => state.processReducer.stageToEdit)
    const stageAnswers = stageToEdit.answers

    function updatePrompt(prompt) {
        dispatch({type: UPDATE_EDIT_STAGE, payload: {...stageToEdit, prompt}})
    }

    function updateStageTypeBoolean() {
        dispatch({type: UPDATE_EDIT_STAGE, payload: {...stageToEdit, type: 'Boolean'}})
    }

    function updateStageTypeMultChoice() {
        dispatch({type: UPDATE_EDIT_STAGE, payload: {...stageToEdit, type: 'MultChoice'}})
    }

    function updateStageTypeText() {
        dispatch({type: UPDATE_EDIT_STAGE, payload: {...stageToEdit, type: 'Text'}})
    }

    function updateStageNumber(number) {
        dispatch({type: UPDATE_EDIT_STAGE, payload: {...stageToEdit, number}})
    }

    function updateAnswerA(a) {
        dispatch({type: UPDATE_EDIT_STAGE, payload: {...stageAnswers, a}})
    }

    function updateAnswerB(b) {
        dispatch({type: UPDATE_EDIT_STAGE, payload: {...stageAnswers, b}})
    }

    function updateAnswerC(c) {
        dispatch({type: UPDATE_EDIT_STAGE, payload: {...stageAnswers, c}})
    }

    function updateAnswerD(d) {
        dispatch({type: UPDATE_EDIT_STAGE, payload: {...stageAnswers, d}})
    }

    function handleCancel() {
        dispatch({type: CANCEL_EDIT_STAGE})
    }

    function handleAdd(event) {
        event.preventDefault()
        dispatch(initiateEditStage())
    }

    if (stageToEdit.type === 'MultChoice') {
        return <Card>
            <Card.Header>
                <h1>Add A Stage</h1>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <InputGroup>
                            <InputGroup.Text>Prompt</InputGroup.Text>
                            <Form.Control placeholder='prompt' onChange={e => updatePrompt(e.target.value)}
                                          required={true}/>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>
                        <Dropdown>
                            <Dropdown.Toggle>
                                Stage Type
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={updateStageTypeBoolean}>Boolean</Dropdown.Item>
                                <Dropdown.Item onClick={updateStageTypeMultChoice}>Multiple Choice</Dropdown.Item>
                                <Dropdown.Item onClick={updateStageTypeText}>Text</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>
                    <Form.Group>
                        <InputGroup>
                            <InputGroup.Text>Answer A</InputGroup.Text>
                            <Form.Control placeholder='A' onChange={e => updateAnswerA(e.target.value)}
                                          required={true}/>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Text>Answer B</InputGroup.Text>
                            <Form.Control placeholder='B' onChange={e => updateAnswerB(e.target.value)}
                                          required={true}/>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Text>Answer C</InputGroup.Text>
                            <Form.Control placeholder='C' onChange={e => updateAnswerC(e.target.value)}
                                          required={true}/>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Text>Answer D</InputGroup.Text>
                            <Form.Control placeholder='D' onChange={e => updateAnswerD(e.target.value)}
                                          required={true}/>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>
                        <div>
                            <Form.Check inline label={'1'} type='radio' value={1} required={true}
                                        onChange={e => updateStageNumber(e.target.value)}/>
                            <Form.Check inline label={'2'} type='radio' value={2} required={true}
                                        onChange={e => updateStageNumber(e.target.value)}/>
                            <Form.Check inline label={'3'} type='radio' value={3} required={true}
                                        onChange={e => updateStageNumber(e.target.value)}/>
                        </div>
                    </Form.Group>
                    <Row>
                        <Col>
                            <Button onClick={handleCancel}>Cancel</Button>
                        </Col>
                        <Col>
                            <Button onClick={handleAdd}>Add</Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>

    } else {

        return <Card>
            <Card.Header>
                <h1>Add A Stage</h1>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <InputGroup>
                            <InputGroup.Text>Prompt</InputGroup.Text>
                            <Form.Control placeholder='prompt' onChange={e => updatePrompt(e.target.value)}
                                          required={true}/>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>
                        <Dropdown>
                            <Dropdown.Toggle>
                                Stage Type
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={updateStageTypeBoolean}>Boolean</Dropdown.Item>
                                <Dropdown.Item onClick={updateStageTypeMultChoice}>Multiple Choice</Dropdown.Item>
                                <Dropdown.Item onClick={updateStageTypeText}>Text</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>
                    <Form.Group>
                        <div>
                            <Form.Check inline label={1} type='radio' value={1} required={true}
                                        onChange={e => updateStageNumber(e.target.value)}/>
                            <Form.Check inline label={2} type='radio' value={2} required={true}
                                        onChange={e => updateStageNumber(e.target.value)}/>
                            <Form.Check inline label={3} type='radio' value={3} required={true}
                                        onChange={e => updateStageNumber(e.target.value)}/>
                        </div>
                    </Form.Group>
                    <Row>
                        <Col>
                            <Button onClick={handleCancel}>Cancel</Button>
                        </Col>
                        <Col>
                            <Button onClick={handleAdd}>Add</Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    }
}