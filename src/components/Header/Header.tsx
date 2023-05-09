import { FC, useState } from 'react';
import { Hamburger } from '../Hamburger/Hamburger';
import { Input } from '../Input/Input';
import { IconButton } from '../IconButton/IconButton';
import cancel from '../../assets/icons/cancel.svg';
import search from '../../assets/icons/menu.svg'
import './Header.scss';
import { UserInfo } from '../UserInfo/UserInfo';



export const Header: FC = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [searchValue, setsearchValue] = useState('');

    const HandleToggleClick = () => {
        setOpenSearch(!openSearch);
        setsearchValue('');
    }

    const handleChangeSearch = (newValue: string) => {
        setsearchValue(searchValue)
    }

    return (
        <header className='header'>
            <Hamburger />
            {openSearch && (
                <div className='header__search-input'>
                    <input 
                        type="text"
                        placeholder='Search...'
                        value={searchValue}
                        onChange = {(e) => handleChangeSearch(e.target.value)}
                        className='header__search-input'
                    />
                </div>
            )}
            <div>
                <div>
                    <IconButton onClick={HandleToggleClick}>
                        {openSearch ? (
                            <img src={cancel} alt='cancel' />
                        ) : (
                            <img src={search} alt='search' />
                        )}
                    </IconButton>
                </div>
                <UserInfo username={'Dmitry Podolnitski'} />
            </div>
        </header>
    )
};
