import React, { Component } from 'react'

class UpdateComp extends React.Component {
    constructor(){
        super();
        console.log("1. I am Constructor()")

        this.state = {
            name:"Rajath Amith Deshpande"
        }  
    }    
    
    static getDerivedsStateFromProps() {
        console.log("2. I am Static getDerivedSateFromProps ")
    }

    shouldComponentUpdate(){
        console.log("3. I am shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log("4. I am GetSnapshotDBeforeUpdate()")
    }

    componentDidUpdate(){
        console.log("5. I am componentDidUpdate()")
    }

    render() {
        console.log("6. I am Render")
        
        return ( <div className="container mt-3">
            <h2>{this.state.name}</h2>
            <button className="btn btn-outline-dark mt-3" type="button" onClick={()=>this.setState({name:"Rajath"})}>Update Name</button>
        </div>
            )
        }
}
export default UpdateComp;