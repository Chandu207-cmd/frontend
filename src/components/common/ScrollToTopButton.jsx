import { useEffect, useState } from "react";

import "../../styles/scrollTop.css";

export default function ScrollToTopButton(){

const[
visible,
setVisible
]=useState(false);

useEffect(()=>{

const handleScroll=()=>{

setVisible(

window.scrollY>350

);

};

window.addEventListener(

"scroll",

handleScroll

);

return()=>{

window.removeEventListener(

"scroll",

handleScroll

);

};

},[]);

const scrollTop=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

return(

visible &&

<button

className="scroll-top"

onClick={scrollTop}

>

↑

</button>

);

}