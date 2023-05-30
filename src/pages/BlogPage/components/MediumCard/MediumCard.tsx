import { FC } from 'react';
import './MediumCard.scss';
import { DateCard } from '../../../../components/DateCard/DateCard';
import { Typography } from '../../../../components/Typography/Typography';
import { ActionsCard } from '../../../../components/ActionsCard/ActionsCard';

interface IMediumCard {
    id: number;
    title: string;
    image: string;
    date: string;
    onClick: (id: number) => void;
}

export const MediumCard: FC<IMediumCard> = ({id, date, image, title, onClick}) => {
    return (
        <div className='medium-card'>
            <div className='medium-card__img-box'>
                <img className='medium-card__img' src={image} alt={title} />
            </div>
            <DateCard date={date} />
<<<<<<<< HEAD:src/pages/BlogPage/components/MediumCard/MediumCard.tsx
            <button className='medium-card__btn' onClick={() => onClick(id)}>
                <Typography content={title} type='H3'/>
            </button>
========
            <Typography content={title} type='H3' />
>>>>>>>> 33cf49f2f2b35d27ddb7a67d6220490b027acff4:src/components/MediumCard/MediumCard.tsx
            <div className='medium-card__actions'>
                <ActionsCard />
            </div>
        </div>
    )
};
