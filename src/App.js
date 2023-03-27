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
import MobileAppDevelopmentPages from './pages/MobileAppDevelopmentPages'
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
import CallCenterServicesPages from './pages/CallCenterServicesPages';
import BackOfficeServicePages from './pages/BackOfficeServicePages';
import TrainingHRSourcingPages from './pages/TrainingHRSourcingPages';
import SoftwareDevelopmentPages from './pages/SoftwareDevelopmentPages';
import DigitalServicePages from './pages/DigitalServicePages';
import MobileApplicationsPages from './pages/MobileApplicationsPages';
import { BlogDetailsPages } from './pages/BlogDetailsPages';
import { BlogDetailsPages2 } from './pages/BlogDetailsPages2';
import { BlogDetailsPages3 } from './pages/BlogDetailsPages3';
import {NewsRoomPages1} from './pages/NewsRoomPages/NewsRoomPages1'
import {NewsRoomPages2} from './pages/NewsRoomPages/NewsRoomPages2'
import {NewsRoomPages3} from './pages/NewsRoomPages/NewsRoomPages3'
import {NewsRoomPages4} from './pages/NewsRoomPages/NewsRoomPages4'
import {NewsRoomPages5} from './pages/NewsRoomPages/NewsRoomPages5'
import {NewsRoomPages6} from './pages/NewsRoomPages/NewsRoomPages6'


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
          <Route path="/mobileAppdevelopment" element={<MobileAppDevelopmentPages/>} />
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
          <Route path="/callcenterservices" element={<CallCenterServicesPages/>} />
          <Route path="/backofficeservices" element={<BackOfficeServicePages/>} />
          <Route path="/traininghrsourcing" element={<TrainingHRSourcingPages/>} />
          <Route path="/softwaredevelopment" element={<SoftwareDevelopmentPages/>} />
          <Route path="/digitalservice" element={<DigitalServicePages/>} />
          <Route path="/mobileapplications" element={<MobileApplicationsPages/>} />
          <Route path="/BlogDetails" element={<BlogDetailsPages/>} />
          <Route path="/BlogDetails2" element={<BlogDetailsPages2/>} />
          <Route path="/BlogDetails3" element={<BlogDetailsPages3/>} />
          <Route path="/NewsRoomPages1" element={<NewsRoomPages1/>} />
          <Route path="/NewsRoomPages2" element={<NewsRoomPages2/>} />
          <Route path="/NewsRoomPages3" element={<NewsRoomPages3/>} />
          <Route path="/NewsRoomPages4" element={<NewsRoomPages4/>} />
          <Route path="/NewsRoomPages5" element={<NewsRoomPages5/>} />
          <Route path="/NewsRoomPages6" element={<NewsRoomPages6/>} />

        </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
