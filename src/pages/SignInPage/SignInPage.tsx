import { FC, useEffect, useRef, useState, KeyboardEvent } from 'react';
import { Typography } from '../../components/Typography/Typography';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import './SignInPage.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { createBackToHomePath } from '../../constants/createBackToHomePath';
import { Link } from 'react-router-dom';

export const SignInPage: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputEmailRef.current) {
            inputEmailRef.current.focus();
        }
    }, []);

    const handleChangeEmail = (newValue: string) => {
        setEmail(newValue);
    }

    const handleChangePassword = (newValue: string) => {
        setPassword(newValue);
    }


    const handleSubmit = () => {
        console.log('форма отправляется на сервер');
    }

    const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputPasswordRef.current && email) {
            inputPasswordRef.current.focus();
        }
    }

    return (
        <div className='sign-in'>
            <Breadcrumbs path={[createBackToHomePath]} />
            <form className='sign-in__form'>
            <Typography content='Sign In' type='H2'/>
                <Input
                    title='Email'
                    placeholder='Your email'
                    value={email}
                    handleChange={handleChangeEmail}
                    inputRef={inputEmailRef}
                    handleKeyUp={handleKeyUp}
                />
                <div>
                    <Input
                        title='Password'
                        placeholder='Your password'
                        value={password}
                        handleChange={handleChangePassword}
                        inputRef={inputPasswordRef}
                    />
                    <a className='sign-in__form-forgot' href="https://example.com">
                        Forgot password?
                    </a>
                </div>
                <Button content='Sign Ip' onClick={handleSubmit} type='primary'/>
                <p className='sign-in__form-description'>
                    Don’t have an account? {' '}
                <Link to='/sign-up' className='sign-in__form-link'>
                    Sign Up
                </Link>
                </p>
            </form>
        </div>
    )
};
