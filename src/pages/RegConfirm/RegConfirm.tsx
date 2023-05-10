import { FC } from 'react';
import { Typography } from '../../components/Typography/Typography';
import { Button } from '../../components/Button/Button';
import './RegConfirm.scss';



export const RegConfirm: FC = () => {
    return (
            <div className='reg-confirm'>
                <Typography content='Registration Confirmation' type='H1' />
                <div className='reg-confirm__box'>
                    <p className='reg-confirm__box-text'>
                        Please activate your account with the activation<br/>
                        link in the email example@gmail.com.<br/>Please, check your email
                    </p>
                    <Button type={'primary'} content={'Go to home'} />
                </div>
            </div>
    )
};
