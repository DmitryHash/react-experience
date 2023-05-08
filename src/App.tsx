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
      <Title content={'Privet'} type={'H1'} />
      <Title content={'Privet'} type={'H2'} />
      <Title content={'Privet'} type={'H3'} />
      <Title content={'Privet'} type={'subline'} />
      <Title content={'Privet'} type={'textSecondary'} />
      <Title content={'Privet'} type={'textPrimary'} />
      <Hamburger />
      <br/>
      <br/>
      <br/>
      <Tabs />
    </div>
  );
}