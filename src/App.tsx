import './App.scss';
import { Button } from './components/Button/Button';
import { UserInfo } from './components/UserInfo/UserInfo';

export const App = () => {

  return (
    <div>
      <UserInfo username='Dmitry Podolnitski' />
    </div>
  );
}