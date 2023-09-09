import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/Home';
import Logo from './pages/Logo';
import Search from './pages/Search';
import Total from './pages/Total';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Logo />} />
      <Route path="/r09m" element={<Home />} />
      <Route path="r09m/products/total" element={<Total />} />

      <Route path="search" element={<Search />} />
      <Route path="/chat" element={<Total />} />
      <Route path="/profile" element={<Total />} />
    </>
  )
);

export default router;
