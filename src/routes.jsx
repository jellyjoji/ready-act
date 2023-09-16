import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import CreateRoom from './pages/CreateRoom';
import Detail from './pages/Details/Detail';
import DetailMap from './pages/Details/DetailMap';
import Home from './pages/Home';
import Logo from './pages/Logo';
import Fruit from './pages/Products/Fruit';
import Grains from './pages/Products/Grains';
import Meat from './pages/Products/Meat';
import Total from './pages/Products/Total';
import Vegetable from './pages/Products/Vegetable';
import Users from './pages/Users';
import DetailStatus from './pages/details/DetailStatus';
import Location from './parts/map/Location';
import ChangeStatus from './pages/status/ChangeStatus';
import Profile from './pages/auth/Profile';

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

      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="profile" element={<Profile />} />

      <Route path="products/:id" element={<Detail />} />
      <Route path="products/pickupplace" element={<DetailMap />} />
      <Route path="products/:id/status" element={<DetailStatus />} />

      <Route path="users" element={<Users />} />

      <Route path="createroom" element={<CreateRoom />} />
      <Route path="location" element={<Location />} />

      <Route path="status/:id" element={<ChangeStatus />} />
    </>
  )
);

export default router;
