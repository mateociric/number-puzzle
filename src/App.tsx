import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'App.scss';
import Header from 'component/Header/Header';
import Login from 'page/Login/Login';
import Register from 'page/Register/Register';
import PasswordRecovery from 'page/PasswordRecovery/PasswordRecovery';
import Game from 'page/Game/Game';

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/*' element={<Login />}></Route>
          <Route path='/Register/*' element={<Register />}></Route>
          <Route path='/PasswordRecovery/*' element={<PasswordRecovery />}></Route>
          <Route path='/Game/*' element={<Game />}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App;