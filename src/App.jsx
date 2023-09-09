import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  return (
    <>
      <HelmetProvider>
        <div className="max-w-xl mx-auto mt-12 font-pretendard bg-purple-200">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
      <Toaster />
    </>
  );
}

export default App;