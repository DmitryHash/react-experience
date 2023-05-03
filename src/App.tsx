import './App.scss';
import { Hamburger } from './components/Hamburger/Hamburger';
import { Title } from './components/Title/Title';

export const App = () => {

  return (
    <div>
      <Title />
      <Hamburger />
    </div>
  );
}