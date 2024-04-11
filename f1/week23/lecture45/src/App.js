import "./App.css";

import LoginForm from "./components/LoginForm";
import Main from "./components/Main";
import AuthContextProvider from "./AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <LoginForm />
        <Main />

        {/* <BrowserRouter>
          <Route></Route>
        </BrowserRouter> */}
      </AuthContextProvider>
    </div>
  );
}

export default App;
