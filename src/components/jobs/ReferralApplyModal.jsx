import {
FaEnvelope,
FaCopy,
FaExternalLinkAlt,
FaTimes
}
from "react-icons/fa";

import {
useNavigate
}
from "react-router-dom";

import {
toast
}
from "react-toastify";

import "../../styles/referralApplyModal.css";

export default function ReferralApplyModal({

job,
onClose

}){

const navigate=
useNavigate();

const subject=

`Application for ${job.title} – Your Name`;

const emailBody =

`Dear Hiring Team,

I hope you are doing well.

I recently came across the referral opportunity for the ${job.title} position at ${job.company} through code2future and would like to express my interest in this role.

I am a Java Full Stack Developer with hands-on experience in Java, Spring Boot, React.js, PostgreSQL, REST APIs, JWT Authentication, and building scalable web applications. I have attached my latest resume for your review.

I would be grateful if you could consider my application and refer my profile for this opportunity. I am enthusiastic about contributing to your organization and would welcome the opportunity to discuss how my skills align with your team's requirements.

Thank you for your valuable time and consideration. I look forward to hearing from you.

Kind Regards,

Your Name

Phone:
Email:
LinkedIn:
GitHub:

Resume Attached ✔`;

const copyText=
async(
text,
message
)=>{

try{

await navigator.clipboard.writeText(
text
);

toast.success(
message
);

}
catch(error){

toast.error(
"Unable to copy"
);

}

};

const openMail=()=>{

if(
!job.hrMail
){

toast.error(
"HR email is not available"
);

return;

}

const mailLink=

`mailto:${job.hrMail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

window.location.href=
mailLink;

toast.success(
"Opening email application"
);

};

const goToRefers=()=>{

onClose();

navigate(
"/refers"
);

};

return(

<div
className="referral-modal-overlay"
onClick={onClose}
>

<div
className="referral-modal"
onClick={(event)=>
event.stopPropagation()
}
>

<button
className="referral-modal-close"
onClick={onClose}
aria-label="Close referral popup"
>

<FaTimes/>

</button>

<div className="referral-modal-icon">

🤝

</div>

<h2>

Referral Opportunity

</h2>

<p className="referral-modal-description">

This is a referral-based job. Send a professional email to HR with your updated resume for better consideration.

</p>

<div className="referral-job-summary">

<h3>

{job.title}

</h3>

<p>

{job.company}

</p>

</div>

<div className="referral-information-box">

<label>

HR Email

</label>

<div className="referral-value-row">

<span>

{job.hrMail || "Not available"}

</span>

<button
onClick={()=>
copyText(
job.hrMail,
"HR email copied"
)
}
disabled={
!job.hrMail
}
>

<FaCopy/>

Copy

</button>

</div>

</div>

<div className="referral-information-box">

<label>

Recommended Subject

</label>

<div className="referral-value-row">

<span>

{subject}

</span>

<button
onClick={()=>
copyText(
subject,
"Email subject copied"
)
}
>

<FaCopy/>

Copy

</button>

</div>

</div>

<div className="referral-template">

<div className="referral-template-header">

<h4>

Professional Email Template

</h4>

<button
onClick={()=>
copyText(
emailBody,
"Email template copied"
)
}
>

<FaCopy/>

Copy Template

</button>

</div>

<pre>

{emailBody}

</pre>

</div>

<div className="referral-tips">

<p>

<strong>Before sending:</strong>

</p>

<p>

✓ Replace “Your Name” and contact details.

</p>

<p>

✓ Attach your latest PDF resume.

</p>

<p>

✓ Check the subject and company name.

</p>

</div>

<div className="referral-modal-actions">

<button
className="open-mail-button"
onClick={openMail}
>

<FaEnvelope/>

Open Email App

</button>

<button
className="referrals-page-button"
onClick={goToRefers}
>

<FaExternalLinkAlt/>

Open Referrals Page

</button>

</div>

</div>

</div>

);

}