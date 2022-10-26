import './Login.css'

import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="Login_body">
            <div className="Login_center">
                <div className="login_div ">
                    <h1>Login</h1>
                    <form onSubmit="return validate()" action="/login" method="post" id="login-form">
                        <div className="txt-field">
                            <input type="text" name="email" className="login-username" required />
                            <span></span>
                            <label>Username or email</label>
                        </div>
                        <div className="txt-field">
                            <input type="password" name="password" className="login-password" required />
                            <span></span>
                            <label>Password</label>
                        </div>
                        <div className="error"></div>
                        <div className="pass"><Link to="/forgotPassword">Forgot Password?</Link></div>
                        <button type="submit" className="btn">Login</button>
                        <div className="signup_link">Not a member? <Link to="/signup"> Signup</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;