import {useSelector} from "react-redux";
import StaticResponse from "../../Static/StaticResponse";

export default function ResponseList({
                                         _useSelector = useSelector,
                                         StaticResponseX = StaticResponse
                                     }) {

    const responses = _useSelector(state => state.userReducer.responses)

    return <div>
        {responses.map(
            (staticResponse, index) => <div key={index}>
                <StaticResponseX staticResponse={staticResponse}/>
            </div>
        )}
    </div>

}