import React from 'react';
import Modal from '../modal';
import { connect } from 'react-redux';
import { deleteStream, fetchStream } from '../../actions';
import history from '../../history';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onClick = (formValues) => {
    this.props.deleteStream(this.props.match.params.id);
  };

  renderActions() {
    return (
      <div className="actions">
       <Link to={'/'} className="circular ui mini button">Cancel</Link>
       <button onClick={this.onClick} className="circular ui mini negative button">Delete</button>
      </div>
    );
}

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?"
    }
    return `Are you sure you want to delete this stream with title '${this.props.stream.title}' ?`
  }

  render(){
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
  )};
};

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps)
  // ownProps is the props object of our component given above
  // state.streams[ownProps.match.prams.id] will return a object of the stream we selected
  return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchStream, deleteStream }) (StreamDelete);
