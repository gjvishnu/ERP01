import { useLoaderData } from '@remix-run/react'
import axios from 'axios'

export const loader = async()=>{
const url = 'https://jsonplaceholder.typicode.com/posts/1/comments'
const {data} = await axios.get(url)
const postD = data
    return postD
    
}


export default function (){

 const  postD =  useLoaderData()
    return(
        <>
       {postD && postD.map((e,i)=>(
        <h1 key={e.id}>{e.name}</h1>
       ))} 
        </>
    )
}