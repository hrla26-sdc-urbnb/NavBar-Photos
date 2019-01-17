import React from 'react';
import axios from 'axios';
import classNames from 'classnames';
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
    this.getPhotos = this.getPhotos.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
    document.addEventListener('click', (e) => console.log(e.target.id));
  }

  getPhotos() {
    const randNum = Math.floor(Math.random() * 2000000);
    axios.get(`http://54.183.63.131:3001/api/photos/${randNum}`)
    .then(p => {
      console.log("DATA: ", p.data)
      const photos = p.data.map(obj => obj.img_url);
      this.setState({ photos });
    });
  }

  render() {
    console.log("STATE: ", this.state.photos)
    return (
      <div className={s.photodisplaywrapper}>
        <div className={s.bigphotocontainer}>
          <img id='1' className={s.bigphoto} src={`${this.state.photos[0]}`}></img>
        </div>
        <div className={s.smallphotocontainer}>
          <img id='2' className={s.smallphoto} src={`${this.state.photos[1]}`}></img>
          <img id='3' className={classNames(s.smallphoto, s.row2)} src={`${this.state.photos[2]}`}></img>
          <img id='4' className={s.smallphoto} src={`${this.state.photos[3]}`}></img>
          <img id='5' className={classNames(s.smallphoto, s.row2)} src={`${this.state.photos[4]}`}></img>
        </div>
      </div>
    )
  }
}