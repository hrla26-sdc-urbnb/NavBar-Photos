import React from 'react';
import MainNavBar from './mainnavbar/MainNavBar.jsx';
import SecondaryNavBar from './SecondaryNavBar.jsx';
import PhotoDisplay from './PhotoDisplay.jsx';

export default class MainNavBarPhotos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSecondary: false
        }
    }


    render() {
        return (
            <div>
                <MainNavBar />
                {this.state.showSecondary && <div className="secondarynavbar"><SecondaryNavBar /></div>}
                <div className="photodisplay"><PhotoDisplay /></div>
            </div>
        );
    }
}