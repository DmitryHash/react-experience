import './App.scss';
import { PageTemplate } from './components/PageTemplate/PageTemplate';
import { RegConfirm } from './page/RegConfirm/RegConfirm';
import { SignIn } from './page/SignIn/SignIn';
import { SignUp } from './page/SignUp/SignUp';
import { Success } from './page/Success/Success';


export const App = () => {

  return (
    <div>
      <PageTemplate>
        <SignIn />
      </PageTemplate>
    </div>
  );
}