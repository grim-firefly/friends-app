import React from 'react';
import Home from './component/Home/Home';
import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom';
import SignIn from './component/SignIn/SignIn';
import Chat from './component/Chat/Chat';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <h1 className={`flex justify-center py-2 text-2xl text-white bg-[#00a884] font-serif `} >Friends App</h1>
      <Routers>
        <Routes>
          <Route path='/' element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          } replace >
            <Route path='rooms/:roomId' element={
              <RequireAuth>
                <Chat />
              </RequireAuth>
            } />
          </Route>
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </Routers>
    </div >
  );
}

export default App;
