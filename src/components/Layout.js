import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Footer } from './Footer/Footer';
import { Container } from './App.styled';

export const Layout = () => {
  return (
    <Container >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      
      <Toaster position="top-right" reverseOrder={false} />
      <Footer/>
    </Container>
  );
};
