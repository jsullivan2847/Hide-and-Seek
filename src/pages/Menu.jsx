import Button from "../components/Button";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)

    function getPosition(){
      let lat = Number((Math.random() * (74.0060 - 74.0000) + 74.0000).toFixed(5))
      let lng = Number((Math.random() * (-40.7130 - (-40.7100)) + -40.7100).toFixed(5))

      return {lat: lat, lng: lng}
    }

    console.log(getPosition())


  return (
    <div className="page">
      <div className="nav">
        <img id="menu-logo" src="../images/Logo.png" alt="Hide and Seek" />
        <div className="btn-group">
          <Button  handleClick={() => setIsOpen(true)} 
          text='How to Play'
          classes={"btn"}
          active={true}/>
          <Link to="/play">
            <Button text='Play'
            classes={"btn"}
            active={true}/>
          </Link>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            Modal
          </Modal>
        </div>
      </div>
      <img id="binoc" src="../images/binoculars.png" alt="binoculars" />
      <img id="ny" src="../images/ny.jpg" alt="arial view of Manhattan" />
    </div>
  );
};

export default Menu;
