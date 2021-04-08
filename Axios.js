import React from 'react'
import Axios from 'axios'

class AxiosComp extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            userInformation:[]
        }
    }
        getDataFromServer = () =>{
            Axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            console.log(response.data)    
            this.setState({
                    userInformation:response.data
                })
            },(error)=>{
                alert("Error while getting the information from server")
            })
        }
     render() {
         return <div className="container mt-3">
            <div className="row">
                <button className="btn btn-primary" onClick={this.getDataFromServer}>Click To Get The Data From Server</button>
            </div>
            <div className="row mt-3">
                {
                    this.state.userInformation.length > 0 ?
                    this.state.userInformation.map(function(element,index){
                        return <div className="col-sm-6">
                        <div className="card mb-3">
                            
                            <div className="card-header text-white bg-dark align-center mb-3">
                                <b>User Information</b>
                            </div>
                        
                            <div className="card-body mb-3">
                                <p><b>ID:</b>{element.id}</p>
                                <p><b>NAME:</b>  {element.name}</p>
                                <p><b>USERNAME:</b>  {element.username}</p>
                                <p><b>EMAIL ID:</b>  {element.email}</p>
                                <p><b>CITY:</b>  {element.address.city}</p>
                                <p><b>STREET:</b>  {element.address.street}</p>
                                <p><b>LATITUDES:</b>  {element.address.geo.lat}</p>
                                <p><b>LONGITUDES:</b> {element.address.geo.lng}</p>
                                <p><b>ZIPCODE:</b>  {element.address.zipcode}</p>
                                <p><b>COMPANY-NAME:</b> {element.company.name}</p>
                                <p><b>WEBSITE:</b> {element.website}</p>
                            </div>
                        
                        </div>
                    </div>
                    })
                     :<h3 className="text-danger">Data is Not Available</h3>
                }
            </div>
         </div>
     }



 }
export default AxiosComp;