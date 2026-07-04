import {
FaTh,
FaList
} from "react-icons/fa";

import "../../styles/filter.css";

export default function FilterBar(){

const items=[

"All Jobs",
"Full Time",
"Internships",
"Part Time",
"Fresher Jobs",
"Remote"

];

return(

<div className="filter-row">

<div className="left-filter">

{

items.map((item,index)=>(

<button
key={index}
className={
index===0
?
"active"
:
""
}
>

{item}

</button>

))

}

</div>

<div className="right-filter">

<button>

Most Recent

</button>

<div>

<FaTh/>

</div>

<div>

<FaList/>

</div>

</div>

</div>

)

}