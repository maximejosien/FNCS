import React, {Component} from 'react';
import './station.css';
import Purchase from "../Purchase/purchase";

interface StationProps {
}

interface StationStates {
    departureStation: string,
    arrivalStation: string,
    departureStationSave: string,
    arrivalStationSave: string,
    departureListStations: any,
    arrivalListStations: any,
    displayDepartureList: boolean,
    displayArrivalList: boolean,
    searchEnabled: boolean
}

export default class Station extends Component<StationProps, StationStates> {
    constructor(props) {
        super(props);
        this.state = {
            departureStation: '',
            arrivalStation: '',
            departureStationSave: '',
            arrivalStationSave: '',
            departureListStations: [],
            arrivalListStations: [],
            displayDepartureList: false,
            displayArrivalList: false,
            searchEnabled: false
        }
    }
    async displayDepartureListStations() {
        if (this.state.departureStation === '') {
            this.setState({
                departureListStations: []
            });
            return;
        }
        const SNCFRailwayReferentialResponse = this.fetchSNCF(this.state.departureStation);
        const responseJson = (await SNCFRailwayReferentialResponse).json();

        const railwayStations = (await responseJson).records.map(value => {
            return value.fields.pltf_commune_libellemin;
        });

        this.setState({
            departureListStations: [...new Set(await railwayStations)]
        });
    }
    async displayArrivalListStations() {
        if (this.state.arrivalStation === '') {
            this.setState({
                arrivalListStations: []
            });
            return;
        }
        const SNCFRailwayReferentialResponse = this.fetchSNCF(this.state.arrivalStation);
        const responseJson = (await SNCFRailwayReferentialResponse).json();

        const railwayStations = (await responseJson).records.map(value => {
            return value.fields.pltf_commune_libellemin;
        });

        this.setState({
            arrivalListStations: [...new Set(await railwayStations)]
        });
    }
    fetchSNCF(station) {
        return fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=' + station);
    }
    onChangeDepartureStation(event) {
        this.setState({
            departureStation: event.target.value,
            displayDepartureList: true
        });
    }
    onChangeArrivalStation(event) {
        this.setState({
            arrivalStation: event.target.value,
            displayArrivalList: true,
        });
    }
    handleCheckDeparture(event) {
        this.setState({
            departureStation: event.target.textContent,
            displayDepartureList: false,
        });
    }
    handleCheckArrival(event) {
        this.setState({
            arrivalStation: event.target.textContent,
            displayArrivalList: false,
        });
    }
    onSubmitForm(event) {
        this.setState({
            departureStationSave: this.state.departureStation,
            arrivalStationSave: this.state.arrivalStation,
            searchEnabled: true
        });
        event.preventDefault();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.departureStation !== prevState.departureStation) {
            this.displayDepartureListStations();
            this.setState({
                displayArrivalList: false,
            });
        }
        if (this.state.arrivalStation !== prevState.arrivalStation) {
            this.displayArrivalListStations();
            this.setState({
                displayDepartureList: false,
            });
        }
    }
    render() {
        let listDeparture;
        let listArrival;
        let search;

        if (this.state.displayDepartureList) {
            listDeparture = (
                <>
                    {this.state.departureListStations.map((d, idx) => {
                        return (<li onClick={this.handleCheckDeparture.bind(this)} className="list-group-item" key={idx}>{d}</li>)
                    })}
                </>
            );
        }
        if (this.state.displayArrivalList) {
            listArrival = (
                <>
                    {this.state.arrivalListStations.map((d, idx) => {
                        return (<li onClick={this.handleCheckArrival.bind(this)} className="list-group-item" key={idx}>{d}</li>)
                    })}
                </>
            );
        }
        if (this.state.searchEnabled) {
            search = <Purchase departureStation={this.state.departureStation} arrivalStation={this.state.arrivalStation}/>
        }
        return (
            <div id="formStation" className="container">
                <div className="row">
                    <form className="col-lg-6" onSubmit={this.onSubmitForm.bind(this)}>
                        <p>Quel est votre trajet ?</p>
                        <input type="text" className="form-control" placeholder="Saisir votre gare de départ..." value={this.state.departureStation} onChange={this.onChangeDepartureStation.bind(this)}/>
                        <br/>
                        <input type="text" className="form-control" placeholder="Saisir votre gare de d'arrivée..."  value={this.state.arrivalStation} onChange={this.onChangeArrivalStation.bind(this)}/>
                        <br/>
                        <input type="date" className="form-control"/>
                        <br/>
                        <input type="submit" className="form-control"/>
                    </form>
                    <div className="col-lg-6">
                        <ul className="list-group">
                            {listDeparture}
                            {listArrival}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    {search}
                </div>
            </div>
        );
    }
}
