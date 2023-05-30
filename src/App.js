import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/index.jsx';
import SignIn from './pages/sign-in/index.jsx';
import User from './pages/user/index.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/profile" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
