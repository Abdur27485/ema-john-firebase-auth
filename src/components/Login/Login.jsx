import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null)
    const {signInUser} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault()

        setError(null);
        setSuccess(null)

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user)
            setSuccess('Logged In Successfully!');
            form.reset();
        })
        .catch( error => {
            console.log(error.message)
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label>Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" name="password" required />
                </div>
                {
                    success ?
                        <p className='successMessage'>{success}</p>
                        :
                        <></>
                }
                <button className='form-btn' type="submit">Login</button>
                <p>
                    New to Ema-John?
                    <Link to='/signup'>Create New Account</Link>
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