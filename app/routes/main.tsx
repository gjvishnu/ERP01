import { Outlet } from "@remix-run/react";

export default function Main(){
    return(
<>
<h1>Layout</h1>
<Outlet/>
</>
    )
}