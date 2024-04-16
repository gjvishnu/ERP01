import { Outlet } from "@remix-run/react";
import Home from "~/components/home";

export default function Main(){
    return(
<div className="flex"> 
<Home/>
<Outlet/>
</div>
    )
}