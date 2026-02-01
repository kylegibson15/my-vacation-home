import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppShell from './components/AppShell';
import Home from './pages/Home';
import Guide from './pages/Guide';
import CheckOut from './pages/CheckOut';
import Explore from './pages/Explore';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path={BASE} element={<Home />} />
          <Route path={`${BASE}/`} element={<Home />} />
          <Route path={`${BASE}/guide`} element={<Guide />} />
          <Route path={`${BASE}/check-out`} element={<CheckOut />} />
          <Route path={`${BASE}/explore`} element={<Explore />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
