import React from 'react';
import './login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form>
                <div className="form-control">
                    <label>Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" name="password" required />
                </div>
                <button className='form-btn' type="submit">Login</button>
                <p>
                    New o Ema-John?
                    <a href="#">Create New Account</a>
                </p>
            </form>
            <div className="or-container">
                <p>or</p>
                <hr />
            </div>
            <div className='social-sign-in-container'>
                <img src="googleIcon.png" />
                <p>Continue With Google</p>
            </div>
        </div>
    );
};

export default Login;