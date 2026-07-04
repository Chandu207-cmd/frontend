import {
NavLink
}
from "react-router-dom";

import {
FaWhatsapp,
FaInstagram
}
from "react-icons/fa";

import logo from "../../assets/logo.png";

import "../../styles/navbar.css";

export default function Navbar(){

return(

<header className="navbar">

<div className="left">

<div className="brand">

<img
src={logo}
alt=""
/>

</div>

<nav>

<NavLink to="/">

Jobs

</NavLink>

<NavLink to="/fulltime">

Full Time

</NavLink>

<NavLink to="/parttime">

Part Time

</NavLink>

<NavLink to="/internships">

Internships

</NavLink>

<NavLink to="/refers">

Refers

</NavLink>

<NavLink to="/companies">

Companies

</NavLink>

<NavLink to="/saved">

Saved Jobs

</NavLink>

</nav>

</div>

<div className="right">

<a
href="https://whatsapp.com/channel/0029VbD1kup9WtC4rI5d060Z"
target="_blank"
rel="noreferrer"
className="whatsapp"
>

<FaWhatsapp/>

Join WhatsApp

</a>

<a
href="https://www.instagram.com/code2future_official?igsh=MXNqenZvbXZmZHF6bQ=="
target="_blank"
rel="noreferrer"
className="instagram"
>

<FaInstagram/>

Join Instagram

</a>

</div>

</header>

);

}