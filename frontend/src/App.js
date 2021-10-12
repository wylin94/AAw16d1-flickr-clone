import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import MyAlbum from "./components/MyAlbum";
import CreateAlbumForm from "./components/CreateAlbumForm";
import EditAlbumForm from "./components/EditAlbumForm";
import SelectedAlbum from "./components/SelectedAlbum";
import PageNotFound from "./components/PageNotFound";
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
          <Route path="/createAlbumForm">
            {sessionUser ? (<CreateAlbumForm />) : (<Redirect to="/login" />)}
          </Route>
          <Route path="/albums/:albumId">
            {sessionUser ? (<SelectedAlbum />) : (<Redirect to="/login" />)}
          </Route>
          <Route path="/editAlbumForm/:albumId">
            {sessionUser ? (<EditAlbumForm />) : (<Redirect to="/login" />)}
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;