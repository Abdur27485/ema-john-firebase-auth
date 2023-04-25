import React, { useContext, useRef, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [show, setShow] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null)
    const { signInUser } = useContext(AuthContext);
    const passwordRef = useRef(null);

    const handleLogin = event => {
        event.preventDefault()

        setError(null);
        setSuccess(null)

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setSuccess('Logged In Successfully!');
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
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
                    <input type={show ? 'text' : 'password'} name="password" ref={passwordRef} required />
                </div>
                <p onClick={ () => setShow(!show)}>
                    <small>
                        {
                            show ? 'Hide Password' : 'Show Password'
                        }
                    </small>
                </p>
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