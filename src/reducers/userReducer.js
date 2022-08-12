export const UPDATE_CREDENTIALS = 'UPDATE_CREDENTIALS'
export const UPDATE_ADD_USER = 'UPDATE_ADD_USER'
export const CANCEL_REGISTER = 'CANCEL_REGISTER'
export const DELETE_USER = 'DELETE_USER'
export const CANCEL_USER_LIST = 'CANCEL_USER_LIST'
export const EDIT_USER = 'EDIT_USER'
export const CANCEL_EDIT_USER = 'CANCEL_EDIT_USER'
export const VIEW_USERS = 'VIEW_USERS'
export const VIEW_RESPONSES = 'VIEW_RESPONSES'
export const CANCEL_VIEW_RESPONSES = 'CANCEL_VIEW_RESPONSES'
export const START_LOGIN = 'START_LOGIN'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'
export const FAILURE_LOGIN = 'FAILURE_LOGIN'
export const START_REGISTER = 'START_REGISTER'
export const SUCCESS_REGISTER = 'SUCCESS_REGISTER'
export const FAILURE_REGISTER = 'FAILURE_REGISTER'
export const START_EDIT_ROLE = 'START_EDIT_ROLE'
export const SUCCESS_EDIT_ROLE = 'SUCCESS_EDIT_ROLE'
export const FAILURE_EDIT_ROLE = 'FAILURE_EDIT_ROLE'
export const START_DELETE_USER = 'START_DELETE_USER'
export const SUCCESS_DELETE_USER = 'SUCCESS_DELETE_USER'
export const FAILURE_DELETE_USER = 'FAILURE_DELETE_USER'
export const START_USER_LIST = 'START_USER_LIST'
export const SUCCESS_USER_LIST = 'SUCCESS_USER_LIST'
export const FAILURE_USER_LIST = 'FAILURE_USER_LIST'
export const START_ADD_RESPONSE = 'START_ADD_RESPONSE'
export const SUCCESS_ADD_RESPONSE = 'SUCCESS_ADD_RESPONSE'
export const FAILURE_ADD_RESPONSE = 'FAILURE_ADD_RESPONSE'
export const START_GET_RESPONSES = 'START_GET_RESPONSES'
export const SUCCESS_GET_RESPONSES = 'SUCCESS_GET_RESPONSES'
export const FAILURE_GET_RESPONSES = 'FAILURE_GET_RESPONSES'
export const ADD_RESPONSE = 'ADD_RESPONSE'
export const EDIT_RESPONSE = 'EDIT_RESPONSE'
export const START_DELETE_RESPONSE = 'START_DELETE_RESPONSE'
export const SUCCESS_DELETE_RESPONSE = 'SUCCESS_DELETE_RESPONSE'
export const FAILURE_DELETE_RESPONSE = 'FAILURE_DELETE_RESPONSE'
export const DELETE_RESPONSE = 'DELETE_RESPONSE'
// export const = ''
// export const = ''

const initialState = {
    users: [], //tested
    loggedInUser: null, //tested
    credentials: {username: '', password: '', role: ''}, //tested
    addNewUser: {username: '', password: '', role: ''}, //tested
    isRegister: false, //tested
    loginPending: false, //tested
    registerPending: false, //tested
    editRolePending: false, //tested
    deleteUserPending: false, //tested
    userListPending: false, //tested
    viewingUsers: false, //tested
    userToDelete: null, //tested
    userToEdit: null, //tested
    viewingResponses: false, //tested
    responseToAdd: null, //tested
    addResponsePending: false, //tested
    getResponsePending: false, //tested
    responseUser: null, //tested
    responses: [], //tested
    responseToDelete: null, //tested
    deleteResponsePending: false //tested
}

export default function userReducer(state = initialState, action) {

    switch (action?.type) {

        case UPDATE_CREDENTIALS:
            return {
                ...state,
                credentials: {
                    username: action.payload.username,
                    password: action.payload.password,
                    role: action.payload.role
                }
            } //tested

        case START_LOGIN:
            return {
                ...state,
                loginPending: true
            } //tested

        case SUCCESS_LOGIN:
            return {
                ...state,
                loginPending: false,
                loggedInUser: {
                    username: state.credentials.username,
                    role: state.credentials.role,
                    token: action.payload
                }
            } //tested

        case FAILURE_LOGIN:
            return {
                ...state,
                loginPending: false
            } //tested

        case UPDATE_ADD_USER:
            return {
                ...state,
                addNewUser: {
                    username: action.payload.username,
                    password: action.payload.password,
                    role: action.payload.role
                }
            } //tested

        case CANCEL_REGISTER:
            return {
                ...state,
                isRegister: false,
                addNewUser: {
                    username: '',
                    password: '',
                    role: ''
                }
            } //tested

        case START_REGISTER:
            return {
                ...state,
                isRegister: true,
                registerPending: true
            } //tested

        case SUCCESS_REGISTER:
            return {
                ...state,
                registerPending: false,
                isRegister: false
            } //tested

        case FAILURE_REGISTER:
            return {
                ...state,
                registerPending: false
            } //tested

        case EDIT_USER:
            return {
                ...state,
                userToEdit: {
                    id: action.payload.id,
                    username: action.payload.username,
                    role: action.payload.role
                }
            } //tested

        case CANCEL_EDIT_USER:
            return {
                ...state,
                userToEdit: null
            } //tested

        case START_EDIT_ROLE:
            return {
                ...state,
                editRolePending: true
            } //tested

        case SUCCESS_EDIT_ROLE:
            return {
                ...state,
                editRolePending: false,
                userToEdit: null
            } //tested

        case FAILURE_EDIT_ROLE:
            return {
                ...state,
                editRolePending: false,
                userToEdit: null
            } //tested

        case DELETE_USER:
            return {
                ...state,
                userToDelete: action.payload
            } //tested

        case START_DELETE_USER:
            return {
                ...state,
                deleteUserPending: true
            } //tested

        case SUCCESS_DELETE_USER:
            return {
                ...state,
                deleteUserPending: false,
                userToDelete: false
            } //tested

        case FAILURE_DELETE_USER:
            return {
                ...state,
                deleteUserPending: false,
                userToDelete: false
            } //tested

        case VIEW_USERS:
            return {
                ...state,
                viewingUsers: true
            } //tested

        case CANCEL_USER_LIST:
            return {
                ...state,
                viewingUsers: false
            } //tested

        case START_USER_LIST:
            return {
                ...state,
                userListPending: true
            } //tested

        case SUCCESS_USER_LIST:
            return {
                ...state,
                userListPending: false,
                users: action.payload
            } //tested

        case FAILURE_USER_LIST:
            return {
                ...state,
                userListPending: false
            } //tested

        case VIEW_RESPONSES:
            return {
                ...state,
                viewingResponses: true,
            } //tested

        case CANCEL_VIEW_RESPONSES:
            return {
                ...state,
                viewingResponses: false
            } //tested

        case ADD_RESPONSE:
            return {
                ...state,
                responseToAdd: {
                    userId: '',
                    processId: '',
                    stageId: '',
                    username: '',
                    stageType: '',
                    stageNumber: '',
                    answer: '',
                }
            } //tested



        case EDIT_RESPONSE:
            return {
                ...state,
                responseToAdd: action.responseToAdd
            }

        case START_ADD_RESPONSE:
            return {
                ...state,
                addResponsePending: true
            } //tested

        case SUCCESS_ADD_RESPONSE:
            return {
                ...state,
                addResponsePending: false
            } //tested

        case FAILURE_ADD_RESPONSE:
            return {
                ...state,
                addResponsePending: false
            } //tested

        case START_GET_RESPONSES:
            return {
                ...state,
                getResponsePending: true
            } //tested

        case SUCCESS_GET_RESPONSES:
            return {
                ...state,
                getResponsePending: false,
                responses: action.payload
            } //tested

        case FAILURE_GET_RESPONSES:
            return {
                ...state,
                getResponsePending: false
            } //tested

        case DELETE_RESPONSE:
            return {
                ...state,
                responseToDelete: action.payload
            } //tested

        case START_DELETE_RESPONSE:
            return {
                ...state,
                deleteResponsePending: true
            } //tested

        case SUCCESS_DELETE_RESPONSE:
            return {
                ...state,
                deleteResponsePending: false
            } //tested

        case FAILURE_DELETE_RESPONSE:
            return {
                ...state,
                deleteResponsePending: false
            } //tested


        default:
            return {
                ...state
            }
    }
}

export function initiateLogin(_fetch = fetch) {
    return async function loginSE(dispatch, getState) {
        dispatch({type: START_LOGIN})
        const {username, password, role} = getState().userReducer.credentials
        const url = `http://localhost:8080/user/login?username=${username}&password=${password}&role=${role}`
        const response = await _fetch(url)
        if (response.ok) {
            const token = await response.json()
            dispatch({type: SUCCESS_LOGIN, payload: token})
        } else {
            dispatch({type: FAILURE_LOGIN})
        }
    }
} //tested

export function initiateRegister(_fetch = fetch) {
    return async function registerSE(dispatch, getState) {
        dispatch({type: START_REGISTER})
        const {username, password, role} = getState().userReducer.addNewUser
        let registerUrl = ''
        if (role === 'Editor') {
            registerUrl = `http://localhost:8080/user/registerEditor`
        } else {
            registerUrl = `http://localhost:8080/user/registerFollower`
        }
        const response = await _fetch(registerUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: `${username}`,
                password: `${password}`,
                role: `${role}`
            })
        })
        if (response.ok) {
            dispatch({type: SUCCESS_REGISTER})
        } else {
            dispatch({type: FAILURE_REGISTER})
        }
    }
} //tested

export function initiateEditRole(_fetch = fetch) {
    return async function editUserSE(dispatch, getState) {
        dispatch({type: START_EDIT_ROLE})
        const token = getState().userReducer.loggedInUser.token
        const id = getState().userReducer.userToEdit.id
        const role = getState().userReducer.userToEdit.role
        const url = `http://localhost:8080/user/editUser?token=${token}&id=${id}&role=${role}`
        const response = await _fetch(url)
        if (response.ok) {
            dispatch({type: SUCCESS_EDIT_ROLE})
        } else {
            dispatch({type: FAILURE_EDIT_ROLE})
        }
    }
} //tested

export function initiateDeleteUser(_fetch = fetch) {
    return async function deleteUserSE(dispatch, getState) {
        dispatch({type: START_DELETE_USER})
        const token = getState().userReducer.loggedInUser.token
        const id = getState().userReducer.userToDelete
        const url = `http://localhost:8080/user/deleteUser?token=${token}&id=${id}`
        const response = await _fetch(url)
        if (response.ok) {
            dispatch({type: SUCCESS_DELETE_USER})
        } else {
            dispatch({type: FAILURE_DELETE_USER})
        }
    }
} //tested

export function initiateUserList(_fetch = fetch) {
    return async function userListSE(dispatch, getState) {
        dispatch({type: START_USER_LIST})
        const token = getState().userReducer.loggedInUser.token
        const url = `http://localhost:8080/user/getAll?token=${token}`
        const response = await _fetch(url)
        if (response.ok) {
            const list = await response.json()
            dispatch({type: SUCCESS_USER_LIST, payload: list})
        } else {
            dispatch({type: FAILURE_USER_LIST})
        }
    }
} //tested

export function initiateGetResponse(_fetch = fetch) {
    return async function getResponseSE(dispatch, getState) {
        dispatch({type: START_GET_RESPONSES})
        const token = getState().userReducer.loggedInUser.token
        const url = `http://localhost:8080/user/getResponses?token=${token}`
        const response = await _fetch(url)
        if (response.ok) {
            const list = await response.json()
            dispatch({type: SUCCESS_GET_RESPONSES, payload: list})
        } else {
            dispatch({type: FAILURE_GET_RESPONSES})
        }
    }
} //tested

export function initiateAddResponse(_fetch = fetch) {
    return async function addResponseSE(dispatch, getState) {
        dispatch({type: START_ADD_RESPONSE})
        const token = getState().userReducer.loggedInUser.token
        const userId = getState().userReducer.responseToAdd.userId
        const processId = getState().userReducer.responseToAdd.processId
        const stageId = getState().userReducer.responseToAdd.stageId
        const username = getState().userReducer.responseToAdd.username
        const stageType = getState().userReducer.responseToAdd.stageType
        const stageNumber = getState().userReducer.responseToAdd.stageNumber
        const answer = getState().userReducer.responseToAdd.answer
        const url = `http://localhost:8080/user/addResponse?token=${token}&userId=${userId}&processId=${processId}&stageId=${stageId}
        &username=${username}&stageType=${stageType}&stageNumber=${stageNumber}&answer=${answer}`
        const response = await _fetch(url)
        if (response.ok) {
            dispatch({type: SUCCESS_ADD_RESPONSE})
        } else {
            dispatch({type: FAILURE_ADD_RESPONSE})
        }
    }
} //tested

export function initiateDeleteResponse(_fetch = fetch) {
    return async function deleteResponseSE(dispatch, getState) {
        dispatch({type: START_DELETE_RESPONSE})
        const token = getState().userReducer.loggedInUser.token
        const id = getState().userReducer.responseToDelete
        const url = `http://localhost:8080/user/deleteResponse?token=${token}&responseId=${id}`
        const response = await _fetch(url)
        if (response.ok) {
            dispatch({type: SUCCESS_DELETE_RESPONSE})
        } else {
            dispatch({type: FAILURE_DELETE_RESPONSE})
        }
    }
} //tested

