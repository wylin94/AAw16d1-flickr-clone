import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import MyAlbum from "./components/MyAlbum";
// import CreateAlbumForm from "./components/CreateAlbumForm";
import SelectedAlbum from "./components/SelectedAlbum";
// import EditAlbumForm from "./components/EditAlbumForm";
// import CreateImageForm from "./components/CreateImageForm";
import SelectedImage from "./components/SelectedImage";
import PageNotFound from "./components/PageNotFound";
import * as sessionActions from "./store/session";
import { Redirect } from "react-router-dom";


function App() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {setIsLoaded(true)});
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
          {/* <Route path="/createAlbum">
            {sessionUser ? (<CreateAlbumForm />) : (<Redirect to="/login" />)}
          </Route> */}
          <Route exact path="/albums/:albumId">
            {sessionUser ? (<SelectedAlbum />) : (<Redirect to="/login" />)}
          </Route>
          {/* <Route path="/albums/:albumId/edit">
            {sessionUser ? (<EditAlbumForm />) : (<Redirect to="/login" />)}
          </Route>
          <Route path="/createImage/:albumId">
            {sessionUser ? (<CreateImageForm />) : (<Redirect to="/login" />)}
          </Route> */}
          <Route path="/images/:imageId">
            {sessionUser ? (<SelectedImage />) : (<Redirect to="/login" />)}
          </Route>
          <Route path="/pathNotFound">
            <PageNotFound />
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