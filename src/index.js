import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import './index.css';
import Admin from './admin/App';
import Mahasiswa from './mahasiswa/App';
import Dosen from './dosen/App';
import Login from './login/Login';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/react_hadi">
       <Switch>
        <Route path="/admin">
          <Admin />
         </Route>

         <Route path="/mahasiswa">
          <Mahasiswa />
         </Route>

         <Route path="/dosen">
          <Dosen />
         </Route>

         <Route path="/login">
          <Login />
         </Route>
       </Switch>
    </Router>
    {/* <Admin /> */}
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
