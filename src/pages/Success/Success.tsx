import { FC } from 'react';
import './Success.scss';
import { Typography } from '../../components/Typography/Typography';
import { Button } from '../../components/Button/Button';


export const Success: FC = () => {
    return (
        <div className='success'>
            <Typography content='Success' type='H1' />
            <div className='success__box'>
                <p className='success__box-text'>
                    Email confirmed.<br/>
                    Your registration is now completed
                </p>
                <Button type={'primary'} content={'Go to home'} />
            </div>
        </div>
    )
};
