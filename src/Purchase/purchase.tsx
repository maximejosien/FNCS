import React, {Component} from 'react';
import Station from "../Station/station";

interface PurchaseProps {
}

interface PurchaseStates {
}

export default class Purchase extends Component<PurchaseProps, PurchaseStates> {
    render() {
        return (
            <div>
                <Station address="Lille"/>
            </div>
        );
    }
}
