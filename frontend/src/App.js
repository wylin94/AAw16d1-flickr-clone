import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import MyAlbum from "./components/MyAlbum";
import * as sessionActions from "./store/session";
import { Redirect } from 'react-router-dom';

function App() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            {sessionUser ? (<HomePage />) : (<LandingPage />)}
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/myAlbums">
            {sessionUser ? (<MyAlbum />) : (<Redirect to="/login" />)}
          </Route>
          <Route>
            <h2>Having too much fun? Let's come back home.</h2>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;