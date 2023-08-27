import { Sora } from '@next/font/google';


const sora = Sora ({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100','200','300','400','500','600','700','800'],
});

import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';
import Transition from '../components/Transition';
import Home from '../pages';
import Services from '../pages/services';
import work from '../pages/work';
import testimonials from '../pages/testimonials';
import About from '../pages/about';

const Layout = () => {
  return (
  <div className={'page bgsite text-white bgcover bg-no-repeat ${sora.variable} font-sora relative'}>
    <TopLeftImg />
    <Nav />
    <Transition />
    <Header />
    <Home />
    
   
    
    
   
  </div>
  );
};

export default Layout;
