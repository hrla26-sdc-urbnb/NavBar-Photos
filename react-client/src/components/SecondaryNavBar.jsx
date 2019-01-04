import React from 'react';

export default class SecondaryNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idxHighlighted: 1
        }
    }
    render() {
        return (
            <div>
                secondary nav bar!!!
            </div>
        )
    }
}