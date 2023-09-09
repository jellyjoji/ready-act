import Home from '@/pages/Home';
import CreateRoom from '@/pages/CreateRoom'
import { Route } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/createroom" element={<CreateRoom />} />
    </>
  )
);

export default router;