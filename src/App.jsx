import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Companies from "./pages/Companies";
import CompanyJobs from "./pages/CompanyJobs";
import SavedJobs from "./pages/SavedJobs";
import Refers from "./pages/Refers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import ScrollToTopButton from "./components/common/ScrollToTopButton";

export default function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/fulltime" element={<Home defaultType="FULL_TIME"/>}/>
<Route path="/parttime" element={<Home defaultType="PART_TIME"/>}/>
<Route path="/internships" element={<Home defaultType="INTERNSHIP"/>}/>
<Route path="/refers" element={<Refers/>}/>
<Route path="/companies" element={<Companies/>}/>
<Route path="/company/:company" element={<CompanyJobs/>}/>
<Route path="/saved" element={<SavedJobs/>}/>
<Route path="/privacy" element={<PrivacyPolicy/>}/>
<Route path="/terms" element={<Terms/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/jobs/:id" element={<JobDetails/>}/>

</Routes>

<ToastContainer
position="top-right"
autoClose={1800}
theme="dark"
/>

<ToastContainer
position="top-right"
autoClose={1800}
theme="dark"
/>

<ScrollToTopButton/>

</BrowserRouter>

);

}