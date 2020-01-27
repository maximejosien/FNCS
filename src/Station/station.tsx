import React, {Component} from 'react';

interface StationProps {
    address: string
}

interface StationStates {
    stations: any
}

export default class Station extends Component<StationProps, StationStates> {
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
        const SNCFRailwayReferentialResponse = this.fetchSNCF();
        const responseJson = (await SNCFRailwayReferentialResponse).json();

        const railwayStations = (await responseJson).records.map(value => {
            return value.fields.pltf_commune_libellemin;
        });

        this.setState({
            stations: [...new Set(await railwayStations)]
        });
    }
    fetchSNCF() {
        return fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=' + this.props.address);
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
            <input type="text" name="station"/>
        );
    }
}
