import React from 'react';
import { Field, reduxForm} from 'redux-form';


class StreamForm extends React.Component {

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
  this.props.onSubmit(formValues);
}

  render() {
    // console.log(this.props)
    return (
          <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui tiny error form">

            <Field name="title" component={this.renderInput} label="Enter Title"/>
            <Field name="description" component={this.renderInput} label="Enter Description"/>

            <button className="fluid ui right labeled icon button">
              <i className="right arrow icon"></i>
              Start Streaming
            </button>
          </form>
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



export default reduxForm({
  form: 'streamForm',
  validate: validate
})(StreamForm);
