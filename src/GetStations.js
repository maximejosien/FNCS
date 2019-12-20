import React from 'react';

export default class GetStations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: [],
    }
  }
  async stockRailwayStations() {
    if (this.props.address === '') {
      this.setState({
        stations: []
      });
      return;
    }
    const SNCFRailwayReferentialResponse = fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=' + this.props.address);
    const responseJson = (await SNCFRailwayReferentialResponse).json();

    const railwayStations = (await responseJson).records.map(value => {
      return value.fields.pltf_commune_libellemin;
    });

    this.setState({
      stations: [...new Set(await railwayStations)]
    });
  }
  componentDidMount() {
    this.stockRailwayStations();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.address !== prevProps.address) {
      this.stockRailwayStations();
    }
  }
  render() {
    return (
      <ul className="list-group">
        {this.state.stations.map(function(d, idx){
          return (<li className="list-group-item" key={idx}>{d}</li>)
        })}
      </ul>
    )
  }
}
