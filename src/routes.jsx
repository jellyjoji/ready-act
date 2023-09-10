import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/Home';
import Logo from './pages/Logo';
import Search from './pages/Search';
import Total from './pages/Products/Total';
import Vegetable from './pages/Products/Vegetable';
import Fruit from './pages/Products/Fruit';
import Grains from './pages/Products/Grains';
import Meat from './pages/Products/Meat';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Logo />} />
      <Route path="/r09m" element={<Home />} />
      <Route path="r09m/products/total" element={<Total />} />
      <Route path="r09m/products/vegetable" element={<Vegetable />} />
      <Route path="r09m/products/fruit" element={<Fruit />} />
      <Route path="r09m/products/grains" element={<Grains />} />
      <Route path="r09m/products/meat" element={<Meat />} />

      <Route path="search" element={<Search />} />
      <Route path="/chat" element={<Total />} />
      <Route path="/profile" element={<Total />} />
    </>
  )
);

export default router;
