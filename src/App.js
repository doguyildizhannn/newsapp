import './App.css';
// eslint-disable-next-line
import React, { Component, useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';

//CLASS BASED
// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       category: "general",
//       country: null,
//       keyword: null
//     }
//   }

//   categorySelected = (selectedCategory) => {
//     this.setState({ category: selectedCategory })
//   }

//   countrySelected = (selectedCountry) => {
//     this.setState({ country: selectedCountry })
//   }

//   keywordSearched = (searchedKeyword) => {
//     this.setState({ keyword: searchedKeyword })
//   }

//   render() {
//     let apiKeyList = ["a0ca9d85f8d94fb8b2a9b6ea4e049f3a", 
//                       "f43b3fbb9132457699fec997e391b632"];

//     return (
//       <div>
//         <Router>
//           <NavBar categorySelected={this.categorySelected} countrySelected={this.countrySelected} keywordSearched={this.keywordSearched} />
//           <News pageSize={12} apiKeyList={apiKeyList} category={this.state.category} country={this.state.country} keyword={this.state.keyword} />
//           <Routes>
//             <Route exac path="/about" element={<About/>}/>
//           </Routes>
//         </Router>
//       </div>
//     )
//   }
// }
//
//FUNCTION BASED
const App = () => {

  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState(null);
  const [keyword, setKeyword] = useState(null);

  const categorySelected = (selectedCategory) => {
    setCategory(selectedCategory);
  }

  const countrySelected = (selectedCountry) => {
    setCountry(selectedCountry);
  }

  const keywordSearched = (searchedKeyword) => {
    setKeyword(searchedKeyword);
  }

  const apiKeyList = ["APIKEY1",
                      "APIKEY2"];

  const pageSize = 12;

  return (
    <div>
      <Router>
        <NavBar categorySelected={categorySelected} countrySelected={countrySelected} keywordSearched={keywordSearched} />
        <News pageSize={pageSize} apiKeyList={apiKeyList} category={category} country={country} keyword={keyword} />
        <Routes>
          <Route exac path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;