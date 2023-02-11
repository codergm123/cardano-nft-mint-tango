import "./App.css";
import React from "react";

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
      <div className="App flex flex-col">
        <Header />
        <Main/>
        <Footer />
      </div>
  );
};

export default App;
