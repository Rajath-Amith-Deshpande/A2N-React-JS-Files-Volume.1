import React from 'react'

class ChildComp extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        name: "Rajath",
        location: "Doddaballapura"
    }   
 }
 childFn = () => {
        this.props.parentFn(this.state.name, this.state.location)
    }
    render() {
        return <div className="container mt-3">
                    <button className="btn btn-outline-warning" value="Change The Data" type="button" onClick={this.childFn}>Change the Data</button>
                </div>
    }
}
export default ChildComp;