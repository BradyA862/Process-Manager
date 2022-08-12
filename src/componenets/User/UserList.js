import {useDispatch, useSelector} from "react-redux";
import {CANCEL_USER_LIST} from "../../reducers/userReducer";
import StaticUser from "../Static/StaticUser";
import {Button} from "react-bootstrap";

export default function UserList({
                                     _useSelector = useSelector,
                                     _useDispatch = useDispatch,
                                     StaticUserX = StaticUser
                                 }) {

    const dispatch = _useDispatch()
    const users = _useSelector(state => state.userReducer.users)

    function handleCancel() {
        dispatch({type: CANCEL_USER_LIST})
    }

    return <div>
        {users.map(
            (staticUser, index) => <div key={index}>
                <StaticUserX staticUser={staticUser}/>
            </div>
        )}
        <Button onClick={handleCancel}>Back</Button>
    </div>


}