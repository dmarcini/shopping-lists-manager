import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import LocalStorageManager from "../../js/localStorageManager";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    LocalStorageManager.removeListsWithExpirationDateExceeded();
  }

  render() {
    return (
      <Container id="app" fluid>
        <BrowserRouter>
          <Container fluid>
            <Row>
              <Col id="navbar" xs={12} md={3}>
                <Navbar/>
              </Col>
              <Col id= "main" xs={12} md={9}>
                <Main/>
              </Col>
            </Row>
            <Row id="footer">
              <Footer/>
            </Row>
          </Container>
        </BrowserRouter>
      </Container>
    );
  }  
}

export default App;
