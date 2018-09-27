import React from "react";
import "./LoseModal.css";

const LoseModal = props => (
  <div id="newExpenseModal" className="modal">
    <div className="modal-content col-md-6 offset-md-3">
      <h3 className="float-left">You won!</h3>
      <span className="close text-right">&times;</span>
    </div>
  </div>
);

export default LoseModal;
