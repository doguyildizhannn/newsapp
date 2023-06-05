import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            keyword: null
        }
    }

    keywordEntered = (eventValue) => {
        this.setState({ keyword: eventValue});
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">NewsMonkey</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#" onClick={() => this.props.categorySelected("sports")}>Sport</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => this.props.categorySelected("science")}>Science</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => this.props.categorySelected("health")}>Health</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => this.props.categorySelected("technology")}>Technology</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => this.props.categorySelected("entertainment")}>Entertaintment</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => this.props.categorySelected("general")}>All</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Country
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#" onClick={() => this.props.countrySelected("tr")}>Türkiye</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => this.props.countrySelected("us")}>USA</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => this.props.countrySelected("fr")}>France</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => this.props.countrySelected("gb")}>England</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => this.props.countrySelected("it")}>Italy</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => this.props.countrySelected("jp")}>Japan</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search for Headlines" aria-label="Search" onChange={(e) => this.keywordEntered(e.target.value)}/>
                                <button className="btn btn-outline-success" onClick={() => this.props.keywordSearched(this.state.keyword)}>Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar