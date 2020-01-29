import React, {Component} from 'react';
import PurchaseBlock from "./purchaseBlock";
import './purchase.css';

interface PurchaseProps {
    departureStation: string,
    arrivalStation: string
}

interface PurchaseStates {
    stationList: any
}

export default class Purchase extends Component<PurchaseProps, PurchaseStates> {
    constructor(props) {
        super(props);
        this.state = {
            stationList: []
        }
    }
    computeStation() {
        const stationList: string[] = [];

        for (let i = 0; i < 10; i++) {
            stationList.push('9h00');
        }

        this.setState({
            stationList: stationList
        });
    }
    componentDidMount() {
        this.computeStation();
    }
    render() {
        const items = this.state.stationList.map((item, key) =>
            <PurchaseBlock key={key} departureStation={this.props.departureStation} arrivalStation={this.props.arrivalStation}/>
        );

        return (
            <div id="purchaseBlock" className="col-lg-12">
                {items}
            </div>
        );
    }
}
