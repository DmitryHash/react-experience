import './App.scss';
import { Button } from './components/Button/Button';
import { Title } from './components/Title/Title';
import { UserInfo } from './components/UserInfo/UserInfo';

export const App = () => {

  return (
    <div>
      <Title />
      <UserInfo username='Dmitry Podolnitski' />
    </div>
  );
}