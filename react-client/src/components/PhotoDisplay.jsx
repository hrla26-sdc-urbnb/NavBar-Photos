import React from 'react';
import axios from 'axios';
import s from '../styles/photodisplay.css';
import PhotoDisplayModal from './PhotoDisplayModal.jsx';

export default class PhotoDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idxPhotoHovered: null,
            photoHovered: false,
            photos: []
        }
    }

    getPhotos() {
        axios.get('api/photos/')    
    }

    render() {
        return (
            <div className={s.photodisplaywrapper}>
                photo display!!
            </div>
        )
    }
}