import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import CreateRoom from './pages/CreateRoom';
import Home from './pages/Home';
import Logo from './pages/Logo';
import Search from './pages/Search';
import Profile from './pages/auth/Profile';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import ChangeStatus from './pages/details/ChangeStatus';
import Detail from './pages/details/Detail';
import DetailMap from './pages/details/DetailMap';
import DetailStatus from './pages/details/DetailStatus';
import Fruit from './pages/products/Fruit';
import Grains from './pages/products/Grains';
import Meat from './pages/products/Meat';
import Total from './pages/products/Total';
import Vegetable from './pages/products/Vegetable';
import Location from './parts/map/Location';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Logo />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Total />} />
      <Route path="vegetable" element={<Vegetable />} />
      <Route path="fruit" element={<Fruit />} />
      <Route path="grains" element={<Grains />} />
      <Route path="meat" element={<Meat />} />
      <Route path="search" element={<Search />} />

      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="profile" element={<Profile />} />

      <Route path="products/:id" element={<Detail />} />
      <Route path="products/:id/pickupplace" element={<DetailMap />} />
      <Route path="products/:id/status" element={<DetailStatus />} />
      <Route path="status/:id" element={<ChangeStatus />} />

      {/* <Route path="users/:id" element={<Users />} /> */}

      <Route path="createroom" element={<CreateRoom />} />
      <Route path="location" element={<Location />} />
    </>
  )
);

export default router;
