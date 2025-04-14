import Home from './pages/home';
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/login';
import { RouterLayout } from './common/RouterLayout';

const App = () => {
  
  return (
    <div style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Routes>
        <Route path="/" element={<RouterLayout />} >
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;