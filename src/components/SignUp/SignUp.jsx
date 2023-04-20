import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const handleSingUp = event =>{
        event.preventDefault();
    }
    return (
        <div>
                    <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSingUp}>
            <div className="form-control">
                    <label>Full Name</label>
                    <input type="text" name="name" required />
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" name="password" required />
                </div>
                <button className='form-btn' type="submit">Sign Up</button>
                <p>
                    Already have an account?
                    <Link to='/login'>Login</Link>
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
        </div>
    );
};

export default SignUp;