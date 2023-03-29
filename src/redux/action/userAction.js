import { message } from "antd"
import { localServ } from "../../services/localServices"
import { userServ } from "../../services/userServices"
import { USER_LOGIN } from "../constants/userConstant"

export const setLoginAction = (value) => {
    // value lấy từ respone axios
    return {
        type: USER_LOGIN,
        payload: value,
    }
}

export const setLoginActionServices = (value, onCompleted) => {
    // value lấy từ form của antd
    return (dispatch) => {
        userServ.postLogin(value)
            .then(res => {
                console.log(res)
                localServ.set(res.data.content)

                dispatch(setLoginAction(res.data.content))

                onCompleted();
            })
            .catch(err => {
                console.log(err)
            })
    }
}