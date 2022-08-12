export const START_ADD_PROCESS = 'START_ADD_PROCESS'
export const SUCCESS_ADD_PROCESS = 'SUCCESS_ADD_PROCESS'
export const FAILURE_ADD_PROCESS = 'FAILURE_ADD_PROCESS'
export const START_EDIT_PROCESS = 'START_EDIT_PROCESS'
export const SUCCESS_EDIT_PROCESS = 'SUCCESS_EDIT_PROCESS'
export const FAILURE_EDIT_PROCESS = 'FAILURE_EDIT_PROCESS'
export const START_DELETE_PROCESS = 'START_DELETE_PROCESS'
export const SUCCESS_DELETE_PROCESS = 'SUCCESS_DELETE_PROCESS'
export const FAILURE_DELETE_PROCESS = 'FAILURE_DELETE_PROCESS'
export const START_PROCESS_LIST = 'START_PROCESS_LIST'
export const SUCCESS_PROCESS_LIST = 'SUCCESS_PROCESS_LIST'
export const FAILURE_PROCESS_LIST = 'FAILURE_PROCESS_LIST'
export const START_ADD_STAGE = 'START_ADD_STAGE'
export const SUCCESS_ADD_STAGE = 'SUCCESS_ADD_STAGE'
export const FAILURE_ADD_STAGE = 'FAILURE_ADD_STAGE'
export const START_EDIT_STAGE = 'START_EDIT_STAGE'
export const SUCCESS_EDIT_STAGE = 'SUCCESS_EDIT_STAGE'
export const FAILURE_EDIT_STAGE = 'FAILURE_EDIT_STAGE'
export const START_DELETE_STAGE = 'START_DELETE_STAGE'
export const SUCCESS_DELETE_STAGE = 'SUCCESS_DELETE_STAGE'
export const FAILURE_DELETE_STAGE = 'FAILURE_DELETE_STAGE'
export const START_STAGE_LIST = 'START_STAGE_LIST'
export const SUCCESS_STAGE_LIST = 'SUCCESS_STAGE_LIST'
export const FAILURE_STAGE_LIST = 'FAILURE_STAGE_LIST'
export const VIEW_PROCESS = 'VIEW_PROCESS'
export const CANCEL_VIEW_PROCESS = 'CANCEL_VIEW_PROCESS'
export const EDIT_PROCESS = 'EDIT_PROCESS'
export const DELETE_PROCESS = 'DELETE_PROCESS'
export const ADD_PROCESS = 'ADD_PROCESS'
export const CANCEL_ADD_PROCESS = 'CANCEL_ADD_PROCESS'
export const UPDATE_TITLE = 'UPDATE_TITLE'
export const CANCEL_EDIT_PROCESS = 'CANCEL_EDIT_PROCESS'
export const UPDATE_STAGE = 'UPDATE_STAGE'
export const CANCEL_ADD_STAGE = 'CANCEL_ADD_STAGE'
export const CANCEL_EDIT_STAGE = 'CANCEL_EDIT_STAGE'
export const UPDATE_EDIT_STAGE = 'UPDATE_EDIT_STAGE'
export const ADD_STAGE = 'ADD_STAGE'
export const TAKE_PROCESS = 'TAKE_PROCESS'
export const DO_PROCESS = 'DO_PROCESS'
export const CANCEL_RESPONSE= 'CANCEL_RESPONSE'
export const EDIT_STAGE = 'EDIT_STAGE'
export const DELETE_STAGE = 'DELETE_STAGE'


const initialState = {
    processes: [],
    stages: [],
    addProcessPending: false,
    editProcessPending: false,
    deleteProcessPending: false,
    processListPending: false,
    addStagePending: false,
    editStagePending: false,
    deleteStagePending: false,
    stageListPending: false,
    processToAdd: null,
    processToEdit: null,
    processToDelete: null,
    stageToAdd: null,
    stageToEdit: null,
    stageToDelete: null,
    processToView: null,
    processToTake: null,
    inProcess: false
}

export default function processReducer(state = initialState, action) {

    switch (action?.type) {

        case VIEW_PROCESS:
            return {
                ...state,
                processToView: action.payload
            }

        case CANCEL_VIEW_PROCESS:
            return {
                ...state,
                processToView: null
            }

        case ADD_PROCESS:
            return {
                ...state,
                processToAdd: {
                    title: '',
                    stages: []
                }
            }

        case CANCEL_ADD_PROCESS:
            return {
                ...state,
                processToAdd: null
            }

        case UPDATE_TITLE:
            return {
                ...state,
                processToAdd: {
                    title: action.payload.title,
                    stages: []
                }
            }

        case START_ADD_PROCESS:
            return {
                ...state,
                addProcessPending: true
            }

        case SUCCESS_ADD_PROCESS:
            return {
                ...state,
                addProcessPending: false,
                processToAdd: null
            }

        case FAILURE_ADD_PROCESS:
            return {
                ...state,
                addProcessPending: false
            }

        case EDIT_PROCESS:
            return {
                ...state,
                processToEdit: action.payload
            }

        case CANCEL_EDIT_PROCESS:
            return {
                ...state,
                processToEdit: null
            }

        case START_EDIT_PROCESS:
            return {
                ...state,
                editProcessPending: true
            }

        case SUCCESS_EDIT_PROCESS:
            return {
                ...state,
                editProcessPending: false,
                processToEdit: null
            }

        case FAILURE_EDIT_PROCESS:
            return {
                ...state,
                editProcessPending: false
            }

        case DELETE_PROCESS:
            return {
                ...state,
                processToDelete: action.payload
            }

        case START_DELETE_PROCESS:
            return {
                ...state,
                deleteProcessPending: true
            }

        case SUCCESS_DELETE_PROCESS:
            return {
                ...state,
                deleteProcessPending: false
            }

        case FAILURE_DELETE_PROCESS:
            return {
                ...state,
                deleteProcessPending: false
            }

        case START_PROCESS_LIST:
            return {
                ...state,
                processListPending: true
            }

        case SUCCESS_PROCESS_LIST:
            return {
                ...state,
                processListPending: false,
                processes: action.payload
            }

        case FAILURE_PROCESS_LIST:
            return {
                ...state,
                processListPending: false
            }

        case ADD_STAGE:
            return {
                ...state,
                stageToAdd: {
                    processId: action.payload,
                    prompt: '',
                    type: '',
                    number: null,
                    answers: {
                        answerA: '',
                        answerB: '',
                        answerC: '',
                        answerD: ''
                    }}}

        case UPDATE_STAGE:
            return {
                ...state,
                stageToAdd: action.payload
            }

        case CANCEL_ADD_STAGE:
            return {
                ...state,
                stageToAdd: null
            }

        case START_ADD_STAGE:
            return {
                ...state,
                addStagePending: true
            }

        case SUCCESS_ADD_STAGE:
            return {
                ...state,
                addStagePending: false,
                stageToAdd: null
            }

        case FAILURE_ADD_STAGE:
            return {
                ...state,
                addStagePending: false
            }

        case CANCEL_EDIT_STAGE:
            return {
                ...state,
                stageToEdit: null
            }

        case UPDATE_EDIT_STAGE:
            return {
                ...state,
                stageToEdit: {
                    prompt: action.payload.prompt,
                    type: action.payload.type,
                    number: action.payload.number,
                    answers: {
                        answerA: action.payload.a,
                        answerB: action.payload.b,
                        answerC: action.payload.c,
                        answerD: action.payload.d,
                    }
                }
            }

        case START_EDIT_STAGE:
            return {
                ...state,
                editStagePending: true
            }

        case SUCCESS_EDIT_STAGE:
            return {
                ...state,
                editStagePending: false,
                stageToEdit: null
            }

        case FAILURE_EDIT_STAGE:
            return {
                ...state,
                editStagePending: false
            }

        case START_DELETE_STAGE:
            return {
                ...state,
                deleteStagePending: true
            }

        case SUCCESS_DELETE_STAGE:
            return {
                ...state,
                deleteStagePending: false
            }

        case FAILURE_DELETE_STAGE:
            return {
                ...state,
                deleteStagePending: false
            }

        case START_STAGE_LIST:
            return {
                ...state,
                stageListPending: true
            }

        case SUCCESS_STAGE_LIST:
            return {
                ...state,
                stageListPending: false,
                stages: action.payload
            }

        case FAILURE_STAGE_LIST:
            return {
                ...state,
                stageListPending: false
            }

        case TAKE_PROCESS:
            return {
                ...state,
                processToTake: action.payload
            }

        case DO_PROCESS:
            return {
                ...state,
                processToTake: action.payload,
                inProcess: true
            }

        case CANCEL_RESPONSE:
            return {
                ...state,
                processToTake: null,
                inProcess: false
            }

        case EDIT_STAGE:
            return {
                ...state,
                stageToEdit: action.payload
            }

        case DELETE_STAGE:
            return {
                ...state,
                stageToDelete: action.payload
            }

        default:
            return {
                ...state
            }
    }
}

export function initiateAddProcess(_fetch = fetch) {
    return async function addProcessSE(dispatch, getState) {
        dispatch({type: START_ADD_PROCESS})
        const token = getState().userReducer.loggedInUser.token
        const title = getState().processReducer.processToAdd.title
        const url = `http://localhost:8081/process/addProcess?token=${token}&title=${title}`
        const response = await _fetch(url)
        if (response.ok) {
            dispatch({type: SUCCESS_ADD_PROCESS})
        } else {
            dispatch({type: FAILURE_ADD_PROCESS})
        }
    }
}

export function initiateEditProcess(_fetch = fetch) {
    return async function editProcessSE(dispatch, getState) {
        dispatch({type: START_EDIT_PROCESS})
        const token = getState().userReducer.loggedInUser.token
        const processId = getState().processReducer.processToEdit.id
        const title = getState().processReducer.processToEdit.title
        const url = `http://localhost:8081/process/editProcess?token=${token}&processId=${processId}&title=${title}`
        const response = await _fetch(url)
        if (response.ok) {
            dispatch({type: SUCCESS_EDIT_PROCESS})
        } else {
            dispatch({type: FAILURE_EDIT_PROCESS})
        }
    }
}

export function initiateDeleteProcess(_fetch = fetch) {
    return async function deleteProcessSE(dispatch, getState) {
        dispatch({type: START_DELETE_PROCESS})
        const token = getState().userReducer.loggedInUser.token
        const processId = getState().processReducer.processToDelete
        const url = `http://localhost:8081/process/deleteProcess?token=${token}&processId=${processId}`
        const response = await _fetch(url)
        if (response.ok) {
            dispatch({type: SUCCESS_DELETE_PROCESS})
        } else {
            dispatch({type: FAILURE_DELETE_PROCESS})
        }
    }
}

export function initiateProcessList(_fetch = fetch) {
    return async function processListSE(dispatch, getState) {
        dispatch({type: START_PROCESS_LIST})
        const token = getState().userReducer.loggedInUser.token
        const url = `http://localhost:8081/process/processList?token=${token}`
        const response = await _fetch(url)
        if (response.ok) {
            const processList = await response.json()
            dispatch({type: SUCCESS_PROCESS_LIST, payload: processList})
        } else {
            dispatch({type: FAILURE_PROCESS_LIST})
        }
    }
}

export function initiateAddStage(_fetch = fetch) {
    return async function addStageSE(dispatch, getState) {
        dispatch({type: START_ADD_STAGE})
        const token = getState().userReducer.loggedInUser.token
        const processId = getState().processReducer.processToView
        const prompt = getState().processReducer.stageToAdd.prompt
        const stageType = getState().processReducer.stageToAdd.type
        const stageNumber = getState().processReducer.stageToAdd.number
        const url = `http://localhost:8081/process/addStage?token=${token}&processId=${processId}
        &prompt=${prompt}&stageType=${stageType}&stageNumber=${stageNumber}`
        const response = await _fetch(url)
        if (response.ok) {
            dispatch({type: SUCCESS_ADD_STAGE})
        } else {
            dispatch({type: FAILURE_ADD_STAGE})
        }
    }
}

export function initiateAddMultStage(_fetch = fetch) {
    return async function addMultStageSE(dispatch, getState) {
        dispatch({type: START_ADD_STAGE})
        const token = getState().userReducer.loggedInUser.token
        const processId = getState().processReducer.processToView
        const prompt = getState().processReducer.stageToAdd.prompt
        const stageType = getState().processReducer.stageToAdd.type
        const stageNumber = getState().processReducer.stageToAdd.number
        const answerA = getState().processReducer.stageToAdd.answers.answerA
        const answerB = getState().processReducer.stageToAdd.answers.answerB
        const answerC = getState().processReducer.stageToAdd.answers.answerC
        const answerD = getState().processReducer.stageToAdd.answers.answerD
        const url = `http://localhost:8081/process/addMultStage?token=${token}
        &processId=${processId}&prompt=${prompt}&stageType=${stageType}&stageNumber=${stageNumber}
        &answerA=${answerA}&answerB=${answerB}&answerC=${answerC}&answerD=${answerD}`
        const response = await _fetch(url)
        if (response.ok) {
            dispatch({type: SUCCESS_ADD_STAGE})
        } else {
            dispatch({type: FAILURE_ADD_STAGE})
        }
    }
}

export function initiateEditStage(_fetch = fetch) {
    return async function editStageSE(dispatch, getState) {
        dispatch({type: START_EDIT_STAGE})
        const token = getState().userReducer.loggedInUser.token
        const stageId = getState().processReducer.stageToEdit.id
        const prompt = getState().processReducer.stageToEdit.prompt
        const stageType = getState().processReducer.stageToEdit.type
        const stageNumber = getState().processReducer.stageToEdit.number
        const url = `http://localhost:8081/process/editStage?token=${token}&stageId=${stageId}
        &prompt=${prompt}&stageType=${stageType}&stageNumber=${stageNumber}`
        const response = await _fetch(url)
        if (response.ok) {
            dispatch({type: SUCCESS_EDIT_STAGE})
        } else {
            dispatch({type: FAILURE_EDIT_STAGE})
        }
    }
}

export function initiateDeleteStage(_fetch = fetch) {
    return async function deleteStageSE(dispatch, getState) {
        dispatch({type: START_DELETE_STAGE})
        const token = getState().userReducer.loggedInUser.token
        const stageId = getState().processReducer.stageToDelete
        const url = `http://localhost:8081/process/deleteStage?token=${token}&stageId=${stageId}`
        const response = await _fetch(url)
        if (response.ok) {
            dispatch({type: SUCCESS_DELETE_STAGE})
        } else {
            dispatch({type: FAILURE_DELETE_STAGE})
        }
    }
}

export function initiateStageList(_fetch = fetch) {
    return async function stageListSE(dispatch, getState) {
        dispatch({type: START_STAGE_LIST})
        const token = getState().userReducer.loggedInUser.token
        const id = getState().processReducer.processToView
        const url = `http://localhost:8081/process/stageList?token=${token}&processId=${id}`
        const response = await _fetch(url)
        if (response.ok) {
            const stageList = await response.json()
            dispatch({type: SUCCESS_STAGE_LIST, payload: stageList})
        } else {
            dispatch({type: FAILURE_STAGE_LIST})
        }
    }
}
