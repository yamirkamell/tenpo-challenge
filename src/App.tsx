import {
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/login';
import { RouterLayout } from './common/RouterLayout';
import { Home } from "./pages/home";

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />} >
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;