import React from "react";

import WinModal from "./WinModal/WinModal.js";
import LoseModal from "./LoseModal/LoseModal.js";

const ModalConductor = props => {
  switch (props) {
    case "Win":
      return <WinModal />;

    case "Lose":
      return <LoseModal />;

    default:
      return null;
  }
};

export default ModalConductor;
