import { BooleanLiteral } from 'typescript';
import './Tabs.scss';
import { type } from 'os';
import { FC } from 'react';

interface ITabs {
    content: string
    isDisabled: boolean;
    type: 'all' | 'myFavorites' | 'popular';
}

export const Tabs: FC<ITabs> = ({content, isDisabled, type}) => {

    const tabsClass = `tabs tabs-${type} ${isDisabled ? 'disabled' : 'active'}`

    return (

        <button 
            className={tabsClass}
            disabled={isDisabled}
        >
            {content}
        </button>

    )
}