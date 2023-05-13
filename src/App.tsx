import { PageTemplate } from "./components/PageTemplate/PageTemplate";
import { ContentPage } from "./pages/ContentPage/ContentPage";
import { RegConfirm } from "./pages/RegConfirm/RegConfirm";
import { SignIn } from "./pages/SignIn/SignIn";
// import { RegistrationConfirm } from "./pages/RegistrationConfirm/RegistrationConfirm";
import { SignUp } from "./pages/SignUp/SignUp";
import { Success } from "./pages/Success/Success";

export const App = () => {


  return (
    <>
      <PageTemplate>
        <ContentPage />
      </PageTemplate>
    </>
  );
}
