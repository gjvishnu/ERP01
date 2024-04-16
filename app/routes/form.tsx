import type { ActionFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { json } from "@remix-run/node"; // or cloudflare/deno
import { Form, useActionData } from "@remix-run/react";
import axios from "axios";


export async function action({
    request,
  }: ActionFunctionArgs) {
    const url = 'http://localhost:8000/api/login';
    
    try {
      const body = await request.formData();
      const email = body.get('email');
      const password = body.get('password');
  
      const {data} = await axios.post(url,{email,password})
  
      // Assuming the API returns a message
      const message = data;
      console.log(message);
  
      // Return the message as JSON response
      return message;
  
    } catch (e) {
      // If an error occurs during fetching, return an error response
      const errormsg = e.response.data.message
      console.log(errormsg);
      return errormsg
    }
  }
  

export default function(){
  //const data = useActionData<typeof action>();
  //console.log(data);

    return(
        <>
        <div className="  Formmain  ">
        <Form  method="post">            
          <div> <input type="email" id="name" name="email" required style={{border:'1px solid red'}}/></div> 
          <div> <input type="password" id="password" name="password" required style={{border:'1px solid red'}}/> </div> 
          <div> <input type="submit" value="Login" style={{border:'1px solid red'}}/></div> 
        </Form>
        </div>
        
        </>
    )
}