import { useState } from "react";

import {
FaHeart,
FaRegHeart,
FaCheckCircle,
FaLink
}
from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import "../../styles/jobCard.css";

export default function JobCard({ job }) {

const navigate = useNavigate();

const today = new Date();

const expiry = new Date(job.expiryDate);

const active = expiry >= today;

const verifiedCompanies = [
"Google","Microsoft","Amazon","Apple","Meta","Netflix","Oracle","Adobe","IBM","Intel",
"Infosys","TCS","Wipro","Accenture","Cognizant","Capgemini","HCL","Deloitte","EY",
"PwC","KPMG","Google India","Flipkart","Meesho","PhonePe","Razorpay","Zoho",
"Freshworks","KITS"
];

const isVerified =
verifiedCompanies
.map(company => company.toLowerCase())
.includes(job.company?.toLowerCase());

const featuredCompanies = [
"Google","Microsoft","Amazon","Adobe","Oracle","IBM","KITS"
];

const isFeatured =
featuredCompanies
.map(company => company.toLowerCase())
.includes(job.company?.toLowerCase());

const diffDays = Math.ceil(
(expiry - today) /
(1000 * 60 * 60 * 24)
);

let expiryText = "";

if(active){

if(diffDays===0){
expiryText="🔥 Closing Today";
}

else if(diffDays===1){
expiryText="🔥 Closing Tomorrow";
}

else if(diffDays<=10){
expiryText=`Expires in ${diffDays} days`;
}

}

const [saved,setSaved]=useState(

JSON.parse(
localStorage.getItem("savedJobs") || "[]"
).includes(job.id)

);

const toggleSave=()=>{

let jobs =
JSON.parse(
localStorage.getItem("savedJobs") || "[]"
);

if(saved){

jobs =
jobs.filter(
id=>id!==job.id
);

toast.success("Job removed from saved");

}
else{

jobs.push(job.id);

toast.success("Job saved");

}

localStorage.setItem(
"savedJobs",
JSON.stringify(jobs)
);

setSaved(!saved);

};

const handleApply=()=>{

if(job.applyUrl){

toast.success("Opening application");

window.open(
job.applyUrl,
"_blank"
);

}
else{

toast.error("Apply link not available");

}

};

const copyJobLink=()=>{

const link =
`${window.location.origin}/jobs/${job.id}`;

navigator.clipboard.writeText(link);

toast.success("Job link copied");

};

return(

<div className={`job-card ${isFeatured ? "featured" : ""}`}>

<div className="job-top">

<h3>
{job.title}
</h3>

<div>

<div
className={
active ? "status active" : "status inactive"
}
>
{active ? "ACTIVE" : "INACTIVE"}
</div>

{
active && expiryText &&

<p className="expiry-badge">
{expiryText}
</p>
}

</div>

</div>

<div className="company-row">

<h5 className="company">
{job.company}
</h5>

{
isVerified &&

<span className="verified-badge">

<FaCheckCircle/>

Verified

</span>
}

</div>

<div className="info">

<p>
📍 {job.location}
</p>

<p className="work-mode">
💻 {job.workMode || "On-site"}
</p>

<p className="salary">
💰 {job.salary}
</p>

</div>

<div className="skills">

{
job.skills?.map(
(skill,index)=>(

<span key={index}>
{skill}
</span>

)
)
}

</div>

<div className="actions">

<button
className="apply"
onClick={handleApply}
>
Apply Now
</button>

<button
className="details"
onClick={()=>
navigate(`/jobs/${job.id}`)
}
>
View Details
</button>

<button
className="copy-link"
onClick={copyJobLink}
>
<FaLink/>
</button>

<button
className="save"
onClick={toggleSave}
>
{saved ? <FaHeart/> : <FaRegHeart/>}
</button>

</div>

</div>

);

}