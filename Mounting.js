import React from 'react'

class MountComp extends React.Component {
    constructor(){
        super()
        console.log("1. I am Constructor")
    }
    static getDerivedsStateFromProps() {
        console.log("2. I am Static getDerivedSateFromProps ")
    }
    componentDidMount(){
        console.log("4. I am ComponentDidMount")
    }
    render(){
        console.log("3. I am Render")
        return  <div>
            <h2>Welcome To Life Cycle Method in React-JS</h2>
        </div>
    }
}
export default MountComp;