import React, { useReducer, useRef } from 'react'
import InitialVal from '../USE_REDUCER/InitialVal'
import myReducer from './myReducer'
import ChildReducer from  './childReducer'

const UseReducer = () => {
        const [state,dispatch] = useReducer(myReducer,InitialVal)
        const inputRef = useRef()
        const inputRef1 = useRef()
        
        const submitData = () => {
            dispatch({
                type:'NAME',
                payload: inputRef.current.value
            })
            inputRef.current.value = ''        
        }

        const submitData1 = () => {
            dispatch({
                type:'LOC',
                payload: inputRef1.current.value
            })
            inputRef1.current.value = ''        
        }
    return <div>
        <input type="text" className="mt-3 p-2" placeholder="Enter Name" ref={inputRef} />
        <button className="btn btn-outline-secondary m-3 p-2" onClick={submitData}>SUBMIT</button>
        <h3>{state.name}</h3>

        <input type="text" className="mt-3 p-2" placeholder="Enter LOocation" ref={inputRef1} />
        <button className="btn btn-outline-secondary m-3 p-2" onClick={submitData1}>SUBMIT</button>
        <ChildReducer location={state.loc}/>
    
    </div>
}
export default UseReducer;