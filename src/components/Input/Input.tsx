import { FC } from 'react';
import './Input.scss';

interface IInput {
    value: string;
    handleChange: (newValue: string) => void;
    title: string;
    placeholder?: string;
    isDisabled?: boolean;
    errorMessage?: string;
}

export const Input: FC<IInput> = ({handleChange, title, value, errorMessage, isDisabled = false, placeholder}) => {
    return (
        <div className='input-wrapper'>
            <label className='label' htmlFor="input-text">{title}</label>
            <input
               type="text"
               placeholder={placeholder}
               disabled={isDisabled}
               id='input-text'
               value={value}
               onChange={(e) => handleChange(e.target.value)}
               className={`input ${errorMessage && 'error'}`} />
               {errorMessage && <div className='errorMessage'>{errorMessage}</div>}
        </div>
    )
};
