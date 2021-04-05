import React, { Component } from 'react';
class PasswordShowHide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      password: '',
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
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
  render() {
    return (
      <div>
          <label className="mr-1"><b>Password:- </b></label>
        <input type={this.state.hidden ? 'password' : 'text'} value={this.state.password} onChange={this.handlePasswordChange} className="p-1" />
        <input type="button" className="btn btn-primary mt-3 mb-4 ml-3" onClick={this.toggleShow} value="Show / Hide"/>
      </div>
    );
  }
}
export default PasswordShowHide;