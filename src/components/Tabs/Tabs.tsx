import { BooleanLiteral } from 'typescript';
import './Tabs.scss';
import { type } from 'os';
import { FC } from 'react';
import { Tab } from '../Tab/Tab';

interface ITabs {

}

export const Tabs: FC<ITabs> = () => {


    return (
        <ul className='tabs'>
            <Tab title='All'/>
            <Tab title='My favorites' isActive />
            <Tab title='Popular' isDisabled/>
        </ul>
    )
}