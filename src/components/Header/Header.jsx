import React, {useState} from "react";
import {Link} from "react-router-dom";
import user from "../../images/user-image-icon-17.jpg";
import "./Header.scss";
import {useDispatch} from "react-redux";
import {fetchAsyncMovies, fetchAsyncShows} from "../../features/Movies/MovieSlice";

const Header = () => {
    const dispatch = useDispatch();

    const [term, setTerm] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        if(term === "") return alert("Enter a name")
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setTerm("")
    }
    return (
        <div className={"header"}>
            <Link to={"/"}>
                <div className="logo">
                    Movie App
                </div>
            </Link>
            <div className="search-bar">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder={"Search Movies or Shows"}
                           onChange={event => setTerm(event.target.value)}/>
                    <button type={"submit"}>Search</button>
                </form>
            </div>
            <div className="user-image">
                <img src={user} alt="user"/>
            </div>
        </div>
    );
};

export default Header;