import React,{useState} from 'react'

const FirstHook = () => {
    const [state,setState] = useState({
        name:"Rajath",
        // location:"Banglore-Rural"
    })
    
    // const [name,setName] = useState("Rakshith")
    
    const upDateState = () => {
        setState({
            name:"Rajath.Amith.Deshpande"
            // location:"Doddaballapur"
        })
        // setName("Rajath.Amith.Deshpande")
    }
    
    return(
        <>
        <div><h3>{state.name} {state.location}</h3></div>
        <div>
            <button className="btn btn-outline-dark mt-3 mb-4" onClick={upDateState}>Click to change Text</button>
        </div>
        <hr />
        </>
    )    
}

export default FirstHook