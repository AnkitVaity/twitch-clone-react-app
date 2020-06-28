import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';


class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdminButtons(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="circular ui mini icon button">
           <i className="pencil alternate icon"/>
          </Link>
          <Link to={`/streams/delete/${stream.id}`} className="circular ui red mini icon button">
           <i className="trash alternate icon"/>
          </Link>
        </div>
      );
    }
  }


renderCreateButton() {
  if (this.props.isSignedIn) {
    return (
      <Link style={{marginTop:"20px"}} to="/streams/new" className="fluid huge secondary ui button" >
        Start Streaming
      </Link>
    );
  }
}

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div style={{ width: "550px"}} className="ui purple raised link card" key={stream.id}>
          <div className="content">
          <h3 className="ui header">
            {this.renderAdminButtons(stream)}
            <i style={{color: "#4d4d4d"}} className="large middle aligned icon play circle outline" />
            <div className="content">
              <Link to={`/streams/${stream.id}`} style={{color: "#4d4d4d"}}>{stream.title}</Link>
            </div>
          </h3>
          </div>

          <div className="content">
            <div className="description">{stream.description}</div>
          </div>
        </div>
      )
    });
  }

  render() {
  console.log(this.props.streams)
    return (
      <div>
      <div className="ui two column very relaxed grid">

      <div className="column">
      <div className="ui purple raised segment" style={{ width: "550px" }}>
       <h1 className="ui grey block header">
          <i className="purple film icon"></i>
          <div className="content">
            Streams
            <div className="sub header">What is Live? Everything.</div>
          </div>
        </h1>

       <div className="ui celled list">
         {this.renderList()}
       </div>
      </div>
      </div>

      <div className="column">
      <div style={{ width: "450px", marginLeft: "40px"}} className="ui purple raised segment">
          <h3 className="ui grey header">You’ve got a passion to share. A talent to teach. A story to tell. From games to music to sports and beyond, there’s an audience waiting for you on Twitch. </h3>
          <img className="ui fluid rounded image" src="https://twitchadvertising.tv/assets/uploads/products-bountyboard.png" />
          {this.renderCreateButton()}
      </div>
      </div>

      </div>
      </div>
  )}
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
}


export default connect(mapStateToProps, { fetchStreams })(StreamList);
