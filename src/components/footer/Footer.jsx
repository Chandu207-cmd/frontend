import {
FaUsers,
FaBullseye,
FaCalendarAlt,
FaChartBar
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "../../styles/footer.css";

export default function Footer(){

return(

<footer className="footer">

<div className="footer-top">

<div className="footer-box">

<div className="footer-icon purple">
<FaUsers/>
</div>

<div>

<h4>Direct Referrals</h4>

<p>Get referred and stand out</p>

</div>

</div>

<div className="footer-box">

<div className="footer-icon pink">
<FaBullseye/>
</div>

<div>

<h4>Skill Based Matching</h4>

<p>We match jobs to your skills</p>

</div>

</div>

<div className="footer-box">

<div className="footer-icon red">
<FaCalendarAlt/>
</div>

<div>

<h4>Daily Job Updates</h4>

<p>New jobs posted everyday</p>

</div>

</div>

<div className="footer-box">

<div className="footer-icon blue">
<FaChartBar/>
</div>

<div>

<h4>Application Tracker</h4>

<p>Track all your applications</p>

</div>

</div>

</div>

<div className="footer-bottom">

<p>

© 2026

<span className="footer-logo"> code
<span>2</span>future

</span> All rights reserved.

</p>

<div className="footer-links">

<Link to="/privacy">

Privacy Policy

</Link>

<Link to="/terms">

Terms of Use

</Link>

<Link to="/contact">

Contact Us

</Link>

</div>

<p>

Made with ❤️ for developers

</p>

</div>

</footer>

)

}