import './Tabs.scss';
import { FC, useState } from 'react';
import { Tab } from '../Tab/Tab';

interface ITabs {

}

export const Tabs: FC<ITabs> = () => {
    const [tabs, setTabs] = useState([
        {id: 1, title: 'All', isActive: true, isDisabled: false},
        {id: 2, title: 'My favorites', isActive: false, isDisabled: false},
        {id: 3, title: 'Popular', isActive: false, isDisabled: true},
    ]);


    return (
        <ul className='tabs'>
            {tabs.map(({id, title, isActive, isDisabled}) => {
                return (
                    <Tab title={title} key={id} isActive={isActive} isDisabled={isDisabled}/>
                )
            })}
        </ul>
    )
}