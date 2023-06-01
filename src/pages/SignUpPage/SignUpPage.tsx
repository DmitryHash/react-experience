import { FC, useState } from 'react';
import { Typography } from '../../components/Typography/Typography';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import './SignUpPage.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { createBackToHomePath } from '../../constants/createBackToHomePath';
import { Link, useNavigate } from 'react-router-dom';
import { postNewUser } from '../../api/postNewUser';
import { useAppDispatch } from '../../store/hooks';
import { setConfirmEmailAction } from '../../store/confirmEmail/actions';

interface IError {
    username: string | string[];
    email: string | string[];
    password: string | string[];
    confirmPassword: string | string[];
}

export const SignUpPage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassowrd] = useState('');

    const [errors, setErrors] = useState<IError>({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });


    const handleChangeName = (newValue: string) => {
        setUserName(newValue);
    }

    const handleChangeEmail = (newValue: string) => {
        setEmail(newValue);
    }

    const handleChangePassword = (newValue: string) => {
        setPassword(newValue);
    }

    const handleChangeConfirmPassword = (newValue: string) => {
        setConfirmPassowrd(newValue);
    }

    const validateForm = () => {
        const newErrors: IError = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

        if (!username) {
            newErrors.username = 'Введите логин';
        }
        if (!email) {
            newErrors.email = 'Введите Email';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email недействителен';
        }
        if (!password) {
            newErrors.password = 'Введите пароль';
        }  else if (password.length < 6) {
            newErrors.password = 'Пароль должен содержать не менее 6 символов';
          }
        if (!confirmPassword) {
            newErrors.confirmPassword = 'Повторите пароль';
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Пароли не совпадают';
            newErrors.password = 'Пароли не совпадают';
        }
        
        let isValid = Object.values(newErrors).every(error => error === '');
        if (isValid) {
            return true;
        } else {
            setErrors(newErrors);
            return false;
        }
    }

    const handleSubmit = () => {
        if (validateForm()) {
            postNewUser({username, email, password}).then(() => {
                dispatch(setConfirmEmailAction(email));
                navigate('/confirm-registration');
            }).catch((error) => setErrors(prev => ({...prev, ...error.response.data})));
        }
    }

    return (
        <div className='sign-up'>
            <Breadcrumbs path={[createBackToHomePath]} />
            <form className='sign-up__form'>
            <Typography content='Регистрация' type='H2'/>
                <Input
                    title='Логин'
                    placeholder='Ваш логин'
                    value={username}
                    handleChange={handleChangeName}
                    errorMessage={errors.username}
                />
                <Input
                    title='Email'
                    placeholder='Ваш email'
                    value={email}
                    handleChange={handleChangeEmail}
                    errorMessage={errors.email}
                />
                <Input
                    title='Пароль'
                    placeholder='Ваш пароль'
                    value={password}
                    handleChange={handleChangePassword}
                    errorMessage={errors.password}
                />
                <Input
                    title='Повторите пароль'
                    placeholder='Повторите пароль'
                    value={confirmPassword}
                    handleChange={handleChangeConfirmPassword}
                    errorMessage={errors.confirmPassword}
                />
                <Button content='Регистарция' onClick={handleSubmit} type='primary' />
                <p className='sign-up__form-description'>
                    Уже есть аккаунт? {' '}
                <Link to='/sign-in' className='sign-up__form-link'>
                    Войти
                </Link>
                </p>
            </form>
        </div>
    )
};
