import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { getPhoto } from '../../store/actions';
import logo from '../../assets/NASA.png';
import style from './style.css';


const Main = (props) => {

  const fetchPhoto = e => {
    e.preventDefault();
    props.getPhoto();
  }

  return (
    <div className="mainContainer">
      <div className="headerContainer">
        <img className="logo" src={logo} alt="logo" />
      <h2 className="title">
        {props.appTitle}
        </h2>
      </div>
      {props.isLoading && (
        <Loader type="BallTriangle" height={90} width={60} color="#00BFFF" />
      )}

      {props.error && <p className="error">{props.error}</p>}

      {props.photoOfTheDay && (
        <div>
          <img className="image-nasa" src={props.photoOfTheDay.url} alt="NASA pic" />

          <h3>{props.photoOfTheDay.title}</h3>
          <h4>{props.photoOfTheDay.date}</h4>

          <p>{props.photoOfTheDay.explanation}</p>
          <p>Photo by: {props.photoOfTheDay.copyright}</p>
        </div>
      )}

      <button onClick={fetchPhoto}>Fetch Photo</button>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    appTitle: state.appTitle,
    photoOfTheDay: state.photoOfTheDay,
    error: state.error,
    isLoading: state.isLoading,
  }
}

export default connect(
  mapStateToProps,
  { getPhoto }
)(Main);