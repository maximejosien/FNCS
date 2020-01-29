import React, {Component} from 'react';
import './purchaseBlock.css';

interface PurchaseBlockProps {
    departureStation: string,
    arrivalStation: string,
}

interface PurchaseBlockStates {
    buttonPressed: boolean
}

export default class PurchaseBlock extends Component<PurchaseBlockProps, PurchaseBlockStates> {
    constructor(props) {
        super(props);
        this.state = {
            buttonPressed: false
        }
    }
    saveStationBought() {
        if (this.state.buttonPressed) {

            const stations = {
                'basicHash': {
                    arrivalStation: this.props.arrivalStation,
                    departureStation: this.props.departureStation
                }
            };
        }
    }
    onClickBuyingButton(event) {
        this.setState({
            buttonPressed: !this.state.buttonPressed
        });
        this.saveStationBought();
        event.preventDefault();
    }
    getCorrectButton() {
        if (this.state.buttonPressed) {
          return <button onClick={this.onClickBuyingButton.bind(this)} className="form-control button-enabled">Acheter</button>;
        }

        return <button onClick={this.onClickBuyingButton.bind(this)} className="form-control button-disabled">Acheter</button>;
    }
    render() {
        return (
            <div className="row schedule">
                <div className="col-lg-6">
                    <p>{this.props.departureStation}</p>
                    <hr/>
                    <p>{this.props.arrivalStation}</p>
                </div>
                <form className="col-lg-6">
                    {this.getCorrectButton()}
                </form>
            </div>
        );
    }
}
