import { Layout } from 'antd';
import React, { useEffect } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import { NavBar } from './components/NavBar';
import { useAction } from './hooks/useAction';
import { IUser } from './models/IUsers';

function App() {

  const { setUser, setIsAuth } = useAction()

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username' || '') } as IUser)
      setIsAuth(true)
    }
  }, [])

  return (
    <div className="App">
      <Layout>
        <NavBar />
        <Layout.Content>
          <AppRouter />
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;
