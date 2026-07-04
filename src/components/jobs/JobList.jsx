import {
useEffect,
useState
}
from "react";

import {
getAllJobs,
searchJobs
}
from "../../services/jobService";

import JobCard from "./JobCard";

import JobSkeleton from "./JobSkeleton";

import "../../styles/jobList.css";

export default function JobList({

keyword,
type,
location

}){

const[
jobs,
setJobs
]=
useState([]);

const[
page,
setPage
]=
useState(1);

const[
loading,
setLoading
]=
useState(true);

const jobsPerPage=9;

useEffect(()=>{

load();

},[
keyword,
type,
location
]);

const load=async()=>{

try{

setLoading(true);

let res;

if(
keyword &&
keyword.trim()!==""
){

res=
await searchJobs(
keyword
);

}

else{

res=
await getAllJobs();

}

let data=
res.data;

if(type){

data=
data.filter(
j=>
j.type===type
);

}

if(location){

data=
data.filter(
j=>
j.location
.toLowerCase()
.includes(
location.toLowerCase()
)
);

}

setJobs(
data
);

setPage(
1
);

}

catch(error){

console.log(error);

setJobs([]);

}

finally{

setLoading(false);

}

};

const last=
page*
jobsPerPage;

const first=
last-
jobsPerPage;

const current=
jobs.slice(
first,
last
);

const pages=
Math.ceil(
jobs.length/
jobsPerPage
);

if(loading){

return(

<div className="job-grid">

{
Array.from({
length:9
}).map((_,i)=>(

<JobSkeleton
key={i}
/>

))
}

</div>

);

}

return(

<>

<div className="job-grid">

{

current.length>0

?

current.map(

job=>(

<JobCard

key={job.id}

job={job}

/>

)

)

:

<div
className="empty-state"
style={{
gridColumn:"1/-1",
textAlign:"center",
padding:"80px 20px"
}}
>

<h2
style={{
fontSize:"32px",
marginBottom:"14px"
}}
>

😔

</h2>

<h3
style={{
color:"white",
marginBottom:"10px"
}}
>

No jobs found

</h3>

<p
style={{
color:"#9ca8bd"
}}
>

Try another keyword or change the filters.

</p>

</div>

}

</div>

{

pages>1 && (

<div className="pagination">

<button

disabled={
page===1
}

onClick={()=>
setPage(
page-1
)
}

>

Previous

</button>

{

Array.from({

length:pages

}).map((_,i)=>(

<button

key={i}

className={

page===i+1

?

"active-page"

:

""

}

onClick={()=>
setPage(
i+1
)
}

>

{i+1}

</button>

))

}

<button

disabled={
page===pages
}

onClick={()=>
setPage(
page+1
)
}

>

Next

</button>

</div>

)

}

</>

);

}