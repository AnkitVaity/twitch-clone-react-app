import React from 'react';
import { connect } from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm';


class StreamCreateWithStreamForm extends React.Component {

onSubmit = (formValues) => {
  console.log(formValues);
  this.props.createStream(formValues);
}

  render() {
    // console.log(this.props)
    return (
      <div className="ui purple raised placeholder segment" >
      <div className="ui two column very relaxed grid">

        <div className="column">
          <h1 className="ui grey center aligned block header">
            <i className="purple edit outline icon"></i>
             Create Stream
          </h1>
          <StreamForm onSubmit={this.onSubmit} />
        </div>

        <div className="column">
           <img style={{ height:"58px", width: "180px", opacity:".8", marginTop: "100px", marginLeft:"150px"}} src="https://selfstarter.com.au/wp-content/uploads/2018/07/1200px-Twitch_logo_wordmark_only.svg_.png" />
        </div>
      </div>
      </div>
  )};
};


export default connect(null, { createStream })(StreamCreateWithStreamForm);
