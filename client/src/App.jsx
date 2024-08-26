import "./App.css";
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./AppRoutes.jsx";





function App() {

  return (
      <div className={'w-full h-full'}>
          <BrowserRouter>
              <AppRoutes/>
          </BrowserRouter>
      </div>
  );
}

export default App;
