import React, { Component } from "react";
import "./Modal.css";
import Auxx from "../../../hoc/Auxx";
import BackDrop from "../BackDrop/BackDrop";
class Modal extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <Auxx>
        <BackDrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Auxx>
    );
  }
}

export default Modal;
