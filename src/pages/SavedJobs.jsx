import {
useEffect,
useState
}
from "react";

import Navbar from "../components/navbar/Navbar";

import Footer from "../components/footer/Footer";

import JobCard from "../components/jobs/JobCard";

import {
getAllJobs
}
from "../services/jobService";

export default function SavedJobs(){

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

const saved=

JSON.parse(

localStorage.getItem(
"savedJobs"
)

||

"[]"

);

setJobs(

res.data.filter(

j=>

saved.includes(
j.id
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
color:"white"
}}
>

Saved Jobs

</h1>

<div className="job-grid">

{

jobs.map(

job=>

<JobCard

key={job.id}

job={job}

/>

)

}

</div>

</div>

<Footer/>

</>

)

}