import { localServ } from "../../services/localServices"
import { USER_LOGIN } from "../constants/userConstant"

const initialState = {
    userInfo: localServ.get(),
}

let userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN:
            {
                return {...state, userInfo: payload}
            }
        default:
            return state
    }
}

export default userReducer
