import { FC, useState } from 'react';
import { Input } from '../Input/Input';
import './Form.scss';
import { Textarea } from '../Textarea/Textarea';



export const Form: FC = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [text, setText] = useState('');
    const [age, setAge] = useState('');


    const handleChangeName = (newName: string) => {
        setName(newName);
    }
    const handleChangeLastName = (newLastName: string) => {
        setLastName(newLastName);
    }
    const handleChangeAge = (newAge: string) => {
        setAge(newAge);
    }
    const handleChangeText = (newName: string) => {
        setText(newName);
    }

    return (
        <form>
            <Input 
                title='Title'
                placeholder='enter ur text'
                value={name}
                handleChange={handleChangeName}
            />
            <Input 
                title='Title'
                placeholder='enter ur text'
                value={age}
                isDisabled
                handleChange={handleChangeAge}
            />
            <Input 
                title='Title'
                placeholder='enter ur text'
                value={lastName}
                errorMessage='ERRORRR'
                handleChange={handleChangeLastName}
            />
            <br/>
            <br/>
            <br/>
            <br/>

            <Textarea title='someTitle' value={text} placeholder='placeholder' handleChange={handleChangeText}/>
        </form>
    )
};
