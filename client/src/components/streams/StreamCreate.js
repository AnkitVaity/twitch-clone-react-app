import React from 'react';
import { Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import {createStream} from '../../actions';


class StreamCreate extends React.Component {

  renderError(meta) {
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          {meta.error}
        </div>
      );
    }
  }

  renderInput = (formProps) => {
    const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error': ''}`;

    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off"/>
        {this.renderError(formProps.meta)}
      </div>
    );
  }


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
          <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui tiny error form">

            <h1 className="ui grey center aligned block header">
              <i className="purple edit outline icon"></i>
               Create Stream
            </h1>

            <Field name="title" component={this.renderInput} label="Enter Title"/>
            <Field name="description" component={this.renderInput} label="Enter Description"/>

            <button className="fluid ui right labeled icon button">
              <i className="right arrow icon"></i>
              Start Streaming
            </button>
          </form>
        </div>

        <div className="column">
           <img style={{ height:"58px", width: "180px", opacity:".8", marginTop: "100px", marginLeft:"150px"}} src="https://selfstarter.com.au/wp-content/uploads/2018/07/1200px-Twitch_logo_wordmark_only.svg_.png" />
        </div>
      </div>
      </div>
  )};
};


const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'Please enter a title'
  }
  if (!formValues.description) {
    errors.description = 'Please enter a description'
  }

  return errors;
};



const formWrapped = reduxForm({
  form: 'streamCreate',
  validate: validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
