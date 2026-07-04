import {
useEffect,
useState
}
from "react";

import {
useParams
}
from "react-router-dom";

import Navbar from "../components/navbar/Navbar";

import Footer from "../components/footer/Footer";

import JobCard from "../components/jobs/JobCard";

import {
getAllJobs
}
from "../services/jobService";

export default function CompanyJobs(){

const{
company
}

=

useParams();

const[
jobs,
setJobs
]

=

useState([]);

useEffect(()=>{

load();

},[]);

const load=
async()=>{

const res=

await getAllJobs();

setJobs(

res.data.filter(

j=>

j.company===

decodeURIComponent(
company
)

)

);

};

return(

<>

<Navbar/>

<div className="main">

<h1
style={{
color:"white",
marginBottom:"30px"
}}
>

{decodeURIComponent(company)}

</h1>

<div className="job-grid">

{

jobs.map(

job=>

<JobCard

key={
job.id
}

job={
job
}

/>

)

}

</div>

</div>

<Footer/>

</>

)

}