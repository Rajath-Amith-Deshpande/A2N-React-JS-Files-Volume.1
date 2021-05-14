import React,{useContext} from 'react'
import ctx from './createContext'

const Child = () => {
    const contextData = useContext(ctx)
    return (
        <div className="mt-3">
            <h2>Child Component</h2>
            <h4>{contextData}</h4>
        </div>
    )
}

export default Child;