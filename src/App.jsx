import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Home from './views/home'
import './assets/styles/font.scss'
import './assets/styles/main.scss'
import './assets/styles/responsive.scss';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import "aos/dist/aos.css";
import Login from './views/login';
import DashboardLayout from './views/dashboard/dashboardLayout';
import PrivacyPolicy from './views/privacyPolicy';
import CommunityGuidelines from './views/communityGuidlines';

function App() {
  AOS.init();
  return (
    < >
     <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/privacy-policy" element={<PrivacyPolicy/>}/>
      <Route exact path="/community-guidelines" element={<CommunityGuidelines/>}/>
      <Route exact path="/dashboard/*" element={<DashboardLayout/>}/>

     </Routes>
     <ToastContainer/>
    </>
  )
}

export default App
