import './App.scss';
import { Button } from './components/Button/Button';
import { Hamburger } from './components/Hamburger/Hamburger';
import { Tabs } from './components/Tabs/Tabs';
import { Title } from './components/Title/Title';

export const App = () => {

  return (
    <div>
      <div className='button'> 
      <Button content={'Privet'} isDisabled={false} type={'primary'} />
      <Button content={'Privet'} isDisabled type={'secondary'} />
      <Button content={'Privet'} isDisabled={false} type={'secondary2'} />
      </div>
      <Title />
      <Hamburger />
      <div className='tabsMain'>
      <Tabs content='All' isDisabled={false} type={'all'}/>
      <Tabs content='My Favorites' isDisabled={false} type={'myFavorites'}/>
      <Tabs content='Popular' isDisabled={false} type={'popular'}/>
      </div>
    </div>
  );
}