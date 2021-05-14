import React,{useRef, useState} from 'react'

const UseRefComp = () => {
    const [data,setData] = useState()
    const inputRef = useRef()
    const submitData = ()=>{
        var inputData = inputRef.current.value;
        setData(inputData)
        inputRef.current.value = ''
    }
    return(
        <div>
            <input type="text" ref={inputRef} className="p-2"/>
                &nbsp;&nbsp;&nbsp;
            <button onClick={submitData} className="btn btn-secondary p-2 ">Click Me</button>
            <h4>{data}</h4>
        </div>
    )
}

export default UseRefComp;