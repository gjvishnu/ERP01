import type { ActionFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { json } from "@remix-run/node"; // or cloudflare/deno
import { Form, useActionData } from "@remix-run/react";


export async function action({
    request,
  }: ActionFunctionArgs) {
    const url = 'http://localhost:8000/api/login';
    
    try {
      const body = await request.formData();
      const email = body.get('email');
      const password = body.get('password');
  
      // Fetch the API endpoint with POST method and send form data
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      if (!response.ok) {
        // If the response status is not okay, throw an error
        throw new Error('Failed to fetch');
      }
  
      // Parse the JSON response
      const data = await response.json();
  
      // Assuming the API returns a message
      const message = data;
      console.log(message);
  
      // Return the message as JSON response
      return json({ message });
  
    } catch (error) {
      // If an error occurs during fetching, return an error response
      console.error('Error fetching API:', error);
      return json({ error: 'Failed to fetch API' }, { status: 500 });
    }
  }
  

export default function(){
    const data = useActionData<typeof action>();
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