import { FC } from 'react';
import './Button.scss';


interface IButton {
    content: string;
    isDisabled: boolean;
    type: 'primary' | 'secondary' | 'secondary2';
}


export const Button: FC<IButton> = ({ content, isDisabled, type}) => {

    const buttonClass = `button button-${type} ${isDisabled ? 'disabled' : 'active'}`



    return (
        <button 
            className={buttonClass} 
            disabled={isDisabled}
        >
            {content} 
        </button>
    )
}