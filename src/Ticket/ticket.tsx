import React, {Component} from 'react';

interface TicketProps {
}

interface TicketStates {
    tickets: any
}

export default class Ticket extends Component<TicketProps, TicketStates> {
    constructor(props) {
        super(props);
        this.state = {
            tickets: this.getMyTickets()
        };
    }

    getMyTickets() {
        const tickets = localStorage.getItem('stations');

        return tickets ? JSON.parse(tickets) : [];
    }

    displayTicket(ticket, idx) {
        return (
            <div key={idx}>
                <p>{ticket[0]} -> {ticket[1]}: {ticket[2]}€</p>
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <h2>Mes tickets</h2>
                {this.state.tickets.map((ticket, idx) => {
                    return (this.displayTicket(ticket, idx))
                })}
            </div>
        );
    }
}
