import axios from 'axios';
import React, { Component } from 'react';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

class Meet extends Component {
  state = {
    meet: null
  };
  componentDidMount() {
    axios.get(`/api/meet/${this.props.forRoute.match.params.id}`).then(meet => {
      this.setState({ meet });
    });
  }

  attendClick() {
    // make a post request to update with attending
    axios
      .post(`/api/meet/attend/${this.props.forRoute.match.params.id}`)
      .then(meet => {
        this.setState({
          meet
        });
      })
      .catch(err => console.error(err));
  }
  unattendClick() {
    axios
      .post(`/api/meet/unattend/${this.props.forRoute.match.params.id}`)
      .then(meet => {
        this.setState({
          meet
        });
      })
      .catch(err => console.error(err));
  }

  renderContent() {
    const { location, about, food, date, attendees } = this.state.meet.data;
    const formatedDate = distanceInWordsToNow(date);
    return (
      <article className="Meet">
        <div className="Meet__item">
          <h4>Meet is about</h4>
          <p>{about}</p>
        </div>
        <div className="Meet__item">
          <h4>Meet is at:</h4>
          <p>{location}</p>
        </div>
        <div className="Meet__item">
          <h4>Meet is on:</h4>
          <p>{formatedDate}</p>
        </div>
        <div className="Meet__item">
          <h4>Food will {food ? 'be served.' : 'not be served.'}</h4>
        </div>
        <div className="Meet__item">
          <h4>So far {attendees.length} have signed up</h4>
        </div>
        <div className="Meet__item">
          {attendees.includes(this.props.user._id) ? (
            <button onClick={() => this.unattendClick()} className="Meet__item--btn">
              Unattend
            </button>
          ) : (
            <button onClick={() => this.attendClick()} className="Meet__item--btn">
              Attend
            </button>
          )}
        </div>
      </article>
    );
  }

  render() {
    return <div>{this.state.meet !== null ? this.renderContent() : `Loading...`}</div>;
  }
}

export default Meet;
