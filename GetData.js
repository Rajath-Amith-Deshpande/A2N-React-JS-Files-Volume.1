import React, { Component } from 'react'
import Axios from 'axios'

export default class GetData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[]
        }
    }
    componentDidMount(){
       Axios.get('http://localhost:2020/form/get').then((response)=>{
       
                  console.log(response.data)
                  this.setState({
                      data:response.data
                  })
       },(error)=>{
           alert("error")
          console.log(error)
       })
    }
    
    render() {
        return (
            <div className="container">
                   <div className="row">
                       {this.state.data && <table className="table table-hover">
                          <tr>
                          <th>USER NAME</th>
                          <th>PASSWORD</th>
                          </tr>
                          {
                              this.state.data && this.state.data.map((d,i)=>{
                                  return <tr key={d.id}>
                                      <td>{d.username}</td>
                                      <td>{d.userpassword}</td>
                                  </tr>

                                  
                              })
                          }
                      </table>
    }
                   </div>
            </div>
        )
    }
}
