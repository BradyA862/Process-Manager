import processReducer, {
    ADD_PROCESS, CANCEL_ADD_PROCESS, CANCEL_EDIT_PROCESS,
    CANCEL_VIEW_PROCESS, DELETE_PROCESS, EDIT_PROCESS,
    FAILURE_ADD_PROCESS,
    FAILURE_ADD_STAGE,
    FAILURE_DELETE_PROCESS,
    FAILURE_DELETE_STAGE,
    FAILURE_EDIT_PROCESS,
    FAILURE_EDIT_STAGE,
    FAILURE_PROCESS_LIST,
    FAILURE_STAGE_LIST, initiateAddMultStage,
    initiateAddProcess, initiateAddStage,
    initiateDeleteProcess, initiateDeleteStage,
    initiateEditProcess, initiateEditStage,
    initiateProcessList, initiateStageList,
    START_ADD_PROCESS,
    START_ADD_STAGE,
    START_DELETE_PROCESS,
    START_DELETE_STAGE,
    START_EDIT_PROCESS,
    START_EDIT_STAGE,
    START_PROCESS_LIST,
    START_STAGE_LIST,
    SUCCESS_ADD_PROCESS,
    SUCCESS_ADD_STAGE,
    SUCCESS_DELETE_PROCESS,
    SUCCESS_DELETE_STAGE,
    SUCCESS_EDIT_PROCESS,
    SUCCESS_EDIT_STAGE,
    SUCCESS_PROCESS_LIST,
    SUCCESS_STAGE_LIST, UPDATE_TITLE, VIEW_PROCESS
} from "../../reducers/processReducer";

/** INITIAL STATE **/
it('should start with processes empty', function () {
    const state = processReducer()
    expect(state.processes.length).toBe(0)
});

it('should start with stages empty', function () {
    const state = processReducer()
    expect(state.stages.length).toBe(0)
});

it('should start with addProcessPending false', function () {
    const state = processReducer()
    expect(state.addProcessPending).toBe(false)
});

it('should start with editProcessPending false', function () {
    const state = processReducer()
    expect(state.editProcessPending).toBe(false)
});

it('should start with deleteProcessPending false', function () {
    const state = processReducer()
    expect(state.deleteProcessPending).toBe(false)
});

it('should start with processListPending false', function () {
    const state = processReducer()
    expect(state.processListPending).toBe(false)
});

it('should start with addStagePending false', function () {
    const state = processReducer()
    expect(state.addStagePending).toBe(false)
});

it('should start with editStagePending false', function () {
    const state = processReducer()
    expect(state.editStagePending).toBe(false)
});

it('should start with deleteStagePending false', function () {
    const state = processReducer()
    expect(state.deleteStagePending).toBe(false)
});

it('should start with stageListPending false', function () {
    const state = processReducer()
    expect(state.stageListPending).toBe(false)
});

it('should start with processToView null', function () {
    const state = processReducer()
    expect(state.processToView).toBeNull()
});

/** SWITCH **/

it('should set processToView on VIEW_PROCESS', function () {
    const process = {
        title: 'title',
        stages: [
            {id: 1, prompt: 'prompt1'},
            {id: 2, prompt: 'prompt2'},
            {id: 3, prompt: 'prompt3'}
        ]}
    const initialState = processReducer()
    const state = processReducer(initialState, {type: VIEW_PROCESS, payload: process})
    expect(state.processToView.title).toBe('title')
    expect(state.processToView.stages.length).toBe(3)
});

it('should set processToView null on CANCEL_VIEW_PROCESS', function () {
    const initialState = {
        processReducer: {
            processToView: {
                title: 'title',
                stages: [
                    {id: 1, prompt: 'prompt1'},
                    {id: 2, prompt: 'prompt2'},
                    {id: 3, prompt: 'prompt3'}
                ]}}}
    const state = processReducer(initialState, {type: CANCEL_VIEW_PROCESS})
    expect(state.processToView).toBeNull()
});

it('should set processToAdd on ADD_PROCESS', function () {
    const initialState = processReducer()
    const state = processReducer(initialState, {type: ADD_PROCESS})
    expect(state.processToAdd).toStrictEqual({title: '', stages: []})
});

it('should set processToAdd null on CANCEL_ADD_PROCESS', function () {
    const initialState = {
        processReducer: {
            processToAdd: {
                title: '',
                stages: []
            }}}
    const state = processReducer(initialState, {type: CANCEL_ADD_PROCESS})
    expect(state.processToAdd).toBeNull()
});

it('should set title of processToAdd on UPDATE_TITLE', function () {
    const initialState = {
        processReducer: {
            processToAdd: {
                title: '',
                stages: []
            }}}
    const state = processReducer(initialState, {type: UPDATE_TITLE, payload: {title: 'title', stages: []}})
    expect(state.processToAdd.title).toBe('title')
});

it('should set processToEdit null on CANCEL_EDIT_PROCESS', function () {
    const initialState = {
        processReducer: {
            processToEdit: {
                title: 'title',
                stages: []
            }}}
    const state = processReducer(initialState, {type: CANCEL_EDIT_PROCESS})
    expect(state.processToEdit).toBeNull()
});

it('should set addProcessPending true on START_ADD_PROCESS', function () {
    const initialState = processReducer()
    const state = processReducer(initialState, {type: START_ADD_PROCESS})
    expect(state.addProcessPending).toBe(true)
});

it('should set editProcessPending true on START_EDIT_PROCESS', function () {
    const initialState = processReducer()
    const state = processReducer(initialState, {type: START_EDIT_PROCESS})
    expect(state.editProcessPending).toBe(true)
});

it('should set deleteProcessPending true on START_DELETE_PROCESS', function () {
    const initialState = processReducer()
    const state = processReducer(initialState, {type: START_DELETE_PROCESS})
    expect(state.deleteProcessPending).toBe(true)
});

it('should set addProcessPending true on START_PROCESS_LIST', function () {
    const initialState = processReducer()
    const state = processReducer(initialState, {type: START_PROCESS_LIST})
    expect(state.processListPending).toBe(true)
});

it('should set addStagePending true on START_ADD_STAGE', function () {
    const initialState = processReducer()
    const state = processReducer(initialState, {type: START_ADD_STAGE})
    expect(state.addStagePending).toBe(true)
});

it('should set editStagePending true on START_EDIT_STAGE', function () {
    const initialState = processReducer()
    const state = processReducer(initialState, {type: START_EDIT_STAGE})
    expect(state.editStagePending).toBe(true)
});

it('should set deleteStagePending true on START_DELETE_STAGE', function () {
    const initialState = processReducer()
    const state = processReducer(initialState, {type: START_DELETE_STAGE})
    expect(state.deleteStagePending).toBe(true)
});

it('should set stageListPending true on START_STAGE_LIST', function () {
    const initialState = processReducer()
    const state = processReducer(initialState, {type: START_STAGE_LIST})
    expect(state.stageListPending).toBe(true)
});

it('should set addProcessPending false on SUCCESS_ADD_PROCESS', function () {
    const initialState = {
        addProcessPending: true
    }
    const state = processReducer(initialState, {type: SUCCESS_ADD_PROCESS})
    expect(state.addProcessPending).toBe(false)
});

it('should set editProcessPending false on SUCCESS_EDIT_PROCESS', function () {
    const initialState = {
        editProcessPending: true
    }
    const state = processReducer(initialState, {type: SUCCESS_EDIT_PROCESS})
    expect(state.editProcessPending).toBe(false)
});

it('should set deleteProcessPending false on SUCCESS_DELETE_PROCESS', function () {
    const initialState = {
        deleteProcessPending: true
    }
    const state = processReducer(initialState, {type: SUCCESS_DELETE_PROCESS})
    expect(state.deleteProcessPending).toBe(false)
});

it('should set addProcessPending false on SUCCESS_PROCESS_LIST', function () {
    const processList = ['process1', 'process2', 'process3']
    const initialState = {
        processListPending: true
    }
    const state = processReducer(initialState, {type: SUCCESS_PROCESS_LIST, payload: processList})
    expect(state.processListPending).toBe(false)
    expect(state.processes.length).toBe(3)
});

it('should set addStagePending false on SUCCESS_ADD_STAGE', function () {
    const initialState = {
        addStagePending: true
    }
    const state = processReducer(initialState, {type: SUCCESS_ADD_STAGE})
    expect(state.addStagePending).toBe(false)
});

it('should set editStagePending false on SUCCESS_EDIT_STAGE', function () {
    const initialState = {
        editStagePending: true
    }
    const state = processReducer(initialState, {type: SUCCESS_EDIT_STAGE})
    expect(state.editStagePending).toBe(false)
});

it('should set deleteStagePending false on SUCCESS_DELETE_STAGE', function () {
    const initialState = {
        deleteStagePending: true
    }
    const state = processReducer(initialState, {type: SUCCESS_DELETE_STAGE})
    expect(state.deleteStagePending).toBe(false)
});

it('should set stageListPending false on SUCCESS_STAGE_LIST', function () {
    const stageList = ['stage1', 'stage2', 'stage3']
    const initialState = {
        stageListPending: true,
        stages: []
    }
    const state = processReducer(initialState, {type: SUCCESS_STAGE_LIST, payload: stageList})
    expect(state.stageListPending).toBe(false)
    expect(state.stages.length).toBe(3)
});

it('should set addProcessPending false on FAILURE_ADD_PROCESS', function () {
    const initialState = {
        addProcessPending: true
    }
    const state = processReducer(initialState, {type: FAILURE_ADD_PROCESS})
    expect(state.addProcessPending).toBe(false)
});

it('should set editProcessPending false on FAILURE_EDIT_PROCESS', function () {
    const initialState = {
        editProcessPending: true
    }
    const state = processReducer(initialState, {type: FAILURE_EDIT_PROCESS})
    expect(state.editProcessPending).toBe(false)
});

it('should set deleteProcessPending false on FAILURE_DELETE_PROCESS', function () {
    const initialState = {
        deleteProcessPending: true
    }
    const state = processReducer(initialState, {type: FAILURE_DELETE_PROCESS})
    expect(state.deleteProcessPending).toBe(false)
});

it('should set addProcessPending false on FAILURE_PROCESS_LIST', function () {
    const initialState = {
        processListPending: true
    }
    const state = processReducer(initialState, {type: FAILURE_PROCESS_LIST})
    expect(state.processListPending).toBe(false)
});

it('should set addStagePending false on FAILURE_ADD_STAGE', function () {
    const initialState = {
        addStagePending: true
    }
    const state = processReducer(initialState, {type: FAILURE_ADD_STAGE})
    expect(state.addStagePending).toBe(false)
});

it('should set editStagePending false on FAILURE_EDIT_STAGE', function () {
    const initialState = {
        editStagePending: true
    }
    const state = processReducer(initialState, {type: FAILURE_EDIT_STAGE})
    expect(state.editStagePending).toBe(false)
});

it('should set deleteStagePending false on FAILURE_DELETE_STAGE', function () {
    const initialState = {
        deleteStagePending: true
    }
    const state = processReducer(initialState, {type: FAILURE_DELETE_STAGE})
    expect(state.deleteStagePending).toBe(false)
});

it('should set stageListPending false on FAILURE_STAGE_LIST', function () {
    const initialState = {
        stageListPending: true
    }
    const state = processReducer(initialState, {type: FAILURE_STAGE_LIST})
    expect(state.stageListPending).toBe(false)
});

it('should set processToEdit on EDIT_PROCESS', function () {
    const process = {
        id: 1,
        title: 'title',
        stages: [
            'stage1',
            'stage2',
            'stage3'
        ]}
    const initialState = processReducer()
    const state = processReducer(initialState, {type: EDIT_PROCESS, payload: process})
    expect(state.processToEdit).toStrictEqual({
        id: 1,
        title: 'title',
        stages: [
            'stage1',
            'stage2',
            'stage3'
        ]})
});

it('should set processToDelete on DELETE_PROCESS', function () {
    const process = 1
    const initialState = processReducer()
    const state = processReducer(initialState, {type: DELETE_PROCESS, payload: process})
    expect(state.processToDelete).toBe(1)
});

/** FETCH **/

it('should dispatch START_ADD_PROCESS then SUCCESS_ADD_PROCESS when initiateAddProcess', async function () {
    const title = 'title'
    const token = 'some token'
    const getState = () => {
        return {
            processReducer: {
                processToAdd: {title: 'title'}},
            userReducer: {
                loggedInUser: {
                    token: 'some token',
                    username: 'brady',
                    role: 'Editor'
                }}}}
    const url = `http://localhost:8081/process/addProcess?token=${token}&title=${title}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: true,
            json: () => new Promise(res => res())
        }))
    }
    const dispatch = jest.fn()
    await initiateAddProcess(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_ADD_PROCESS})
    expect(dispatch).toHaveBeenCalledWith({type: SUCCESS_ADD_PROCESS})
});

it('should dispatch START_ADD_PROCESS then FAILURE_ADD_PROCESS when initiateAddProcess w/ bad creds', async function () {
    const title = 'title'
    const token = 'some token'
    const getState = () => {
        return {
            processReducer: {
                processToAdd: {title: 'title'}},
            userReducer: {
                loggedInUser: {
                    token: 'some token',
                    username: 'brady',
                    role: 'Editor'
                }}}}
    const url = `http://localhost:8081/process/addProcess?token=${token}&title=${title}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: false
        }))
    }
    const dispatch = jest.fn()
    await initiateAddProcess(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_ADD_PROCESS})
    expect(dispatch).toHaveBeenCalledWith({type: FAILURE_ADD_PROCESS})
});

it('should dispatch START_EDIT_PROCESS then SUCCESS_EDIT_PROCESS when initiateAddProcess', async function () {
    const title = 'title'
    const processId = 1
    const token = 'some token'
    const getState = () => {
        return {
            processReducer: {
                processToEdit: {id: 1, title: 'title'}},
            userReducer: {
                loggedInUser: {
                    token: 'some token',
                    username: 'brady',
                    role: 'Editor'
                }}}}
    const url = `http://localhost:8081/process/editProcess?token=${token}&processId=${processId}&title=${title}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: true,
            json: () => new Promise(res => res())
        }))
    }
    const dispatch = jest.fn()
    await initiateEditProcess(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_EDIT_PROCESS})
    expect(dispatch).toHaveBeenCalledWith({type: SUCCESS_EDIT_PROCESS})
});

it('should dispatch START_EDIT_PROCESS then FAILURE_EDIT_PROCESS when initiateEditProcess w/ bad creds', async function () {
    const title = 'title'
    const processId = 1
    const token = 'some token'
    const getState = () => {
        return {
            processReducer: {
                processToEdit: {id: 1, title: 'title'}},
            userReducer: {
                loggedInUser: {
                    token: 'some token',
                    username: 'brady',
                    role: 'Editor'
                }}}}
    const url = `http://localhost:8081/process/editProcess?token=${token}&processId=${processId}&title=${title}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: false
        }))
    }
    const dispatch = jest.fn()
    await initiateEditProcess(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_EDIT_PROCESS})
    expect(dispatch).toHaveBeenCalledWith({type: FAILURE_EDIT_PROCESS})
});

it('should dispatch START_DELETE_PROCESS then SUCCESS_DELETE_PROCESS when initiateDeleteProcess', async function () {
    const processId = 1
    const token = 'some token'
    const getState = () => {
        return {
            processReducer: {
                processToDelete: 1},
            userReducer: {
                loggedInUser: {
                    token: 'some token',
                    username: 'brady',
                    role: 'Editor'
                }}}}
    const url = `http://localhost:8081/process/deleteProcess?token=${token}&processId=${processId}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: true,
            json: () => new Promise(res => res())
        }))
    }
    const dispatch = jest.fn()
    await initiateDeleteProcess(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_DELETE_PROCESS})
    expect(dispatch).toHaveBeenCalledWith({type: SUCCESS_DELETE_PROCESS})
});

it('should dispatch START_DELETE_PROCESS then FAILURE_DELETE_PROCESS when initiateDeleteProcess w/ bad creds', async function () {
    const processId = 1
    const token = 'some token'
    const getState = () => {
        return {
            processReducer: {
                processToDelete: 1},
            userReducer: {
                loggedInUser: {
                    token: 'some token',
                    username: 'brady',
                    role: 'Editor'
                }}}}
    const url = `http://localhost:8081/process/deleteProcess?token=${token}&processId=${processId}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: false
        }))
    }
    const dispatch = jest.fn()
    await initiateDeleteProcess(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_DELETE_PROCESS})
    expect(dispatch).toHaveBeenCalledWith({type: FAILURE_DELETE_PROCESS})
});

it('should dispatch START_PROCESS_LIST then SUCCESS_PROCESS_LIST w/ payload when initiateProcessList', async function () {
    const processList = ['title', 'title2', 'title3']
    const token = 'some token'
    const getState = () => {
        return {
            userReducer: {
                loggedInUser: {
                    token: 'some token',
                    username: 'brady',
                    role: 'Editor'
                }}}}
    const url = `http://localhost:8081/process/processList?token=${token}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: true,
            json: () => new Promise(res => res(processList))
        }))
    }
    const dispatch = jest.fn()
    await initiateProcessList(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_PROCESS_LIST})
    expect(dispatch).toHaveBeenCalledWith({type: SUCCESS_PROCESS_LIST, payload: processList})
});

it('should dispatch START_PROCESS_LIST then FAILURE_DELETE_PROCESS when initiateProcessList w/ bad creds', async function () {
    const token = 'some token'
    const getState = () => {
        return {
            userReducer: {
                loggedInUser: {
                    token: 'some token',
                    username: 'brady',
                    role: 'Editor'
                }}}}
    const url = `http://localhost:8081/process/processList?token=${token}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: false
        }))
    }
    const dispatch = jest.fn()
    await initiateProcessList(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_PROCESS_LIST})
    expect(dispatch).toHaveBeenCalledWith({type: FAILURE_PROCESS_LIST})
});

it('should dispatch START_ADD_STAGE then SUCCESS_ADD_STAGE when initiateAddStage', async function () {
    const processId = 1
    const prompt = 'prompt'
    const stageType = 'boolean'
    const stageNumber = 2
    const token = 'some token'
    const getState = () => {
        return {
            processReducer: {
                stageToAdd: {
                    id: 1,
                    prompt: 'prompt',
                    type: 'boolean',
                    number: 2},
                processToView: 1},
            userReducer: {
                loggedInUser: {
                    token: 'some token',
                    username: 'brady',
                    role: 'Editor'
                }}}}
    const url = `http://localhost:8081/process/addStage?token=${token}&processId=${processId}
        &prompt=${prompt}&stageType=${stageType}&stageNumber=${stageNumber}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: true,
            json: () => new Promise(res => res())
        }))
    }
    const dispatch = jest.fn()
    await initiateAddStage(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_ADD_STAGE})
    expect(dispatch).toHaveBeenCalledWith({type: SUCCESS_ADD_STAGE})
});

it('should dispatch START_ADD_STAGE then FAILURE_ADD_STAGE when initiateAddStage w/ bad creds', async function () {
    const processId = 1
    const prompt = 'prompt'
    const stageType = 'boolean'
    const stageNumber = 2
    const token = 'some token'
    const getState = () => {
        return {
            processReducer: {
                stageToAdd: {
                    id: 1,
                    prompt: 'prompt',
                    type: 'boolean',
                    number: 2},
                processToView: 1},
            userReducer: {
                loggedInUser: {
                    token: 'some token',
                    username: 'brady',
                    role: 'Editor'
                }}}}
    const url = `http://localhost:8081/process/addStage?token=${token}&processId=${processId}
        &prompt=${prompt}&stageType=${stageType}&stageNumber=${stageNumber}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: false
        }))
    }
    const dispatch = jest.fn()
    await initiateAddStage(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_ADD_STAGE})
    expect(dispatch).toHaveBeenCalledWith({type: FAILURE_ADD_STAGE})
});

it('should dispatch START_EDIT_STAGE then SUCCESS_EDIT_STAGE when initiateEditStage', async function () {
    const token = 'some token'
    const stageId = 1
    const prompt = 'prompt'
    const stageType = 'text'
    const stageNumber = 3
    const getState = () => {
        return {
            processReducer: {
                stageToEdit: {
                    id: 1,
                    prompt: 'prompt',
                    type: 'text',
                    number: 3
                }},
            userReducer: {
                loggedInUser: {
                    token: 'some token',
                    username: 'brady',
                    role: 'Editor'
                }}}}
    const url = `http://localhost:8081/process/editStage?token=${token}&stageId=${stageId}
        &prompt=${prompt}&stageType=${stageType}&stageNumber=${stageNumber}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: true,
            json: () => new Promise(res => res())
        }))
    }
    const dispatch = jest.fn()
    await initiateEditStage(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_EDIT_STAGE})
    expect(dispatch).toHaveBeenCalledWith({type: SUCCESS_EDIT_STAGE})
});

it('should dispatch START_EDIT_STAGE then FAILURE_EDIT_STAGE when initiateEditStage w/ bad creds', async function () {
    const token = 'some token'
    const stageId = 1
    const prompt = 'prompt'
    const stageType = 'text'
    const stageNumber = 3
    const getState = () => {
        return {
            processReducer: {
                stageToEdit: {
                    id: 1,
                    prompt: 'prompt',
                    type: 'text',
                    number: 3
                }},
            userReducer: {
                loggedInUser: {
                    token: 'some token',
                    username: 'brady',
                    role: 'Editor'
                }}}}
    const url = `http://localhost:8081/process/editStage?token=${token}&stageId=${stageId}
        &prompt=${prompt}&stageType=${stageType}&stageNumber=${stageNumber}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: false
        }))
    }
    const dispatch = jest.fn()
    await initiateEditStage(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_EDIT_STAGE})
    expect(dispatch).toHaveBeenCalledWith({type: FAILURE_EDIT_STAGE})
});

it('should dispatch START_DELETE_STAGE then SUCCESS_DELETE_STAGE when initiateDeleteStage', async function () {
    const stageId = 1
    const token = 'some token'
    const getState = () => {
        return {
            processReducer: {
                stageToDelete: {id: 1}},
            userReducer: {
                loggedInUser: {
                    token: 'some token',
                    username: 'brady',
                    role: 'Editor'
                }}}}
    const url = `http://localhost:8081/process/deleteStage?token=${token}&stageId=${stageId}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: true,
            json: () => new Promise(res => res())
        }))
    }
    const dispatch = jest.fn()
    await initiateDeleteStage(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_DELETE_STAGE})
    expect(dispatch).toHaveBeenCalledWith({type: SUCCESS_DELETE_STAGE})
});

it('should dispatch START_DELETE_STAGE then FAILURE_DELETE_STAGE when initiateDeleteStage w/ bad creds', async function () {
    const stageId = 1
    const token = 'some token'
    const getState = () => {
        return {
            processReducer: {
                stageToDelete: {id: 1}},
            userReducer: {
                loggedInUser: {
                    token: 'some token',
                    username: 'brady',
                    role: 'Editor'
                }}}}
    const url = `http://localhost:8081/process/deleteStage?token=${token}&stageId=${stageId}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: false
        }))
    }
    const dispatch = jest.fn()
    await initiateDeleteStage(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_DELETE_STAGE})
    expect(dispatch).toHaveBeenCalledWith({type: FAILURE_DELETE_STAGE})
});

it('should dispatch START_STAGE_LIST then SUCCESS_STAGE_LIST w/ payload when initiateStageList', async function () {
    const stageList = ['title', 'title2', 'title3']
    const token = 'some token'
    const id = 1
    const getState = () => {
        return {
            userReducer: {
                loggedInUser: {
                    token: 'some token',
                    username: 'brady',
                    role: 'Editor'
                }},
        processReducer: {
                processToView: 1
        }}}
    const url = `http://localhost:8081/process/stageList?token=${token}&processId=${id}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: true,
            json: () => new Promise(res => res(stageList))
        }))
    }
    const dispatch = jest.fn()
    await initiateStageList(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_STAGE_LIST})
    expect(dispatch).toHaveBeenCalledWith({type: SUCCESS_STAGE_LIST, payload: stageList})
});

it('should dispatch START_STAGE_LIST then FAILURE_STAGE_LIST when initiateStageList w/ bad creds', async function () {
    const stageList = ['title', 'title2', 'title3']
    const token = 'some token'
    const id = 1
    const getState = () => {
        return {
            userReducer: {
                loggedInUser: {
                    token: 'some token',
                    username: 'brady',
                    role: 'Editor'
                }},
            processReducer: {
                processToView: 1
            }}}
    const url = `http://localhost:8081/process/stageList?token=${token}&processId=${id}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: false
        }))
    }
    const dispatch = jest.fn()
    await initiateStageList(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_STAGE_LIST})
    expect(dispatch).toHaveBeenCalledWith({type: FAILURE_STAGE_LIST})
});

it('should dispatch START_ADD_STAGE then SUCCESS_ADD_STAGE when initiateAddMultStage', async function () {
    const processId = 1
    const prompt = 'prompt'
    const stageType = 'boolean'
    const stageNumber = 2
    const token = 'some token'
    const answerA = 'a'
    const answerB = 'b'
    const answerC = 'c'
    const answerD = 'd'
    const getState = () => {
        return {
            processReducer: {
                stageToAdd: {
                    id: 1,
                    prompt: 'prompt',
                    type: 'boolean',
                    number: 2,
                    answers: {
                        answerA: 'a',
                        answerB: 'b',
                        answerC: 'c',
                        answerD: 'd'
                    }},
            processToView: 1
            },
            userReducer: {
                loggedInUser: {
                    token: 'some token',
                    username: 'brady',
                    role: 'Editor'
                }}}}
    const url = `http://localhost:8081/process/addMultStage?token=${token}&processId=${processId}&prompt=${prompt}
        &stageType=${stageType}&stageNumber=${stageNumber}@answerA=${answerA}@answerB=${answerB}@answerC=${answerC}@answerD=${answerD}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: true,
            json: () => new Promise(res => res())
        }))
    }
    const dispatch = jest.fn()
    await initiateAddMultStage(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_ADD_STAGE})
    expect(dispatch).toHaveBeenCalledWith({type: SUCCESS_ADD_STAGE})
});

it('should dispatch START_ADD_STAGE then FAILURE_ADD_STAGE when initiateAddMultStage w/ bad creds', async function () {
    const processId = 1
    const prompt = 'prompt'
    const stageType = 'boolean'
    const stageNumber = 2
    const token = 'some token'
    const answerA = 'a'
    const answerB = 'b'
    const answerC = 'c'
    const answerD = 'd'
    const getState = () => {
        return {
            processReducer: {
                stageToAdd: {
                    id: 1,
                    prompt: 'prompt',
                    type: 'boolean',
                    number: 2,
                    answers: {
                        answerA: 'a',
                        answerB: 'b',
                        answerC: 'c',
                        answerD: 'd'
                    }},
                processToView: 1},
            userReducer: {
                loggedInUser: {
                    token: 'some token',
                    username: 'brady',
                    role: 'Editor'
                }}}}
    const url = `http://localhost:8081/process/addMultStage?token=${token}&processId=${processId}&prompt=${prompt}
        &stageType=${stageType}&stageNumber=${stageNumber}@answerA=${answerA}@answerB=${answerB}@answerC=${answerC}@answerD=${answerD}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: false
        }))
    }
    const dispatch = jest.fn()
    await initiateAddMultStage(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: START_ADD_STAGE})
    expect(dispatch).toHaveBeenCalledWith({type: FAILURE_ADD_STAGE})
});