import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Router from './routes';
import { Suspense } from 'react';
import { LoadingProvider } from './contexts/loading.context';
// import DemoUseState from './hooks/DemoUseState';
// import DemoForm from './form/DemoForm';

function App() {

  return (
    <>
      <Header />
      <Suspense fallback={<></>}>
        <LoadingProvider>
          <Router />
        </LoadingProvider>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
