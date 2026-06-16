"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollTop(){

const [visible,setVisible]=useState(false);

useEffect(()=>{

const toggle=()=>{

if(window.scrollY>400){

setVisible(true);

}else{

setVisible(false);

}

};

window.addEventListener("scroll",toggle);

return ()=>window.removeEventListener("scroll",toggle);

},[]);

const scrollTop=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

return(

<>

{visible&&(

<button

onClick={scrollTop}

className="fixed bottom-8 right-8 bg-green-700 hover:bg-green-900 hover:scale-110 text-white w-14 h-14 rounded-full shadow-xl transition duration-300 z-50"

>

<FaArrowUp className="mx-auto"/>

</button>

)}

</>

);

}