import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Main from './components/Main'
import Path from './components/Path'
import Recovery from './components/Recovery'
import NewPassord from './components/NewPassword'
import Authorization from './components/Authorization';
import Account from "./components/Account"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Outlet/>}>
        <Route index element={<Main/>}/>
        <Route path="login" element={<Authorization/>}/>

        <Route path="recovery" element={<Path/>}> 

          <Route index element={<Recovery/>}/>

          <Route path="good">
            <Route index element={<NewPassord/>}/>
          </Route>

        </Route>

        <Route path="authorized" element={<Path/>}>
          <Route index element={<Account/>}/>
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
