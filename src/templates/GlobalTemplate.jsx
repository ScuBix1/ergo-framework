import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Outlet } from 'react-router';

const GlobalTemplate = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default GlobalTemplate;
