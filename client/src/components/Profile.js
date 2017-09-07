import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MeetAttending from './MeetAttending';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <Link to="/profile-form">
          <button onClick={this.toggleForm}>
            <i className="fa fa-pencil-square-o fa-lg" /> Edit
          </button>
        </Link>

        <h2 id="profile-name">{this.props.user.name}</h2>
        <div className="profile-info">
          <div className="data-pair">
            <h4>e-Mail:</h4>
            <div className="profile-data">
              <p>{this.props.user.email}</p>
            </div>
          </div>
          <div className="data-pair">
            <h4>Location:</h4>
            <div className="profile-data">
              <p>{this.props.user.location}</p>
            </div>
          </div>
          <div className="data-pair">
            <h4>Date of Birth:</h4>
            <div className="profile-data">
              <p>{this.props.user.birth}</p>
            </div>
          </div>
          <div className="data-pair">
            <h4>Description:</h4>
            <div className="profile-data">
              <p>{this.props.user.descr}</p>
            </div>
          </div>
          <div className="data-pair">
            <h4>Website:</h4>
            <div className="profile-data">
              <p>{this.props.user.web}</p>
            </div>
          </div>
        </div>
        <MeetAttending />
      </div>
    );
  }
}

export default Profile;
