import { FC } from 'react';



export const Example: FC = () => {

    const users = [
        {id: 1 , name: 'Alex', age: 18},
        {id: 12 , name: 'Alex', age: 18},
        {id: 123 , name: 'Alex', age: 18},
        {id: 1112 , name: 'Alex', age: 18},
        {id: 1231 , name: 'Alex', age: 18},
        {id: 144 , name: 'Alex', age: 18},
        {id: 14 , name: 'Alex', age: 18},
        {id: 112 , name: 'Alex', age: 18},
        {id: 1111 , name: 'Alex', age: 18},

    ]

    return (
        <div>
            {users.map(({age, id, name}) => (
                <li key={id}>{name} <b>{age}</b></li>
            ))}
        </div>
    )
};
