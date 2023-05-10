import { FC, useState } from 'react';
import { Typography } from '../../components/Typography/Typography';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import './SignIn.scss';



export const SignIn: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (newValue: string) => {
        setEmail(newValue);
    }
    const handleChangePassword = (newValue: string) => {
        setPassword(newValue);
    }

    return (
        <div className='sign-in'>
            <Typography content='Sign In' type={'H1'} />
            <form className='sign-in__form'>
                <Input
                    title='Email'
                    placeholder='Your email'
                    value={email}
                    handleChange={handleChangeEmail}
                />
                <Input
                    title='Password'
                    placeholder='Your password'
                    value={password}
                    handleChange={handleChangePassword}
                />
                <a className='sign-in__form-forgot-link' href="https://example.com">Forgot password?
                </a>
                <Button type={'primary'} content='Sing In' />
                <p className='sign-in__form-description'>
                    Don't have an account? {' '}
                    <a className='sign-up__form-description-link' href="https://example.com">
                        Sign Up
                    </a>
                </p>
            </form>
        </div>
    )
};
