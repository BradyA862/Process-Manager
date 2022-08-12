import {useSelector} from "react-redux";
import Login from "./componenets/User/Login";
import Register from "./componenets/User/Register";
import Editor from "./componenets/Editor/Editor";
import Follower from "./componenets/Follower/Follower";

export default function App({
                                _useSelector = useSelector,
                                LoginX = Login,
                                RegisterX = Register,
                                EditorX = Editor,
                                FollowerX = Follower
                            }) {

    const loggedInUser = _useSelector(state => state.userReducer.loggedInUser)
    const isRegister = _useSelector(state => state.userReducer.isRegister)

    if (loggedInUser) {

        if (loggedInUser.role === 'Editor') {
            return <EditorX/>
        }

        if (loggedInUser.role === 'Follower') {
            return <FollowerX/>
        }

    } else if (isRegister) {
        return <div style={{
            position: 'absolute', left: '50%', top: '30%',
            transform: 'translate(-50%, -50%)',
        }}>
            <RegisterX/>
        </div>
    } else {
        return <div style={{
            position: 'absolute', left: '50%', top: '30%',
            transform: 'translate(-50%, -50%)',
        }}>
            <LoginX/>
        </div>
    }
}

/**
 * TESTED
 * Add Process
 * Edit Process
 * Response List
 * Add Stage
 * Edit Stage
 * Editor
 * Editor Header
 * Follower
 * Process Response
 **/
