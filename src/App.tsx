import './App.scss';
import { PageTemplate } from './components/PageTemplate/PageTemplate';
import { SignUp } from './page/SignUp/SignUp';


export const App = () => {

  return (
    <div>
      <PageTemplate>
        <SignUp />
      </PageTemplate>
    </div>
  );
}