import React  from "react";

  class BtnComp extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        clicks: 0
      }  
    }
    btnonclick = () => {
        this.setState({clicks:this.state.clicks + 1})
      }
    
    render () {
     return <div>
       <button onClick={this.btnonclick} className="btn btn-outline-info">Clicked Me {this.state.clicks} Times</button>
      </div>
       }
   }


export default BtnComp;
