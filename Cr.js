import React, { Component } from 'react'

export default class Cr extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loggedIn:true
        }
    }
    
    render() {
        if(this.state.loggedIn){
            return (
                <div>You Are Logged In</div>
            )
        } else{
            return (
                <div>You are not Logged In</div>
            )}
    }
}
