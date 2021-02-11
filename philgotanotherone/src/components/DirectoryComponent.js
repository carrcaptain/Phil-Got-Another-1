import { MERCHANDISE } from '../shared/Merchandise.js'
import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MERCHANDISE
        }
    }

    render() {
        const directory = this.state.MERCHANDISE.map(merch => {
            return (
                <div key={merch.id} className="col">
                    <img src={merch.image} alt={merch.name} />
                    <h2>{merch.name}, {merch.price}</h2>
                    <p>{merch.description}</p>
                </div>
            )
        })

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;