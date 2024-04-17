import { Outlet } from "@remix-run/react";
import Header from "~/components/header";
import Home from "~/components/home";

export default function Main(){
    return(
<div className="flex"> 
<Home/>
<div style={{width:'100%'}}>
<Header/>
<Outlet/>
</div>

</div>
    )
}