import { Layout } from 'antd';
import React from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import { NavBar } from './components/NavBar';

function App() {
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
