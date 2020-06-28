import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';


  // first we need to install flv using terminal
  import flv from 'flv.js';


class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    // Here we will setup a video element
    this.videoRef = React.createRef();
  }


  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);

    this.buildPlayer();
  }

  componentDidUpdate(){
    this.buildPlayer();
  }


  componentWillUnmount() {
    // console.log('i was unmounted');
    this.player.destroy();
  }


  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
    });

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }



  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }


    return (
      <div>
      <div className="ui purple raised segment" style={{ width: "100%" }}>
      <center>
      <video ref={this.videoRef} style={{ width: '75%'}} controls/></center>
       <h1 className="ui grey block header">
          <i className="purple laptop icon"></i>
          <div className="content">
            { this.props.stream.title }
            <div className="sub header">{ this.props.stream.description }</div>
          </div>
        </h1>
      </div>
      </div>
  )};
};


const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, {fetchStream}) (StreamShow);
