import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import history from '../history';
// import StreamCreate from './streams/StreamCreate';
import StreamCreateWithStreamForm from './streams/StreamCreateWithStreamForm';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './header';


const App = () => {
  return (
    <div style={{ marginTop:"5px", marginBottom: "15px"}} className="ui container">
      <Router history={history}>
        <Header/>
        <div>
        <Switch>
          {/*:id is just the name of the variable it can be anything eg :xyz*/}
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreateWithStreamForm} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/:id" exact component={StreamShow} />
        </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
