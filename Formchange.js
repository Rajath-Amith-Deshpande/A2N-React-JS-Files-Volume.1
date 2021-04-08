import React from 'react'

class FormChange extends React.Component {
    constructor(props){
        super(props);

    this.state = {
        name:'',
        password:'',
        phnumber:'',
        mail:'',
        location:''
    }
} 
    Information = ()=>{
        console.log(this.state.name)
        console.log(this.state.password)
        console.log(this.state.mail)
        console.log(this.state.phnumber)
        console.log(this.state.location)
    }
    
    render()  {
      return <div>
          <div className="card p-3">
         <h2 className="mb-4">Registration Form</h2>
         <p className="formgroup">
             <input onChange={(event)=>{this.setState({name:event.target.value})}} type="text" placeholder="Enter User Name" className="form-control" ref="name" />
         </p>
         
         <p className="formgroup">
             <input onChange={(event)=>{this.setState({password:event.target.value})}} type="password" placeholder="Enter Your Password" className="form-control" ref="password" />
         </p>   
         
         <p className="formgroup">
             <input onChange={(event)=>{this.setState({mail:event.target.value})}} type="mail" placeholder="Enter Your Mail" className="form-control" ref="mail" />
         </p>

         <p className="formgroup">
             <input onChange={(event)=>{this.setState({phnumber:event.target.value})}} type="number" placeholder="Enter Your Phone Number" className="form-control" ref="phnumber" />
         </p>

         <p className="formgroup">
             <input onChange={(event)=>{this.setState({location:event.target.value})}} type="location" placeholder="Enter Your Location" className="form-control" ref="location" />
         </p>

         <button className="btn btn-primary" value="submit" onClick={this.Information}>Submit</button>   
          </div>
        <br />

        <div className="text-black card">
            <div className="text-success">
                <h3 className="mt-3">
                    Please Refer This card To See What Data You Have Entered!
                </h3>
            </div>
            
            <br />
            
            <h4>{this.state.name}</h4>
            <h4>{this.state.password}</h4>
            <h4>{this.state.mail}</h4>
            <h4>{this.state.phnumber}</h4>
            <h4>{this.state.location}</h4> 
        </div>
      
      </div>
  }
}

export default FormChange;