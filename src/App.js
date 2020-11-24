import './App.css';
import React, { Fragment, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'; //For routing

import Navigation from './components/NavBar'; //Navigation bar
import * as ROUTES from './routes/routes'; //All routing done here, then established in app.js

const App = () => {

  //Unused but possibly usable hooks here --------------------------------
  // const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(true);

  //Make sure a user is logged in here --------------------------------
  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       // User is signed in.
  //       setIsLoading(false);
  //       dispatch(receiveUser(user));
  //     } else {
  //       // No user is signed in.
  //       setIsLoading(false);
  //       dispatch(clearUser());
  //     }
  //   });
  // }, [dispatch]);

  //Connect the server to the frontend here, fill out target url --------------------------------
  // Axios({
  //   method: "GET",
  //   url: " ",
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // }).then(res => {
  //   console.log(res.data.message);
  // });


  return (
    <Router>
          <Fragment>
            <Navigation />
              <div className="app__wrapper">
                <Switch>
                    <Route exact path={ROUTES.DASHBOARD}>
                      {/* Add some components here */}
                    </Route>

                    <Route path={ROUTES.LOGIN}>
                      {/* Add some components here */}
                    </Route>

                    <Route path={ROUTES.LOGOUT}>
                      {/* Add some components here */}
                    </Route>

                    <Route path={ROUTES.REGISTER}>
                      {/* Add some components here */}
                    </Route>

                    <Route path={ROUTES.FORGOT_PASSWORD}>
                      {/* Add some components here */}
                    </Route>
                </Switch>
              </div>
          </Fragment>
        </Router>
  );
}

export default App;
