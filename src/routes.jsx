import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
// import CreateRoom from './pages/CreateRoom';
import Home from './pages/Home';
import Logo from './pages/Logo';
import Fruit from './pages/Products/Fruit';
import Grains from './pages/Products/Grains';
import Meat from './pages/Products/Meat';
import Total from './pages/Products/Total';
import Vegetable from './pages/Products/Vegetable';
// import Location from './parts/map/Location';
// import Users from './pages/Users';
// import DetailMap from './pages/Details/DetailMap';
// import Detail from './pages/Details/Detail';
import SignIn from './pages/Auth/SignIn';
// import SignOut from './pages/Auth/SignOut';
import SignUp from './pages/Auth/SignUp';

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
      {/* <Route path="signout" element={<SignOut />} /> */}

      {/* <Route path="products/:id" element={<Detail />} />
      <Route path="pickupplace" element={<DetailMap />} /> */}

      {/* <Route path="users" element={<Users />} />

      <Route path="createroom" element={<CreateRoom />} />
      <Route path="location" element={<Location />} /> */}
    </>
  )
);

export default router;
