import {useDispatch, useSelector} from "react-redux";
import {CANCEL_ADD_STAGE, initiateAddMultStage, initiateAddStage, UPDATE_STAGE} from "../../../reducers/processReducer";
import {Button, Card, Col, Dropdown, Form, InputGroup, Row} from "react-bootstrap";
import {useState} from "react";

export default function AddStage({
                                     _useDispatch = useDispatch,
                                     _useSelector = useSelector
}) {

    const dispatch = _useDispatch()

    const stageToAdd = _useSelector(state => state.processReducer.stageToAdd)

    let [selected, setSelected] = useState('Stage Type')

    let [answerA, setAnswerA] = useState('')
    let [answerB, setAnswerB] = useState('')
    let [answerC, setAnswerC] = useState('')
    let [answerD, setAnswerD] = useState('')
    let [prompt, setPrompt] = useState('')
    let [type, setType] = useState('')
    let [number, setNumber] = useState(null)

    const answers = {answerA, answerB, answerC, answerD}

    console.log(answers)

    const stage = {
            prompt: prompt,
            type: type,
            number: number,
            answers: {
                answerA: answerA,
                answerB: answerB,
                answerC: answerC,
                answerD: answerD,
            }
    }
    console.log(stage)


    function updatePrompt(prompt) {
        dispatch({type: UPDATE_STAGE, payload: {...stageToAdd, prompt}})
        setPrompt(prompt)
    }

    function updateStageTypeBoolean() {
        dispatch({type: UPDATE_STAGE, payload: {...stageToAdd, type: 'Boolean'}})
        setSelected('Boolean')
        setType('Boolean')
    }

    function updateStageTypeMultChoice() {
        dispatch({type: UPDATE_STAGE, payload: {...stageToAdd, type: 'MultChoice'}})
        setSelected('Multiple Choice')
        setType('MultChoice')
    }

    function updateStageTypeText() {
        dispatch({type: UPDATE_STAGE, payload: {...stageToAdd, type: 'Text'}})
        setSelected('Text')
        setType('Text')
    }

    function updateStageNumber(string) {
        const number = parseInt(string)
        dispatch({type: UPDATE_STAGE, payload: {...stageToAdd, number}})
        setNumber(number)
    }

    function updateAnswerA(a) {
        setAnswerA(a)
    }

    function updateAnswerB(b) {
       setAnswerB(b)
    }

    function updateAnswerC(c) {
       setAnswerC(c)
    }

    function updateAnswerD(d) {
        setAnswerD(d)
    }

    function handleCancel() {
        dispatch({type: CANCEL_ADD_STAGE})
    }

    function handleAdd(event) {
        event.preventDefault()
        dispatch({type: UPDATE_STAGE, payload: stage})
        dispatch(initiateAddStage())
    }

    function handleAddMult(event) {
        event.preventDefault()
        dispatch({type: UPDATE_STAGE, payload: stage})
        dispatch(initiateAddMultStage())
    }

    if (stageToAdd.type === 'MultChoice') {
        return <Card>
            <Card.Header>
                <h1>Add A Stage</h1>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <InputGroup>
                            <InputGroup.Text>Prompt</InputGroup.Text>
                            <Form.Control placeholder='prompt' onChange={e => updatePrompt(e.target.value)} required={true}/>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>
                        <Dropdown>
                            <Dropdown.Toggle>
                                <div>{selected}</div>
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
                            <Form.Control placeholder='A' onChange={e => updateAnswerA(e.target.value)} required={true}/>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Text>Answer B</InputGroup.Text>
                            <Form.Control placeholder='B' onChange={e => updateAnswerB(e.target.value)} required={true}/>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Text>Answer C</InputGroup.Text>
                            <Form.Control placeholder='C' onChange={e => updateAnswerC(e.target.value)} required={true}/>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Text>Answer D</InputGroup.Text>
                            <Form.Control placeholder='D' onChange={e => updateAnswerD(e.target.value)} required={true}/>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>
                        <div>
                            <Form.Check inline label={1} type='radio' value={1} required={true} name='stageNumber' onChange={e => updateStageNumber(e.target.value)}/>
                            <Form.Check inline label={2} type='radio' value={2} required={true} name='stageNumber' onChange={e => updateStageNumber(e.target.value)}/>
                            <Form.Check inline label={3} type='radio' value={3} required={true} name='stageNumber' onChange={e => updateStageNumber(e.target.value)}/>
                        </div>
                    </Form.Group>
                    <Row>
                        <Col>
                            <Button onClick={handleCancel}>Cancel</Button>
                        </Col>
                        <Col>
                            <Button onClick={handleAddMult}>Add</Button>
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
                            <Form.Control placeholder='prompt' onChange={e => updatePrompt(e.target.value)} required={true}/>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>
                        <Dropdown>
                            <Dropdown.Toggle>
                                <div>{selected}</div>
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
                            <Form.Check inline label={1} type='radio' value={1} required={true} name='stageNumber' onChange={e => updateStageNumber(e.target.value)}/>
                            <Form.Check inline label={2} type='radio' value={2} required={true} name='stageNumber' onChange={e => updateStageNumber(e.target.value)}/>
                            <Form.Check inline label={3} type='radio' value={3} required={true} name='stageNumber' onChange={e => updateStageNumber(e.target.value)}/>
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