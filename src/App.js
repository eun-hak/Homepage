import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useParams,
} from "react-router-dom";
import Mainpage from "./page/Mainpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
