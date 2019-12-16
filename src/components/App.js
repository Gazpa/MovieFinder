import React, { Component } from "react";

import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Sidebar from "./Sidebar/Sidebar";
import MoviesSearchForm from "./Movies/MoviesSearchForm";

class App extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <div id="page-container" className="sidebar-visible-lg">
          <Sidebar />

          <div id="main-container">
            <Navbar />

            <MoviesSearchForm />

            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
