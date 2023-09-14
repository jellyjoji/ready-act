import {HelmetProvider} from 'react-helmet-async';
import {Toaster} from 'react-hot-toast';
import {RouterProvider} from 'react-router-dom';
import router from './routes';
import AuthProvider from './context/Auth';

function App() {
  return (
    <>
      <HelmetProvider>
        <AuthProvider>
          <div className="max-w-xl mx-auto mt-12 font-pretendard">
            <RouterProvider router={router} />
          </div>
        </AuthProvider>
      </HelmetProvider>
      <Toaster />
    </>
  );
}

export default App;
