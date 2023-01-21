import React from 'react';
import { useState } from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

const SignIn = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setEmail('');
            setPassword('');
        } catch (err) {
            console.log(err);
        }
    };

    // const handleChange = event => {
    //     const { value, name } = event.target;
    //     console.log('name ', name);
    //     console.log('value ', value);
    //     console.log('target ', event.target);
    // };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    handleChange={e => setEmail(e.target.value)}
                    label="email"
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    handleChange={e => setPassword(e.target.value)}
                    label="password"
                    required
                />

                <div className="buttons">
                    <CustomButton type="submit" value="Submit form">
                        Sign in
                    </CustomButton>
                    <CustomButton
                        type="button"
                        onClick={signInWithGoogle}
                        isGoogleSignIn
                    >
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
