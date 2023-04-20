import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null)
    const { createUser } = useContext(AuthContext);

    const handleSingUp = event => {
        event.preventDefault();

        setError(null)
        setSuccess(null)

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password === confirmPassword) {
            if (!/.{8}/.test(password)) {
                setError('Password should be at least 8 characters')
                return;
            } else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
                setError('Password needs to have at least two uppercase letters')
                return;
            } else if (!/(?=.*[!@#$&*])/.test(password)) {
                setError('Password needs to have at least one special character')
                return;
            } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
                setError('Password needs to have at least two numbers')
                return;
            }
        } else {
            setError('Password did not match!')
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                setSuccess('Account Created Successfully!')
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <div className='form-container'>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleSingUp}>
                    <div className="form-control">
                        <label>Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="form-control">
                        <label>Password</label>
                        <input type="password" name="password" required />
                    </div>
                    <div className="form-control">
                        <label>Confirm Password</label>
                        <input type="password" name="confirmPassword" required />
                    </div>
                    <button className='form-btn' type="submit">Sign Up</button>
                    <p>
                        Already have an account?
                        <Link to='/login'>Login</Link>
                    </p>
                </form>
                {
                    error ?
                        <p className='errorMessage'>{error}</p>
                        :
                        <></>
                }
                {
                    success ?
                        <p className='successMessage'>{success}</p>
                        :
                        <></>
                }
                <div className="or-container">
                    <p>or</p>
                    <hr />
                </div>
                <div className='social-sign-in-container'>
                    <img src="googleIcon.png" />
                    <p>Continue With Google</p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;