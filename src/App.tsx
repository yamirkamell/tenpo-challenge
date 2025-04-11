import Home from './pages/home';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from './pages/login';

const App = () => {
  
  return (
    <div style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Routes>
        <Route path="*" element={<Navigate to={"/login"} replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;