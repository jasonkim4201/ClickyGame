import React, {Component} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import "./style.css"


class MyVerticallyCenteredModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Rules & FAQ
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Rules:</h5>
          <br/>
          <p>Welcome to the beer clicky game. Click on a beer and score a point but don't pick the same beer more than once! The goal is to pick as much unique beers as possible. Good luck and enjoy!!</p>
          <p><strong>Q:</strong>What is this?</p>
          <p><strong>A:</strong> This is a game powered by React.js and made to develop my knowledge in this awesome library!</p> 
          <br/>
          <p><strong>Q:</strong>Those are some interesting beers what are they?</p>
          <p><strong>A:</strong>Well if you are interested in the types of beer you can see my beers.json file <a href="#">here</a></p>
          <br/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class Navbar extends Component {
  state = { modalShow: false };


  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-warning d-flex justify-content-around" id="gameNav">
      <div className="navbar-brand">Beer Clicky Game</div>
      <ButtonToolbar>
        <Button
          variant="primary"
          onClick={() => this.setState({ modalShow: true })}
        >
          Launch FAQ Modal
        </Button>

        <MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </ButtonToolbar>
      <div> Current Score: {this.props.score} | High Score: {this.props.highscore}</div>
    </nav>
    );
  }
}



/* const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning d-flex justify-content-around" id="gameNav">
      <div className="navbar-brand">Beer Clicky Game</div>
      <button className="btn btn-info">Future Modal button</button>
      <div> Current Score: {props.score} | High Score: {props.highscore}</div>
    </nav>
  )
} */

/* Keeping this in case something weird happens. */

export default Navbar;