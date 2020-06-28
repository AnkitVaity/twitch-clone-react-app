import React from 'react';
import ReactDOM from 'react-dom';


const Modal = props => {
  // createPortal takes two arguments first is some jsx and second is the reference to the element we want to render this portal into
  return ReactDOM.createPortal(
    // onClick is used to take us to the streams page if user clicks on the background which will make the modal window to disappear
    // stopPropagation stops the first on click event to occur if we click on the modal window
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div onClick={(event) => event.stopPropagation()} style={{width: "47%"}} className="ui standard modal visible active">
        <div className="header">
        <h3 className="ui grey block header">
          <i style={{ float: 'left'}} className="purple trash alternate icon"></i>
           {props.title} <br/>
        </h3>
        <p style={{color: 'grey', fontSize: '14px', fontWeight: 'normal'}}>{props.content}</p>
        </div>
      {props.actions}
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
