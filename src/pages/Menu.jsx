import Button from "../components/Button";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)




  return (
    <div className="page">
      <div className="nav">
        <img id="menu-logo" src="../images/Logo.png" alt="" />
        <div className="btn-group">
          <Button  setIsOpen={() => setIsOpen(true)} text='How to Play'/>
          <Link to="/play">
            <Button text='Play' />
          </Link>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            Modal
          </Modal>
        </div>
      </div>
      <img id="binoc" src="../images/binoculars.png" alt="" />
      <img id="ny" src="../images/ny.jpg" alt="" />
    </div>
  );
};

export default Menu;
