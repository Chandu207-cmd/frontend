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

import ReferralApplyModal from "./ReferralApplyModal";

export default function JobCard({ job }) {

const navigate = useNavigate();

const today = new Date();

const expiry = new Date(job.expiryDate);

const active = expiry >= today;

/* VERIFIED COMPANIES */

const verifiedCompanies = [

"Google",
"Microsoft",
"Amazon",
"Apple",
"Meta",
"Netflix",
"Oracle",
"Adobe",
"IBM",
"Intel",
"Infosys",
"TCS",
"Wipro",
"Accenture",
"Cognizant",
"Capgemini",
"HCL",
"Deloitte",
"EY",
"PwC",
"KPMG",
"Google India",
"Flipkart",
"Meesho",
"PhonePe",
"Razorpay",
"Zoho",
"Freshworks",
"KITS"

];

const isVerified =

verifiedCompanies

.map(

company =>

company.toLowerCase()

)

.includes(

job.company
?.trim()
.toLowerCase()

);

/* FEATURED COMPANIES */

const featuredCompanies = [

"Google",
"Microsoft",
"Amazon",
"Adobe",
"Oracle",
"IBM",
"KITS"

];

const isFeatured =

featuredCompanies

.map(

company =>

company.toLowerCase()

)

.includes(

job.company
?.trim()
.toLowerCase()

);

/* EXPIRY STATUS */

const diffDays = Math.ceil(

(

expiry -

today

)

/

(

1000 *

60 *

60 *

24

)

);

let expiryText = "";

if(active){

if(diffDays === 0){

expiryText =

"🔥 Closing Today";

}

else if(diffDays === 1){

expiryText =

"🔥 Closing Tomorrow";

}

else if(diffDays <= 10){

expiryText =

`Expires in ${diffDays} days`;

}

}

/* SAVED JOBS */

const[
saved,
setSaved
]
=
useState(

JSON.parse(

localStorage.getItem(

"savedJobs"

)

||

"[]"

).includes(

job.id

)

);

/* REFERRAL POPUP */

const[
showReferralModal,
setShowReferralModal
]
=
useState(false);

/* SAVE OR REMOVE JOB */

const toggleSave = () => {

let jobs =

JSON.parse(

localStorage.getItem(

"savedJobs"

)

||

"[]"

);

if(saved){

jobs =

jobs.filter(

id =>

id !== job.id

);

toast.success(

"Job removed from saved"

);

}

else{

if(

!jobs.includes(

job.id

)

){

jobs.push(

job.id

);

}

toast.success(

"Job saved"

);

}

localStorage.setItem(

"savedJobs",

JSON.stringify(

jobs

)

);

setSaved(

!saved

);

};

/* APPLY JOB */

const handleApply = () => {

/*
Referral jobs contain an HR email.

Instead of opening an invalid apply link,
show the referral assistant popup.
*/

if(

job.hrMail &&

job.hrMail.trim() !== ""

){

setShowReferralModal(

true

);

return;

}

/*
Normal jobs open the company application URL.
*/

if(

job.applyUrl &&

job.applyUrl.trim() !== ""

){

toast.success(

"Opening application"

);

window.open(

job.applyUrl,

"_blank",

"noopener,noreferrer"

);

}

else{

toast.error(

"Apply link not available"

);

}

};

/* COPY JOB LINK */

const copyJobLink = async () => {

const link =

`${window.location.origin}/jobs/${job.id}`;

try{

await navigator.clipboard.writeText(

link

);

toast.success(

"Job link copied"

);

}

catch(error){

toast.error(

"Unable to copy job link"

);

}

};

/* VIEW JOB DETAILS */

const viewDetails = () => {

navigate(

`/jobs/${job.id}`

);

};

return(

<>

<div

className={

`job-card ${

isFeatured

?

"featured"

:

""

}`

}

>

{/* JOB TITLE AND STATUS */}

<div className="job-top">

<h3>

{job.title}

</h3>

<div>

<div

className={

active

?

"status active"

:

"status inactive"

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

{

active &&

expiryText &&

<p className="expiry-badge">

{expiryText}

</p>

}

</div>

</div>

{/* COMPANY AND VERIFIED BADGE */}

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

{/* LOCATION, WORK MODE AND SALARY */}

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

{/* SKILLS */}

<div className="skills">

{

job.skills

?.

map(

(

skill,

index

) => (

<span

key={index}

>

{skill}

</span>

)

)

}

</div>

{/* ACTION BUTTONS */}

<div className="actions">

<button

type="button"

className="apply"

onClick={handleApply}

>

{

job.hrMail

?

"Apply via Referral"

:

"Apply Now"

}

</button>

<button

type="button"

className="details"

onClick={viewDetails}

>

View Details

</button>

<button

type="button"

className="copy-link"

onClick={copyJobLink}

title="Copy job link"

aria-label="Copy job link"

>

<FaLink/>

</button>

<button

type="button"

className="save"

onClick={toggleSave}

title={

saved

?

"Remove saved job"

:

"Save job"

}

aria-label={

saved

?

"Remove saved job"

:

"Save job"

}

>

{

saved

?

<FaHeart/>

:

<FaRegHeart/>

}

</button>

</div>

</div>

{/* REFERRAL APPLICATION ASSISTANT */}

{

showReferralModal &&

<ReferralApplyModal

job={job}

onClose={() =>

setShowReferralModal(

false

)

}

/>

}

</>

);

}