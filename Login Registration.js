import React from 'react'
import Axios from 'axios'

class LoginComp extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            userInformation:[],
            hidden: true,
            uname: '',
            number:'',
            mail:'',
            password:''
        };
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
    }
    getDataFromServer = () =>{
        Axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
        console.log(response.data)    
        this.setState({
                userInformation:response.data
            })
        },(error)=>{
            alert("Error while getting the information from server")
        })  
      }
      
      handlePasswordChange(e) {
        this.setState({ password: e.target.value });
      }
      toggleShow() {
        this.setState({ hidden: !this.state.hidden });
      }
      componentDidMount() {
        if (this.props.password) {
          this.setState({ password: this.props.password });
        }
    }
        
    Information = () => {
       console.log(this.state.uname)
       console.log(this.state.number)
       console.log(this.state.mail)
       console.log(this.state.password)
    }
    render() {
        return <div className="container">
            
            <div className="row">
                <div className="card-body bg-dark text-white">
                <form>                
                
                <p>
                    <input ref="uname" onChange={(event)=>{this.setState({uname:event.target.value})}} placeholder="Enter Your User Name" type="text" className="form-control"></input>
                </p>
                
                <p>
                    <input ref="number" onChange={(event)=>{this.setState({number:event.target.value})}} placeholder="Enter Your Phone No." className="form-control" type="number"></input>
                </p>
                
                <p>
                    <input ref="mail" onChange={(event)=>{this.setState({mail:event.target.value})}} placeholder="Enter Your Mail ID" className="form-control" type="mail"></input>
                </p>
                
                <p>
                    <input ref="password" onChange={(event)=>{this.setState({password:event.target.value})}} type={this.state.hidden ? 'password' : 'text'} placeholder="Enter Your Password" className="form-control" value={this.state.password} onChange={this.handlePasswordChange}/>
                    <input type="button" className="btn btn-outline-secondary mt-2" onClick={this.toggleShow} value="Show / Hide Password"/>
                </p>
                
                </form>
                    <p><button type="button" onClick={this.Information} className="btn btn-outline-info pr-4 pl-4">SUBMIT</button></p>
                </div>    
            </div>

            {/* button below */}
            
            <div className="row">
                <p><button type="button" onClick={this.getDataFromServer} className="btn btn-outline-danger mt-5 ml-4 ">Click on me to Get Data From Server</button></p>
            </div>
        
            <div className="row mt-3">
                {
                    this.state.userInformation.length > 0 ?
                    this.state.userInformation.map(function(element,index){
                        return <div className="col-sm-6">
                        <div className="card mb-3">
                            
                            <div className="card-header text-white bg-dark align-center mb-3">
                                <b>USER INFORMATION</b>
                            </div>
                        
                            <div className="card-body mb-3">
                                <p><b>ID: </b>{element.id}</p>
                                <p><b>USER ID: </b>{element.userId}</p>
                                <p><b>TITLE: </b>{element.title}</p>
                                <p><b>BODY: </b>{element.body}</p>
                            </div>
                        
                        </div>
                    </div>
                    })
                     :<h4 className="text-danger">Click on the Button Above to Display The Data</h4>
                }
            </div>

        </div>
    }
}


export default LoginComp;