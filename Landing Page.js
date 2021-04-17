import React from 'react'
import Axios from 'axios'

class LandComp extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            userInformation:[],
            Information:[],
            Album:[],
            Todos:[],
            Photos:[],
            Comments:[],
        }
    }
    getDataFromServer1 = () =>{
        Axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
        console.log(response.data)    
        this.setState({
                userInformation:response.data
            })
        },(error)=>{
            alert("Error while getting the information from server")
        })
    }
    getDataFromServer2 = () =>{
        Axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
        console.log(response.data)    
        this.setState({
                Information:response.data
            })
        },(error)=>{
            alert("Error while getting the information from server")
        })  
      }

    getDataFromServer3 = () =>{
        Axios.get("https://jsonplaceholder.typicode.com/albums").then((response)=>{
        console.log(response.data)    
        this.setState({
                Album:response.data
            })
        },(error)=>{
            alert("Error while getting the information from server")
        })  
    }

    getDataFromServer4 = () =>{
        Axios.get("https://jsonplaceholder.typicode.com/todos").then((response)=>{
        console.log(response.data)    
        this.setState({
                Todos:response.data
            })
        },(error)=>{
            alert("Error while getting the information from server")
        })  
    }

    getDataFromServer5 = () =>{
        Axios.get("https://jsonplaceholder.typicode.com/photos").then((response)=>{
        console.log(response.data)    
        this.setState({
                Photos:response.data
            })
        },(error)=>{
            alert("Error while getting the information from server")
        })  
    }

    getDataFromServer6 = () =>{
        Axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
        console.log(response.data)    
        this.setState({
                Comments:response.data
            })
        },(error)=>{
            alert("Error while getting the information from server")
        })  
    }
    render() {
        return <div className="container mt-3 ml-5 mb-10">
            
            <div className="header">
                <h2 className="bg-secondary text-white p-3">Welcome To React-Js World</h2>
            </div>
            
            <div className="body">
                &nbsp;&nbsp;&nbsp;
            </div>
            
            <nav className="navbar navbar-expand-sm bg-dark justify-content-center p-3">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link text-white bg-success" href="#">HOME &#x2630;</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-white bg-info" href="">ABOUT-US</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-white bg-primary" href="tel:+911234567890">CONTACT-US</a>
    </li>
    <li className="nav-item">
        <a className="nav-link text-dark bg-light" href="mailto:example@outlook.com">GMAIL</a>
    </li>
  </ul>
</nav>
<br />

            <div className="menu bg-dark pt-4 pr-6 pb-4">
                <button className="btn btn-outline-light p-3" onClick={this.getDataFromServer2}>Posts</button> &nbsp;
                <button className="btn btn-outline-secondary p-3"  onClick={this.getDataFromServer1}>Users</button> &nbsp;
                <button className="btn btn-outline-primary p-3" onClick={this.getDataFromServer3}>Album</button> &nbsp;
                <button className="btn btn-outline-info p-3" onClick={this.getDataFromServer4}>To-Dos</button> &nbsp;
                <button className="btn btn-outline-success p-3" onClick={this.getDataFromServer5}>Photos</button> &nbsp;
                <button className="btn btn-outline-warning p-3" onClick={this.getDataFromServer6}>Comments</button>
            </div>
        
        {/* Below is the button Functions */}

        <div className="container-fluid mt-5">
            
             <h1>Hello From This End,</h1>
             &nbsp;
                <h4>Hope You will Like this sample 👍</h4>
            &nbsp;
                <p><b>React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</b></p>
                <p><b>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</b></p>
            
        </div>

        <div className="body">

        </div>
{/* Starting of Post Function */}
<div className="row mt-3">
                {
                    this.state.Information.length > 0 ?
                    this.state.Information.map(function(element,index){
                        return <div className="col-sm-4">
                        <div className="card">
                            
                            <div className="card-header bg-light align-center">
                                <b>POSTS INFORMATION</b>
                            </div>
                        
                            <div className="card-body">
                                <p><b>ID: </b>{element.id}</p>
                                <p><b>USER ID: </b>{element.userId}</p>
                                <p><b>TITLE: </b>{element.title}</p>
                                <p><b>BODY: </b>{element.body}</p>
                            </div>
                        
                        </div>
                    </div>
                    }):<h4>&nbsp;</h4>      
                }
            </div>
{/* Ending Of Post Function */}


{/* Staring of User Function */}
<div className="row mt-2">
                {
                    this.state.userInformation.length > 0 ?
                    this.state.userInformation.map(function(element,index){
                        return <div className="col-sm-4">
                        <div className="card">
                            
                            <div className="card-header text-white bg-secondary align-center">
                                <b>USER INFORMATION</b>
                            </div>
                        
                            <div className="card-body">
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
                    }):<h4>&nbsp;</h4>
                }
            </div>
{/* Ending of User Function */}

{/* Starting of Album Function */}
<div className="row mt-3">
                {
                    this.state.Album.length > 0 ?
                    this.state.Album.map(function(element,index){
                        return <div className="col-sm-4">
                        <div className="card">
                            
                            <div className="card-header text-white bg-primary align-center">
                                <b>ALBUM INFORMATION</b>
                            </div>
                        
                            <div className="card-body">
                                <p><b>USER ID:</b> {element.userId}</p>
                                <p><b>ID:</b> {element.id}</p>
                                <p><b>TITLE:</b> {element.title}</p>
                            </div>
                        
                        </div>
                    </div>
                    }):<h4>&nbsp;</h4>
                }
            </div>
{/* Ending of Album Function */}

{/* Starting of To-Dos Function */}
<div className="row mt-3">
                {
                    this.state.Todos.length > 0 ?
                    this.state.Todos.map(function(element,index){
                        return <div className="col-sm-4">
                        <div className="card">
                            
                            <div className="card-header text-white bg-info align-center">
                                <b>TO-DOS INFORMATION</b>
                            </div>
                        
                            <div className="card-body">
                                <p><b>USER ID:</b> {element.userId}</p>
                                <p><b>ID:</b> {element.id}</p>
                                <p><b>COMPLETED:</b> {element.completed}</p>
                                <p><b>TITLE:</b> {element.title}</p>
                            </div>
                        
                        </div>
                    </div>
                    }):<h4>&nbsp;</h4>
                }
            </div>
{/* Ending of To-Dos Function */}

{/* Starting Of Photos Function */}
<div className="row mt-3">
                {
                    this.state.Photos.length > 0 ?
                    this.state.Photos.map(function(element,index){
                        return <div className="col-sm-6">
                        <div className="card">
                            
                            <div className="card-header text-white bg-success align-center">
                                <b>PHOTOS INFORMATION</b>
                            </div>
                        
                            <div className="card-body">
                                <p><b>ID:</b> {element.id}</p>
                                <p><b>ALBUM ID:</b> {element.albumId}</p>
                                <p><b>TITLE:</b> {element.title}</p>
                                <p><b>THUMBNAIL URL:</b> {element.thumbnailUrl}</p>
                                <p><b>URL:</b> {element.url}</p>
                            </div>
                        
                        </div>
                    </div>
                    }):<h4>&nbsp;</h4>
                }
            </div>
{/* Ending Of Photos Function */}

{/* Starting of Comments Function */}
<div className="row mt-3">
                {
                    this.state.Comments.length > 0 ?
                    this.state.Comments.map(function(element,index){
                        return <div className="col-sm-6">
                        <div className="card">
                            
                            <div className="card-header text-white bg-warning align-center">
                                <b>COMMENTS INFORMATION</b>
                            </div>
                        
                            <div className="card-body">
                                <p><b>ID:</b> {element.id}</p>
                                <p><b>POST ID:</b> {element.postId}</p>
                                <p><b>NAME:</b> {element.name}</p>
                                <p><b>EMAIL:</b> {element.email}</p>
                                <p><b>BODY</b> {element.body}</p>
                            </div>
                        
                        </div>
                    </div>
                    }):<h4>&nbsp;</h4>
                }
            </div>
{/* Ending of Comments Function */}
        </div>
    }
}

export default LandComp;