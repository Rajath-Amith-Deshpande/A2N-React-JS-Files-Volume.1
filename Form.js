import React, { Component } from 'react'
import Axios from 'axios'

export default class Form extends Component {
    
    constructor(props) {
        super(props)
        this.uRef = React.createRef()
        this.pRef = React.createRef()
        this.state = {
             username:'',
             password:'',
           
        }
    }
    sendData = ()=>{
        //created the json object
        let loginData = {
            uname:this.state.username,
            pname:this.state.password
        }
        
        //used axios to send data to server
        Axios.post("http://localhost:2020/form/getDatafromclinet",loginData)
        .then((res)=>{
          
            
            alert("Succesffuly submitted Data")
           
        },(err)=>{
            alert("Error while submitting the data")
            console.log(err)
        })
         //clear the values of text boxes
         this.uRef.current.value = ''
         this.pRef.current.value = ''
    }
    
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <h3>Login Form</h3>
                    </div>
                </div>
                     <div className="row mt-3">
                         <div className="col-sm-4"></div>
                         <div className="col-sm-4">
                                <div className="form-group">
                                    <input 
                                    type="text"
                                     className="form-control"
                                      placeholder="enter username" 
                                      ref={this.uRef}
                                    onChange={(e)=>{this.setState({
                                        username:e.target.value
                                    })}} />
                                </div>
                         </div>
                         </div>  
                         <div className="row">
                         <div className="col-sm-4"></div>
                         <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="password" className="form-control" 
                                    placeholder="enter password"
                                    ref={this.pRef}
                                    onChange={(e)=>{this.setState({
                                        password:e.target.value
                                    })}}
                                    />
                                </div>
                         </div>
                         </div> 
                         <div className="row">
                             <div className="col-sm-4"></div>
                             <div className="col-sm-4 text-center">
                                 <button className="btn btn-primary btn-md" onClick={this.sendData}>Submit</button>
                             </div>
                         </div>
                        
            </div>
        )
    }
}
