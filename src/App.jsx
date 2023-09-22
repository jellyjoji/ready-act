import { createContext, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './context/Auth';
import router from './routes';
import { pb } from './api/pocketbase';

export const AppContext = createContext();

function App() {
  pb.autoCancellation(false);
  const [createRoomForm, setCreateRoomForm] = useState({
    category: '',
    title: '',
    content: '',
    price: 0,
    pickup: null,
    payment: '',
    participateCounter: 0,
    meetingPoint: '',
    uploadImage: null,
    status: '',
    location: '',
    creator: '',
    participate: '',
  });

  const appState = {
    createRoomForm,
    updateCreateRoomForm: (key, value) => {
      setCreateRoomForm((state) => {
        return {
          ...state,
          [key]: value,
        };
      });
    },
  };

  return (
    <>
      <HelmetProvider>
        <AuthProvider>
          {/* 공급할 앱 상태를 받은 appState 를 AppContext 에 주입  */}
          <AppContext.Provider value={appState}>
            <div className="max-w-xl mx-auto mt-12 font-pretendard">
              <RouterProvider router={router} />
            </div>
          </AppContext.Provider>
        </AuthProvider>
      </HelmetProvider>

      <Toaster />
    </>
  );
}
export default App;
