import Button from "../components/Button";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="page">
      <div className="nav">
        <img id="menu-logo" src="../images/Logo.png" alt="Hide and Seek" />
        <div className="btn-group">
          <Button  handleClick={() => setIsOpen(true)} 
          color={"rgb(109,255,255)"}
          text='How to Play'
          classes={"btn"}
          active={true}/>
          <Link to="/play">
            <Button text='Play'
               color={"rgb(81,239,13)"}
            classes={"btn"}
            active={true}/>
          </Link>
          <Link to="/leaderboard">
            <Button text='High Scores'
               color={"rgb(206,50,51)"}
            classes={"btn"}
            active={true}/>
          </Link>
        </div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            Modal
          </Modal>
      </div>
      <img id="binoc" src="../images/binoculars.png" alt="binoculars" />
      <img id="ny" src="../images/ny.jpg" alt="arial view of Manhattan" />
      <Footer/>
    </div>
  );
};

export default Menu;
