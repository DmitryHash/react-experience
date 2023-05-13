import { FC } from 'react';
import './ContentPage.scss';
import { Typography } from '../../components/Typography/Typography';

interface IContentPage {
}

export const ContentPage: FC<IContentPage> = () => {
    return (
        <div className='content-page'>
            <Typography content='Astronauts prep for new solar arrays on nearly seven-hour spacewalk' type='H1'/>
            
        </div>
    )
};
