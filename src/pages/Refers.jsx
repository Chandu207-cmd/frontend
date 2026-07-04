import {
useEffect,
useState
}
from "react";

import { toast } from "react-toastify";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import JobCard from "../components/jobs/JobCard";

import {
getAllJobs
}
from "../services/jobService";

import "../styles/refers.css";

export default function Refers(){

const[
jobs,
setJobs
]=
useState([]);

const[
currentPage,
setCurrentPage
]=
useState(1);

const jobsPerPage=9;

useEffect(()=>{

document.title="HR Referrals | Code2Future";

load();

},[]);

const load=async()=>{

const res=
await getAllJobs();

setJobs(

res.data.filter(

job=>

job.hrMail

)

);

};

const copyMail=(mail)=>{

navigator.clipboard.writeText(mail);

toast.success("HR email copied");

};

const lastJob=
currentPage*jobsPerPage;

const firstJob=
lastJob-jobsPerPage;

const currentJobs=
jobs.slice(
firstJob,
lastJob
);

const totalPages=
Math.ceil(
jobs.length/jobsPerPage
);

return(

<>

<Navbar/>

<div className="main">

<h1
style={{
color:"white",
marginBottom:"32px"
}}
>

HR Referrals

</h1>

<p
style={{
marginBottom:"28px",
color:"#94a3b8"
}}
>

Apply directly or contact HR.

</p>

<div className="job-grid">

{

currentJobs.map(

job=>(

<div
key={job.id}
style={{
position:"relative"
}}
>

<JobCard
job={job}
/>

<div className="hr-box">

<p className="hr-title">

HR Contact

</p>

<div className="hr-row">

<p className="hr-mail">

📩 {job.hrMail}

</p>

<button
className="copy-mail"
onClick={()=>copyMail(job.hrMail)}
>

Copy

</button>

</div>

</div>

</div>

)

)

}

</div>

{

totalPages>1 && (

<div className="pagination">

<button
disabled={currentPage===1}
onClick={()=>setCurrentPage(currentPage-1)}
>
Previous
</button>

{
Array.from({
length:totalPages
}).map((_,index)=>(

<button
key={index}
className={
currentPage===index+1
?
"active-page"
:
""
}
onClick={()=>setCurrentPage(index+1)}
>
{index+1}
</button>

))
}

<button
disabled={currentPage===totalPages}
onClick={()=>setCurrentPage(currentPage+1)}
>
Next
</button>

</div>

)

}

</div>

<Footer/>

</>

);

}