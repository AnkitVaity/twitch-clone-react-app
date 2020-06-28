import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';



class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    console.log('StreamEdit', formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };


  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    return (
      <div className="ui purple raised placeholder segment" >
      <div className="ui two column very relaxed grid">

        <div className="column">
          <h1 className="ui grey center aligned block header">
            <i className="purple pencil alternate icon"></i>
             Edit Stream
          </h1>
          <StreamForm
            initialValues={_.pick(this.props.stream, "title", "description")}
            onSubmit={this.onSubmit}
          />
        </div>

        <div className="column">
           <img style={{ height:"58px", width: "180px", opacity:".8", marginTop: "100px", marginLeft:"150px"}} src="https://selfstarter.com.au/wp-content/uploads/2018/07/1200px-Twitch_logo_wordmark_only.svg_.png" />
        </div>
      </div>
      </div>
    );
  }
};


const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps)
  // state.streams[ownProps.match.prams.id] will return a object of the stream we selected
  return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchStream, editStream }) (StreamEdit);
