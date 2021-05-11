import React,{useEffect, useState} from 'react'
import axios from 'axios'

const useEffectComp = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
        alert("Success")
        setData(res.data)
        // console.log(res.data)
    },(error)=>{
        alert("Error")
    })
    },[])

    useEffect(()=>{
        console.log("State is Updated")
        return () => {

        }
    })
    console.log(data)

    return(
        <>
        <h2>UseEffect</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </>
    )
} 

export default useEffectComp;