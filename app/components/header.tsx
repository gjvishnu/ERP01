import { useLocation } from "@remix-run/react"

export default function Header(){

// const location =useLocation()
// const {pathname} = location

    return(
        <div className="headerMain my-2 mx-3 px-3 flex justify-between items-center">
           <div><h1 className="colorP">Module One</h1></div> 
           <div className="relative"> <input className="headerSearchInpt"/> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 hderSrchIcn">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</div>
           <div className="flex"> <select className="hrdsltInpt">
  <option value="option1"></option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
<div className="mx-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
</svg>
</div>
<div><div className="HedrDpCircle"></div></div>
 </div>
        </div>
    )
}