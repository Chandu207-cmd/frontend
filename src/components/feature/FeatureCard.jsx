import {
FaBolt,
FaShieldAlt,
FaRocket
}
from "react-icons/fa";

import "../../styles/feature.css";

export default function FeatureCard(){

const cards=[

{
icon:<FaBolt/>,
title:"Smart Matching",
desc:"Find jobs that match your skills and preferences.",
class:"blue"
},

{
icon:<FaShieldAlt/>,
title:"Verified Jobs",
desc:"100% verified job listings from trusted companies.",
class:"purple"
},

{
icon:<FaRocket/>,
title:"Faster Hiring",
desc:"Get hired faster with direct referrals and insights.",
class:"pink"
}

];

return(

<div className="feature-container">

{
cards.map((card,index)=>(

<div
key={index}
className={`feature-card ${card.class}`}
>

<div className="feature-icon">

{card.icon}

</div>

<h3>

{card.title}

</h3>

<p>

{card.desc}

</p>

</div>

))
}

</div>

)

}