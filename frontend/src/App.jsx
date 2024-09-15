import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/Pages/HomePage";
import { LoginPage } from "./components/Pages/LoginPage";
import { NotFoundPage } from "./components/Pages/NotFoundPage";
import { SignUpPage } from "./components/Pages/SignUpPage";
import MainNavigation from "./components/PagesComponents/MainNavigation";
import routes from "./utils/routes";
import 'bootstrap/dist/css/bootstrap.css';
import AuthProvider from "./contexts/authorization/AuthProvider";
import { Provider } from 'react-redux';
import store from "./store/store";


const App = () => {

  return (
      <div className="d-flex flex-column h-100">
      <BrowserRouter>
        <Provider store={store}>
        <AuthProvider>
        <MainNavigation />
        <Routes>
          <Route path={routes.mainPagePath()} element={<HomePage />} />
          <Route path={routes.loginPagePath()} element={<LoginPage />} />
          <Route path={routes.signUpPagePath()} element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </AuthProvider>
        </Provider>
        
        
      </BrowserRouter>
    </div>
    
  );
};

export default App;
