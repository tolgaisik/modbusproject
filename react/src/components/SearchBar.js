import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "../assets/scss/searchbar.scss";
function SearchBar(props) {
    return (
        <div className="search-bar">
            <input type="text" className="search-input w-100" />
            <button className="search-button">Ara</button>
        </div>
    );
}
export default SearchBar;
