import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Style/Quote.css";
import Nav from "./Header/Nav";

class App extends React.Component {
  render() {
    return (
      <div className="container-flex">
        {/* Header */}
        <Nav />
        
      </div>
    );
  }
}
export default App;
