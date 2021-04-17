import React from 'react'
import ChildComp from './Child';

class ParentComp extends React.Component {
    constructor(props){
        super(props);
    this.state = {
        name: "Rajath.Amith.Deshpande",
        location: "Banglore Rural"
    }
}
    updateState = (name,location) => {
        this.setState({name:name,location:location})
    }
    render() {
        return <div className="container mt-3">
                <h4>Parent Component</h4>
                <p>{this.state.name}</p>
                <p>{this.state.location}</p>
                <ChildComp parentFn = {this.updateState}/>
            </div>
    }
}
export default ParentComp;