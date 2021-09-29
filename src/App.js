import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetil";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import './app.scss'

function App() {
    return (
        <Router>
            <Switch>
                <Route path={"/"} exact component={Home}/>
                <Route path={"/movie/:imdbID"} component={MovieDetail}/>
                <Route path={"/*"} component={PageNotFound}/>
            </Switch>
        </Router>
    );
}

export default App;
