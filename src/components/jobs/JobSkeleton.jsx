import "../../styles/jobSkeleton.css";

export default function JobSkeleton(){

return(

<div className="skeleton-card">

<div className="skeleton-line title"></div>

<div className="skeleton-line small"></div>

<div className="skeleton-row">

<div className="skeleton-line mini"></div>

<div className="skeleton-line mini"></div>

<div className="skeleton-line mini"></div>

</div>

<div className="skeleton-tags">

<span></span>
<span></span>
<span></span>

</div>

<div className="skeleton-buttons">

<div></div>
<div></div>
<div></div>

</div>

</div>

)

}