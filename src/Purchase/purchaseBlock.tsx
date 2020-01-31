import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import './purchaseBlock.css';

interface PurchaseBlockProps {
    departureStation: string,
    arrivalStation: string,
}

interface PurchaseBlockStates {
    priceTicket: number,
    isBought: boolean
}

export default class PurchaseBlock extends Component<PurchaseBlockProps, PurchaseBlockStates> {
    constructor(props) {
        super(props);
        this.state = {
            priceTicket: 20,
            isBought: false
        };
    }
    getListStationsPurchased() {
        const stations = localStorage.getItem('stations');

        return stations ? JSON.parse(stations) : [];
    }
    saveStationBought() {
        const stations = this.getListStationsPurchased();

        let newStation = [this.props.arrivalStation, this.props.departureStation, this.getPriceReduction()];

        stations.push(newStation);

        localStorage.setItem('stations', JSON.stringify(stations));
    }
    onClickBuyingButton(event) {
        this.saveStationBought();
        this.setState({isBought: true});
        event.preventDefault();
    }
    getPriceReduction() {
        const promoCode = localStorage.getItem('promoCode');

        return promoCode ? this.state.priceTicket / 2 : this.state.priceTicket;
    }
    getDisplayPrice() {
        return (
            <div>
                <p style={{ textDecoration: this.getPriceReduction() !== this.state.priceTicket ? 'line-through' : ''}}>{this.state.priceTicket}€</p>
                <p style={{ display: this.getPriceReduction() !== this.state.priceTicket ? 'block' : 'none' }}>Prix après réduction : {this.getPriceReduction()}€</p>
            </div>
        );
    }
    ticketIsBought() {
        return this.state.isBought ? <Redirect to="/profile"/> : <div/>;
    }
    render() {
        return (
            <div className="row schedule">
                {this.ticketIsBought()}
                <div className="col-lg-3">
                    <p>{this.props.departureStation}</p>
                    <hr/>
                    <p>{this.props.arrivalStation}</p>
                </div>
                <div className="col-lg-3">
                    {this.getDisplayPrice()}
                </div>
                <form onSubmit={this.onClickBuyingButton.bind(this)} className="col-lg-6">
                    <input type="submit" value="Acheter"
                           className="form-control"/>
                </form>
            </div>
        );
    }
}
