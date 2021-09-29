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
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path={"/"} exact component={Home}/>
                <Route path={"/movie/:imdbID"} component={MovieDetail}/>
                <Route path={"/*"} component={PageNotFound}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
