import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      category: "general",
      country: null,
      keyword: null
    }
  }

  categorySelected = (selectedCategory) => {
    this.setState({ category: selectedCategory })
  }

  countrySelected = (selectedCountry) => {
    this.setState({ country: selectedCountry })
  }

  keywordSearched = (searchedKeyword) => {
    this.setState({ keyword: searchedKeyword })
  }

  render() {
    let apiKeyList = ["a0ca9d85f8d94fb8b2a9b6ea4e049f3a", 
                      "f43b3fbb9132457699fec997e391b632"];

    return (
      <div>
        <Router>
          <NavBar categorySelected={this.categorySelected} countrySelected={this.countrySelected} keywordSearched={this.keywordSearched} />
          <News pageSize={12} apiKeyList={apiKeyList} category={this.state.category} country={this.state.country} keyword={this.state.keyword} />
          <Routes>
            <Route exac path="/about" element={<About/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
