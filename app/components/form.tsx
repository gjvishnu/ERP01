import { useNavigate } from "@remix-run/react";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { fromDataHoldreq , fromDatasucc } from "redux/slice";

export default function Form(){

const [type , setType] = useState('') 
const [name , setName] = useState('');
const [project , setProject] = useState('')    
const [date , setDate] = useState('');

 const dispatch = useDispatch()

const data =  
    {
      type,
         name,
         project,
         date
    }
 
  const navigate =  useNavigate()

const handleSubmit = (e)=>{

e.preventDefault()

dispatch(fromDatasucc(data));
navigate('/table')

}

    return(
    <>
        <div className=" fromMainDiv my-5">
          <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <div>
  <select
    name="example"
    className="border p-2"
    value={type}
    onChange={(e) => setType(e.target.value)}
    style={{ width: '300px' }}
  >
    <option value="" disabled>Select an option</option>
    <option value="Petrol">Petrol</option>
    <option value="Air">Air</option>
    <option value="Personal">Personal</option>
  </select>
</div>

         <div> <input className="border  p-2 my-3" onChange={(e)=>setName(e.target.value)} style={{width:'300px'}} type="text" placeholder="Name"/></div>
       <div> <input className="border  p-2" onChange={(e)=>setProject(e.target.value)} style={{width:'300px'}} type="text" placeholder="Project"/></div>
       <div> <input className="border my-3 p-2" onChange={(e)=>setDate(e.target.value)} style={{width:'300px'}} type="date" placeholder="claimable Date"/></div>
       <div> <input className="border p-2 submitinput my-2"  style={{width:'300px'}} type="submit"/></div>

        </form>
            </div>
        </div>
    </>

    )
}