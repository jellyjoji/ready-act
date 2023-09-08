import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/Home';
import Total from './pages/Total';
import Search from './pages/Search';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/total" element={<Total />} />

      <Route path="/search" element={<Search />} />
      <Route path="/chat" element={<Total />} />
      <Route path="/profile" element={<Total />} />
    </>
  )
);

export default router;
