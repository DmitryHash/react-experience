import './App.scss';
import { Button } from './components/Button/Button';
import { CardList } from './components/CardList/CardList';
import { Form } from './components/Form/Form';
import { MenuCard } from './components/MenuCard/MenuCard';


export const App = () => {

  return (
    <div>
      <Button content='Sibmit' type='primary' isDisabled={false} />
    </div>
  );
}