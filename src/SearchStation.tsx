import React from 'react';
import GetStations from "./GetStations";

export default class SearchStation extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
    }
  }
  onChangeInput(event) {
    this.setState({
      address: event.target.value
    });
  }
  render() {
    return (
      <div style={{width: '18rem'}}>
        <div className="md-form mt-0">
          <input type="text" className="form-control" defaultValue={this.state.address} onChange={this.onChangeInput.bind(this)}/>
        </div>
        <GetStations address={this.state.address}></GetStations>
      </div>
    )
  }
}
