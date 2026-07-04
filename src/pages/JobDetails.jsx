import {
useEffect,
useState
}
from "react";

import {
useParams,
useNavigate
}
from "react-router-dom";

import {
getJobById
}
from "../services/jobService";

import Navbar from "../components/navbar/Navbar";

import Footer from "../components/footer/Footer";

import "../styles/jobDetails.css";

export default function JobDetails(){

const{
id
}
=
useParams();

const navigate=
useNavigate();

const[
job,
setJob
]
=
useState(null);

useEffect(()=>{

load();

},[]);

const load=
async()=>{

const res=
await getJobById(
id
);

setJob(
res.data
);

};

if(
!job
){

return(

<div className="loading">

Loading...

</div>

);

}

const active=

new Date(
job.expiryDate
)

>=

new Date();

return(

<>

<Navbar/>

<div className="details-page">

<div className="details-card">

<button

className="back-btn"

onClick={()=>

navigate(
"/",
{
replace:true
}
)

}

>

← Back To Jobs

</button>

<div className="top">

<div>

<h1>

{job.title}

</h1>

<h3>

{job.company}

</h3>

</div>

<div

className={

active

?

"badge active"

:

"badge inactive"

}

>

{

active

?

"ACTIVE"

:

"INACTIVE"

}

</div>

</div>

<div className="row">

<div>

📍

{job.location}

</div>

<div className="salary">

₹ {job.salary}

</div>

</div>

<div className="row">

<div>

💼 {job.type}

</div>

<div>

📅 {job.expiryDate}

</div>

</div>

<h2>

Skills

</h2>

<div className="skills">

{

job.skills?.map(

(skill,index)=>(

<span
key={index}
>

{skill}

</span>

)

)

}

</div>

<h2>

Job Description

</h2>

<p>

{job.description}

</p>

<button

className="apply-big"

onClick={()=>

window.open(
job.applyUrl,
"_blank"
)

}

>

Apply Now

</button>

</div>

</div>

<Footer/>

</>

)

}