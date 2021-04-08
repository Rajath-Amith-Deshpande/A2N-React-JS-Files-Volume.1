import React from 'react'

class FormComp extends React.Component {
    constructor(props){
        super(props);
    };
    Information = () =>{
        this.nameRef = this.refs.uname
        this.passwordRef = this.refs.password
        this.emailRef = this.refs.mail
        this.phoneRef = this.refs.phnumber
        this.locationRef = this.refs.location
            console.log(this.nameRef.value)
            console.log(this.passwordRef.value)
            console.log(this.emailRef.value)
            console.log(this.phoneRef.value)
            console.log(this.locationRef.value)
            this.nameRef.value = '';
            this.passwordRef.value = '';
            this.emailRef.value = '';
            this.phoneRef.value = '';
            this.locationRef.value = '';
} 
    render()  {
      return <div>
         <h2 className="mb-4">Registration Form</h2>
         <p className="formgroup">
             <input type="text" placeholder="Enter UserName" className="form-control" ref="uname" />
         </p>
         
         <p className="formgroup">
             <input type="password" placeholder="Enter Your Password" className="form-control" ref="password" />
         </p>
         
         <p className="formgroup">
             <input type="mail" placeholder="Enter Your Mail" className="form-control" ref="mail" />
         </p>

         <p className="formgroup">
             <input type="number" placeholder="Enter Your Phone Number" className="form-control" ref="phnumber" />
         </p>

         <p className="formgroup">
             <input type="location" placeholder="Enter Your Location" className="form-control" ref="location" />
         </p>

         <button className="btn btn-primary" value="submit" onClick={this.Information}>Submit</button>     
      </div>
  }
}

export default FormComp;