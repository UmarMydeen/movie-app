import users from '../fake/users'
import { LOGIN } from "../Constants/IssueConstants";

const validateLogin = (form) => (dispatch) => {
    const { userName, password } = form;
    const user = users.find(user => user.username.includes(userName));
    const isAuth = user.password.toLowerCase() === password;
    dispatch({
        type: LOGIN,
        isAuth
    })
}

export default validateLogin;