import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import InboundServicesPages from './pages/InboundServicesPages';
import OutboundServicesPages from './pages/OutboundServicesPages';
import SpecializedServicesPages from './pages/SpecializedServicesPages';
import Home from './pages/HomePages'
import AboutUsPages from './pages/AboutUsPages'
import BadDebtRecovery from './pages/BadDebtRecovery'
import DataEntryContentManagement from './pages/DataEntryContentManagement'
import DigitalSupportServices from './pages/DigitalSupportServices'
import TrainingPages from './pages/TrainingPages';
import SkillDevelopmentProgramPages from './pages/SkillDevelopmentProgramPages'
import HrSourcePages from './pages/HrSourcePages'
import CustomSoftwareDevelopmentPages from './pages/CustomSoftwareDevelopmentPages'
import SoftwareConsultingPages from './pages/SoftwareConsultingPages'
import BPOSolutionsPages from './pages/BPOSolutionsPages'
import BusinessSoftwarePages from './pages/BusinessSoftwarePages'
import SmsBusinesspages from './pages/SmsBusinesspages'
import CareerPages from './pages/CareerPages';
import HowWeWorkPages from './pages/HowWeWorkPages';
import BlogPages from './pages/BlogPages';
import ContactPages from './pages/ContactPages';
import { NewsPages } from './pages/NewsPages';
import PlatformManagementPages from './pages/PlatformManagementPages';
import { ShortCodeSupportPages } from './pages/ShortCodeSupportPages';
import { AndroidAppPages } from './pages/AndroidAppPages';


function App() {
  return (
    <>

  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsPages />} />
          <Route path="/inboundservices" element={<InboundServicesPages/>} />
          <Route path="/outboundservices" element={<OutboundServicesPages/>} />    
          <Route path="/specializedservices" element={<SpecializedServicesPages/>} />
          <Route path="/baddebtrecovery" element={<BadDebtRecovery/>} />
          <Route path="/dataentrycontentmanagement" element={<DataEntryContentManagement/>} />
          <Route path="/digitalsupportservices" element={<DigitalSupportServices/>} />
          <Route path="/training" element={<TrainingPages/>} />
          <Route path="/skilldevelopmentprogram" element={<SkillDevelopmentProgramPages/>} />
          <Route path="/hrsourceing" element={<HrSourcePages/>} />
          <Route path="/customsoftwaredevelopment" element={<CustomSoftwareDevelopmentPages/>} />
          <Route path="/softwareconsulting" element={<SoftwareConsultingPages/>} />
          <Route path="/bposolutions" element={<BPOSolutionsPages/>} />
          <Route path="/businesssoftware" element={<BusinessSoftwarePages/>} />
          <Route path="/smsBusiness" element={<SmsBusinesspages/>} />
          <Route path="/career" element={<CareerPages/>} />
          <Route path="/work" element={<HowWeWorkPages/>} />
          <Route path="/blog" element={<BlogPages/>} />
          <Route path="/newsroom" element={<NewsPages/>} />
          <Route path="/contact" element={<ContactPages/>} />
          <Route path="/businesssoftware" element={<BusinessSoftwarePages/>} />
          <Route path="/platformManagement" element={<PlatformManagementPages/>} />
          <Route path="/shortCodesupport" element={<ShortCodeSupportPages/>} />
          <Route path="/androidapp" element={<AndroidAppPages/>} />
      

          
        </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
