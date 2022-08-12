import userReducer, {
    ADD_RESPONSE,
    CANCEL_EDIT_USER,
    CANCEL_REGISTER,
    CANCEL_USER_LIST,
    CANCEL_VIEW_RESPONSES, DELETE_RESPONSE,
    DELETE_USER,
    EDIT_USER,
    FAILURE_ADD_RESPONSE,
    FAILURE_DELETE_RESPONSE,
    FAILURE_DELETE_USER,
    FAILURE_EDIT_ROLE,
    FAILURE_GET_RESPONSES,
    FAILURE_LOGIN,
    FAILURE_REGISTER,
    FAILURE_USER_LIST,
    initiateAddResponse, initiateDeleteResponse,
    initiateDeleteUser,
    initiateEditRole,
    initiateGetResponse,
    initiateLogin,
    initiateRegister,
    initiateUserList,
    START_ADD_RESPONSE, START_DELETE_RESPONSE,
    START_DELETE_USER,
    START_EDIT_ROLE,
    START_GET_RESPONSES,
    START_LOGIN,
    START_REGISTER,
    START_USER_LIST,
    SUCCESS_ADD_RESPONSE,
    SUCCESS_DELETE_RESPONSE,
    SUCCESS_DELETE_USER,
    SUCCESS_EDIT_ROLE,
    SUCCESS_GET_RESPONSES,
    SUCCESS_LOGIN,
    SUCCESS_REGISTER,
    SUCCESS_USER_LIST,
    UPDATE_ADD_USER,
    UPDATE_CREDENTIALS,
    VIEW_RESPONSES,
    VIEW_USERS
} from "../../reducers/userReducer";

/** INITIAL STATE **/

it('should start with users empty', function () {
    const state = userReducer()
    expect(state.users.length).toBe(0)
});

it('should start with responses empty', function () {
    const state = userReducer()
    expect(state.responses.length).toBe(0)
});

it('should start with loggedInUser null', function () {
    const state = userReducer()
    expect(state.loggedInUser).toBeNull()
});

it('should start with responseToAdd null', function () {
    const state = userReducer()
    expect(state.responseToAdd).toBeNull()
});

it('should start with responseUser null', function () {
    const state = userReducer()
    expect(state.responseUser).toBeNull()
});

it('should start with credentials blank', function () {
    const state = userReducer()
    expect(state.credentials).toStrictEqual({
        username: '',
        password: '',
        role: ''
    })});

it('should start with addNewUser blank', function () {
    const state = userReducer()
    expect(state.addNewUser).toStrictEqual({
        username: '',
        password: '',
        role: ''
    })});

it('should start with isRegister false', function () {
    const state = userReducer()
    expect(state.isRegister).toBe(false)
});

it('should start with addResponsePending false', function () {
    const state = userReducer()
    expect(state.addResponsePending).toBe(false)
});

it('should start with getResponsePending false', function () {
    const state = userReducer()
    expect(state.getResponsePending).toBe(false)
});

it('should start with viewingResponses false', function () {
    const state = userReducer()
    expect(state.viewingResponses).toBe(false)
});

it('should start with loginPending false', function () {
    const state = userReducer()
    expect(state.loginPending).toBe(false)
});

it('should start with registerPending false', function () {
    const state = userReducer()
    expect(state.registerPending).toBe(false)
});

it('should start with editRolePending false', function () {
    const state = userReducer()
    expect(state.editRolePending).toBe(false)
});

it('should start with deleteUserPending false', function () {
    const state = userReducer()
    expect(state.deleteUserPending).toBe(false)
});

it('should start with userListPending false', function () {
    const state = userReducer()
    expect(state.userListPending).toBe(false)
});

it('should start with viewingUsers false', function () {
    const state = userReducer()
    expect(state.viewingUsers).toBe(false)
});

it('should start with userToDelete null', function () {
    const state = userReducer()
    expect(state.userToDelete).toBeNull()
});

it('should start with userToEdit null', function () {
    const state = userReducer()
    expect(state.userToEdit).toBeNull()
});

it('should start with responseToDelete null', function () {
    const state = userReducer()
    expect(state.responseToDelete).toBeNull()
});

it('should start with deleteResponsePending false', function () {
    const state = userReducer()
    expect(state.deleteResponsePending).toBe(false)
});

/** SWITCH **/

it('should set loginPending true on START_LOGIN', function () {
    const initialState = userReducer()
    const state = userReducer(initialState, {type: START_LOGIN})
    expect(state.loginPending).toBe(true)
});

it('should set registerPending true on START_REGISTER', function () {
    const initialState = userReducer()
    const state = userReducer(initialState, {type: START_REGISTER})
    expect(state.registerPending).toBe(true)
});

it('should set editRolePending true on START_EDIT_ROLE', function () {
    const initialState = userReducer()
    const state = userReducer(initialState, {type: START_EDIT_ROLE})
    expect(state.editRolePending).toBe(true)
});

it('should set deleteUserPending true on START_DELETE_USER', function () {
    const initialState = userReducer()
    const state = userReducer(initialState, {type: START_DELETE_USER})
    expect(state.deleteUserPending).toBe(true)
});

it('should set userListPending true on START_USER_LIST', function () {
    const initialState = userReducer()
    const state = userReducer(initialState, {type: START_USER_LIST})
    expect(state.userListPending).toBe(true)
});

it('should set loginPending false on FAILURE_LOGIN', function () {
    const initialState = {
        loginPending: true
    }
    const state = userReducer(initialState, {type: FAILURE_LOGIN})
    expect(state.loginPending).toBe(false)
});

it('should set registerPending false on FAILURE_REGISTER', function () {
    const initialState = {
        registerPending: true
    }
    const state = userReducer(initialState, {type: FAILURE_REGISTER})
    expect(state.registerPending).toBe(false)
});

it('should set editRolePending false on FAILURE_EDIT_ROLE', function () {
    const initialState = {
        editRolePending: true
    }
    const state = userReducer(initialState, {type: FAILURE_EDIT_ROLE})
    expect(state.editRolePending).toBe(false)
});

it('should set deleteUserPending false on FAILURE_DELETE_USER', function () {
    const initialState = {
        deleteUserPending: true
    }
    const state = userReducer(initialState, {type: FAILURE_DELETE_USER})
    expect(state.deleteUserPending).toBe(false)
});

it('should set userListPending false on FAILURE_USER_LIST', function () {
    const initialState = {
        userListPending: true
    }
    const state = userReducer(initialState, {type: FAILURE_USER_LIST})
    expect(state.userListPending).toBe(false)
});

it('should set loginPending false on SUCCESS_LOGIN', function () {
    const initialState = {
        loginPending: true,
        credentials: {
            username: 'brady',
            password: 'mypass',
            role: 'Editor'}}
    const state = userReducer(initialState, {type: SUCCESS_LOGIN, payload: 'token'})
    expect(state.loginPending).toBe(false)
    expect(state.loggedInUser).toStrictEqual({
        username: 'brady',
        role: 'Editor',
        token: 'token'
        })});

it('should set registerPending false on SUCCESS_REGISTER', function () {
    const initialState = {
        registerPending: true
    }
    const state = userReducer(initialState, {type: SUCCESS_REGISTER})
    expect(state.registerPending).toBe(false)
});

it('should set editRolePending false on SUCCESS_EDIT_ROLE', function () {
    const initialState = {
        editRolePending: true
    }
    const state = userReducer(initialState, {type: SUCCESS_EDIT_ROLE})
    expect(state.editRolePending).toBe(false)
});

it('should set deleteUserPending false on SUCCESS_DELETE_USER', function () {
    const initialState = {
        deleteUserPending: true
    }
    const state = userReducer(initialState, {type: SUCCESS_DELETE_USER})
    expect(state.deleteUserPending).toBe(false)
});

it('should set userListPending false on SUCCESS_USER_LIST', function () {
    const initialState = {
        userListPending: true
    }
    const state = userReducer(initialState, {type: SUCCESS_USER_LIST})
    expect(state.userListPending).toBe(false)
});

it('should set credentials on UPDATE_CREDENTIALS', function () {
    const initialState = userReducer()
    initialState.credentials = {username: '', password: '', role: ''}
    const state = userReducer(initialState, {type: UPDATE_CREDENTIALS, payload: {username: 'brady', password: 'mypass', role: 'Editor'}})
    expect(state.credentials.username).toBe('brady')
    expect(state.credentials.password).toBe('mypass')
    expect(state.credentials.role).toBe('Editor')
});

it('should set addNewUser on UPDATE_ADD_USER', function () {
    const initialState = userReducer()
    initialState.addNewUser = {username: '', password: '', role: ''}
    const state = userReducer(initialState, {type: UPDATE_ADD_USER, payload: {username: 'brady', password: 'mypass', role: 'Editor'}})
    expect(state.addNewUser.username).toBe('brady')
    expect(state.addNewUser.password).toBe('mypass')
    expect(state.addNewUser.role).toBe('Editor')
});

it('should set isRegister false and addNewUser null on CANCEL_REGISTER', function () {
    const initialState = {
        isRegister: true,
        addNewUser: {
            username: 'brady',
            password: 'mypass',
            role: 'Editor'
        }}
    const state = userReducer(initialState, {type: CANCEL_REGISTER})
    expect(state.isRegister).toBe(false)
    expect(state.addNewUser.username).toBe('')
    expect(state.addNewUser.password).toBe('')
    expect(state.addNewUser.role).toBe('')
});

it('should set responseToAdd on ADD_RESPONSE', function () {
    const initialState = userReducer()
    const state = userReducer(initialState, {type: ADD_RESPONSE,
        payload: {userId: '', processId: '', stageId: '', username: '', stageType: '', stageNumber: '', answer: ''}})
    expect(state.responseToAdd.userId).toBe('')
    expect(state.responseToAdd.processId).toBe('')
    expect(state.responseToAdd.stageId).toBe('')
    expect(state.responseToAdd.username).toBe('')
    expect(state.responseToAdd.stageType).toBe('')
    expect(state.responseToAdd.stageNumber).toBe('')
    expect(state.responseToAdd.answer).toBe('')
});

it('should set addResponsePending false on START_ADD_RESPONSE', function () {
    const initialState = userReducer()
    const state = userReducer(initialState, {type: START_ADD_RESPONSE})
    expect(state.addResponsePending).toBe(true)
});

it('should set addResponsePending false on SUCCESS_ADD_RESPONSE', function () {
    const initialState = {
        addResponsePending: true
    }
    const state = userReducer(initialState, {type: SUCCESS_ADD_RESPONSE})
    expect(state.addResponsePending).toBe(false)
});

it('should set addResponsePending false on FAILURE_ADD_RESPONSE', function () {
    const initialState = {
        addResponsePending: true
    }
    const state = userReducer(initialState, {type: FAILURE_ADD_RESPONSE})
    expect(state.addResponsePending).toBe(false)
});

it('should set getResponsePending false on START_GET_RESPONSES', function () {
    const initialState = userReducer()
    const state = userReducer(initialState, {type: START_GET_RESPONSES})
    expect(state.getResponsePending).toBe(true)
});

it('should set addResponsePending false and responses on SUCCESS_GET_RESPONSES', function () {
    const initialState = {
        getResponsePending: true
    }
    const list = ['1', '2', '3']
    const state = userReducer(initialState, {type: SUCCESS_GET_RESPONSES, payload: list})
    expect(state.getResponsePending).toBe(false)
    expect(state.responses.length).toBe(3)
});

it('should set getResponsePending false on FAILURE_GET_RESPONSES', function () {
    const initialState = {
        getResponsePending: true
    }
    const state = userReducer(initialState, {type: FAILURE_GET_RESPONSES})
    expect(state.getResponsePending).toBe(false)
});

// it('should set responseToAdd on ADD_RESPONSE', function () {
//     const initialState = userReducer()
//     const state = userReducer(initialState, {type: ADD_RESPONSE,
//         payload: {userId: 1, processId: 2, stageId: 3, username: 'brady', stageType: 'Boolean', stageNumber: 3, answer: 'answer'}})
//     expect(state.responseToAdd.userId).toBe(1)
//     expect(state.responseToAdd.processId).toBe(2)
//     expect(state.responseToAdd.stageId).toBe(3)
//     expect(state.responseToAdd.username).toBe('brady')
//     expect(state.responseToAdd.stageType).toBe('Boolean')
//     expect(state.responseToAdd.stageNumber).toBe(3)
//     expect(state.responseToAdd.answer).toBe('answer')
// });

it('should set userToEdit on EDIT_USER', function () {
    const initialState = userReducer()
    const state = userReducer(initialState, {type: EDIT_USER,
        payload: {id: 1, username: 'brady', role: 'Editor'}})
    expect(state.userToEdit.id).toBe(1)
    expect(state.userToEdit.username).toBe('brady')
    expect(state.userToEdit.role).toBe('Editor')
});

it('should set userToEdit null on EDIT_USER', function () {
    const initialState = {
        userReducer: {
            userToEdit: {
                id: 1,
                username: 'brady',
                role: 'Editor'
            }}}
    const state = userReducer(initialState, {type: CANCEL_EDIT_USER})
    expect(state.userToEdit).toBeNull()
});

it('should set userToDelete on DELETE_USER', function () {
    const initialState = userReducer()
    const state = userReducer(initialState, {type: DELETE_USER, payload: 1})
    expect(state.userToDelete).toBe(1)
});

it('should set viewingUsers false on CANCEL_USER_LIST', function () {
    const initialState = {
        userReducer: {
            viewingUsers: true
        }}
    const state = userReducer(initialState, {type: CANCEL_USER_LIST})
    expect(state.viewingUsers).toBe(false)
});

it('should set viewingUsers true on VIEW_USERS', function () {
    const initialState = userReducer()
    const state = userReducer(initialState, {type: VIEW_USERS})
    expect(state.viewingUsers).toBe(true)
});

it('should set viewingResponses false on CANCEL_VIEW_RESPONSES', function () {
    const initialState = {
        userReducer: {
            viewingResponses: true
        }}
    const state = userReducer(initialState, {type: CANCEL_VIEW_RESPONSES})
    expect(state.viewingResponses).toBe(false)
});

it('should set viewingResponses true on VIEW_RESPONSES', function () {
    const initialState = userReducer()
    const state = userReducer(initialState, {type: VIEW_RESPONSES})
    expect(state.viewingResponses).toBe(true)
});

it('should set responseToDelete on DELETE_RESPONSE', function () {
    const initialState = userReducer()
    const state = userReducer(initialState, {type: DELETE_RESPONSE, payload: 1})
    expect(state.responseToDelete).toBe(1)
});

it('should set deleteResponsePending true on START_DELETE_RESPONSE', function () {
    const initialState = userReducer()
    const state = userReducer(initialState, {type: START_DELETE_RESPONSE})
    expect(state.deleteResponsePending).toBe(true)
});

it('should set deleteResponsePending false on FAILURE_DELETE_RESPONSE', function () {
    const initialState = {
        deleteResponsePending: true
    }
    const state = userReducer(initialState, {type: FAILURE_DELETE_RESPONSE})
    expect(state.deleteResponsePending).toBe(false)
});

it('should set deleteResponsePending false on SUCCESS_DELETE_RESPONSE', function () {
    const initialState = {
        deleteResponsePending: true
    }
    const state = userReducer(initialState, {type: SUCCESS_DELETE_RESPONSE})
    expect(state.deleteResponsePending).toBe(false)
});

/** FETCH **/

it('should dispatch START_LOGIN then SUCCESS_LOGIN with payload when initiateLogin', async function () {
    const username = 'brady'
    const password = 'mypass'
    const role = 'Editor'
    const token = 'some token'
    const getState = () => {
        return {
            userReducer: {
                credentials: {username: 'brady', password: 'mypass', role: 'Editor'}}}}
    const url = `http://localhost:8080/user/login?username=${username}&password=${password}&role=${role}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: true,
            json: () => new Promise(res => res(token))
        }))
    }
    const dispatch = jest.fn()
    await initiateLogin(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_LOGIN})
    expect(dispatch).toHaveBeenCalledWith({type: SUCCESS_LOGIN, payload: token})
});

it('should dispatch START_LOGIN then FAILURE_LOGIN when initiateLogin w/ bad creds', async function () {
    const username = 'brady'
    const password = 'mypass'
    const role = 'Editor'
    const token = 'some token'
    const getState = () => {
        return {
            userReducer: {
                credentials: {username: 'brady', password: 'mypass', role: 'Editor'}}}}
    const url = `http://localhost:8080/user/login?username=${username}&password=${password}&role=${role}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: false,
        }))
    }
    const dispatch = jest.fn()
    await initiateLogin(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_LOGIN})
    expect(dispatch).toHaveBeenCalledWith({type: FAILURE_LOGIN})
});

it('should dispatch START_USER_LIST then SUCCESS_USER_LIST with payload when initiateUserList', async function () {
    const list = ['brady', 'user', 'admin']
    const token = 'some token'
    const getState = () => {
        return {
            userReducer: {
                loggedInUser: {username: 'brady', role: 'Editor', token: 'some token'}}}}
    const url = `http://localhost:8080/user/getAll?token=${token}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: true,
            json: () => new Promise(res => res(list))
        }))
    }
    const dispatch = jest.fn()
    await initiateUserList(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_USER_LIST})
    expect(dispatch).toHaveBeenCalledWith({type: SUCCESS_USER_LIST, payload: list})
});

it('should dispatch START_USER_LIST then FAILURE_USER_LIST when initiateUserList w/ bad creds', async function () {
    const token = 'some token'
    const getState = () => {
        return {
            userReducer: {
                loggedInUser: {username: 'brady', role: 'Editor', token: 'some token'}}}}
    const url = `http://localhost:8080/user/getAll?token=${token}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: false
        }))
    }
    const dispatch = jest.fn()
    await initiateUserList(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_USER_LIST})
    expect(dispatch).toHaveBeenCalledWith({type: FAILURE_USER_LIST})
});

it('should dispatch START_REGISTER and SUCCESS_REGISTER when initiateRegister with good Editor creds', async ()=>{
    const dispatch = jest.fn();
    const getState = () => {
        return {
            userReducer:{
                addNewUser:{username:'some user',password:'pass', role:'Editor'}
            }}}
    const userRegister ={username:'some user', password:'pass', role:'Editor'}
    const url = "http://localhost:8080/user/registerEditor"
    let _url1
    const mockFetch = (url,method='POST',body ={userRegister})=>{
        _url1 = url;
        return new Promise(resolve => resolve({
            ok:true,
            json: () => new Promise(res => res(userRegister))
        }))
    }
    await initiateRegister(mockFetch)(dispatch,getState)
    expect(_url1).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_REGISTER})
    expect(dispatch).toHaveBeenCalledWith({type: SUCCESS_REGISTER})
});

it('should dispatch START_REGISTER and SUCCESS_REGISTER when initiateRegister with good Follower creds', async ()=>{
    const dispatch = jest.fn();
    const getState = () => {
        return {
            userReducer:{
                addNewUser:{username:'some user',password:'pass', role:'Follower'}
            }}}
    const userRegister ={username:'some user', password:'pass', role:'Follower'}
    const url = "http://localhost:8080/user/registerFollower"
    let _url1
    const mockFetch = (url,method='POST',body ={userRegister})=>{
        _url1 = url;
        return new Promise(resolve => resolve({
            ok:true,
            json: () => new Promise(res => res(userRegister))
        }))
    }
    await initiateRegister(mockFetch)(dispatch,getState)
    expect(_url1).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_REGISTER})
    expect(dispatch).toHaveBeenCalledWith({type: SUCCESS_REGISTER})
});

it('should dispatch START_REGISTER and FAILURE_REGISTER when initiateRegister with bad Editor creds', async ()=>{
    const dispatch = jest.fn();
    const getState = () => {
        return {
            userReducer:{
                addNewUser:{username:'some user',password:'pass', role:'Editor'}
            }}}
    const userRegister ={username:'some user', password:'pass', role:'Editor'}
    const url = "http://localhost:8080/user/registerEditor"
    let _url1
    const mockFetch = (url,method='POST',body ={userRegister})=>{
        _url1 = url;
        return new Promise(resolve => resolve({
            ok: false
        }))
    }
    await initiateRegister(mockFetch)(dispatch,getState)
    expect(_url1).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_REGISTER})
    expect(dispatch).toHaveBeenCalledWith({type: FAILURE_REGISTER})
});

it('should dispatch START_REGISTER and FAILURE_REGISTER when initiateRegister with bad Follower creds', async ()=>{
    const dispatch = jest.fn();
    const getState = () => {
        return {
            userReducer:{
                addNewUser:{username:'some user',password:'pass', role:'Follower'}
            }}}
    const userRegister ={username:'some user', password:'pass', role:'Follower'}
    const url = "http://localhost:8080/user/registerFollower"
    let _url1
    const mockFetch = (url,method='POST',body ={userRegister})=>{
        _url1 = url;
        return new Promise(resolve => resolve({
            ok: false
        }))
    }
    await initiateRegister(mockFetch)(dispatch,getState)
    expect(_url1).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_REGISTER})
    expect(dispatch).toHaveBeenCalledWith({type: FAILURE_REGISTER})
});

it('should dispatch START_DELETE_USER then SUCCESS_DELETE_USER with payload when initiateDeleteUser', async function () {
    const id = 1
    const token = 'some token'
    const getState = () => {
        return {
            userReducer: {
                userToDelete: 1,
                loggedInUser: {
                    username:'some user',
                    token: 'some token',
                    role:'Follower'
                }}}}
    const url = `http://localhost:8080/user/deleteUser?token=${token}&id=${id}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: true,
            json: () => new Promise(res => res())
        }))
    }
    const dispatch = jest.fn()
    await initiateDeleteUser(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_DELETE_USER})
    expect(dispatch).toHaveBeenCalledWith({type: SUCCESS_DELETE_USER})
});

it('should dispatch START_DELETE_USER then FAILURE_DELETE_USER when initiateDeleteUser w/ bad creds', async function () {
    const id = 1
    const token = 'some token'
    const getState = () => {
        return {
            userReducer: {
                userToDelete: 1,
                loggedInUser: {
                    username:'some user',
                    token: 'some token',
                    role:'Follower'
                }}}}
    const url = `http://localhost:8080/user/deleteUser?token=${token}&id=${id}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: false
        }))
    }
    const dispatch = jest.fn()
    await initiateDeleteUser(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_DELETE_USER})
    expect(dispatch).toHaveBeenCalledWith({type: FAILURE_DELETE_USER})
});

it('should dispatch START_EDIT_ROLE then SUCCESS_EDIT_ROLE when initiateEditRole', async function () {
    const id = 1
    const token = 'some token'
    const role = 'Follower'
    const getState = () => {
        return {
            userReducer: {
                userToEdit: {
                    id: 1,
                    role: 'Follower'
                },
                loggedInUser: {
                    username:'some user',
                    token: 'some token',
                    role:'Follower'
                }}}}
    const url = `http://localhost:8080/user/editUser?token=${token}&id=${id}&role=${role}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: true,
            json: () => new Promise(res => res())
        }))
    }
    const dispatch = jest.fn()
    await initiateEditRole(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_EDIT_ROLE})
    expect(dispatch).toHaveBeenCalledWith({type: SUCCESS_EDIT_ROLE})
});

it('should dispatch START_EDIT_ROLE then FAILURE_EDIT_ROLE when initiateEditRole w/ bad creds', async function () {
    const id = 1
    const token = 'some token'
    const role = 'Follower'
    const getState = () => {
        return {
            userReducer: {
                userToEdit: {
                    id: 1,
                    role: 'Follower'
                },
                loggedInUser: {
                    username:'some user',
                    token: 'some token',
                    role:'Follower'
                }}}}
    const url = `http://localhost:8080/user/editUser?token=${token}&id=${id}&role=${role}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: false
        }))
    }
    const dispatch = jest.fn()
    await initiateEditRole(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_EDIT_ROLE})
    expect(dispatch).toHaveBeenCalledWith({type: FAILURE_EDIT_ROLE})
});

it('should dispatch START_GET_RESPONSES then SUCCESS_GET_RESPONSES with payload when initiateGetResponse', async function () {
    const list = ['response1', 'response2', 'response3']
    const token = 'some token'
    const getState = () => {
        return {
            userReducer: {
                loggedInUser: {username: 'brady', role: 'Editor', token: 'some token'},
                responseUser: 1}}}
    const url = `http://localhost:8080/user/getResponses?token=${token}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: true,
            json: () => new Promise(res => res(list))
        }))
    }
    const dispatch = jest.fn()
    await initiateGetResponse(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_GET_RESPONSES})
    expect(dispatch).toHaveBeenCalledWith({type: SUCCESS_GET_RESPONSES, payload: list})
});

it('should dispatch START_GET_RESPONSES then FAILURE_GET_RESPONSES when initiateGetResponse w/ bad creds', async function () {
    const token = 'some token'
    const getState = () => {
        return {
            userReducer: {
                loggedInUser: {username: 'brady', role: 'Editor', token: 'some token'},
                responseUser: 1}}}
    const url = `http://localhost:8080/user/getResponses?token=${token}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: false
        }))
    }
    const dispatch = jest.fn()
    await initiateGetResponse(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_GET_RESPONSES})
    expect(dispatch).toHaveBeenCalledWith({type: FAILURE_GET_RESPONSES})
});

it('should dispatch START_ADD_RESPONSE then SUCCESS_ADD_RESPONSE with payload when initiateAddResponse', async function () {
    const token = 'some token'
    const userId = 1
    const processId = 2
    const stageId = 3
    const username = 'brady'
    const stageType = 'Boolean'
    const stageNumber = 3
    const answer = 'answer'
    const getState = () => {
        return {
            userReducer: {
                loggedInUser: {username: 'brady', role: 'Editor', token: 'some token'},
                responseToAdd: {
                    userId: 1,
                    processId: 2,
                    stageId: 3,
                    username: 'brady',
                    stageType: 'Boolean',
                    stageNumber: 3,
                    answer: 'answer'
                }}}}
    const url = `http://localhost:8080/user/addResponse?token=${token}&userId=${userId}&processId=${processId}&stageId=${stageId}
        &username=${username}&stageType=${stageType}&stageNumber=${stageNumber}&answer=${answer}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: true,
            json: () => new Promise(res => res())
        }))
    }
    const dispatch = jest.fn()
    await initiateAddResponse(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_ADD_RESPONSE})
    expect(dispatch).toHaveBeenCalledWith({type: SUCCESS_ADD_RESPONSE})
});

it('should dispatch START_ADD_RESPONSE then FAILURE_ADD_RESPONSE when initiateAddResponse w/ bad creds', async function () {
    const token = 'some token'
    const userId = 1
    const processId = 2
    const stageId = 3
    const username = 'brady'
    const stageType = 'Boolean'
    const stageNumber = 3
    const answer = 'answer'
    const getState = () => {
        return {
            userReducer: {
                loggedInUser: {username: 'brady', role: 'Editor', token: 'some token'},
                responseToAdd: {
                    userId: 1,
                    processId: 2,
                    stageId: 3,
                    username: 'brady',
                    stageType: 'Boolean',
                    stageNumber: 3,
                    answer: 'answer'
                }}}}
    const url = `http://localhost:8080/user/addResponse?token=${token}&userId=${userId}&processId=${processId}&stageId=${stageId}
        &username=${username}&stageType=${stageType}&stageNumber=${stageNumber}&answer=${answer}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: false
        }))
    }
    const dispatch = jest.fn()
    await initiateAddResponse(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_ADD_RESPONSE})
    expect(dispatch).toHaveBeenCalledWith({type: FAILURE_ADD_RESPONSE})
});

it('should dispatch START_DELETE_RESPONSE then SUCCESS_DELETE_RESPONSE with payload when initiateDeleteResponse', async function () {
    const token = 'some token'
    const id = 1
    const getState = () => {
        return {
            userReducer: {
                loggedInUser: {username: 'brady', role: 'Editor', token: 'some token'},
                responseToDelete: 1}}}
    const url = `http://localhost:8080/user/deleteResponse?token=${token}&responseId=${id}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: true,
            json: () => new Promise(res => res())
        }))
    }
    const dispatch = jest.fn()
    await initiateDeleteResponse(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_DELETE_RESPONSE})
    expect(dispatch).toHaveBeenCalledWith({type: SUCCESS_DELETE_RESPONSE})
});

it('should dispatch START_DELETE_RESPONSE then FAILURE_DELETE_RESPONSE when initiateDeleteResponse w/ bad creds', async function () {
    const token = 'some token'
    const id = 1
    const getState = () => {
        return {
            userReducer: {
                loggedInUser: {username: 'brady', role: 'Editor', token: 'some token'},
                responseToDelete: 1}}}
    const url = `http://localhost:8080/user/deleteResponse?token=${token}&responseId=${id}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: false
        }))
    }
    const dispatch = jest.fn()
    await initiateDeleteResponse(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_DELETE_RESPONSE})
    expect(dispatch).toHaveBeenCalledWith({type: FAILURE_DELETE_RESPONSE})
});