import Button from "../components/Button";
const Menu = () => {
  return (
    <div className="page">
      <div className="nav">
        <img id="menu-logo" src="../images/Logo.png" alt="" />
        <div className="btn-group">
          <Button text='How to Play'/>
          <Button text='Play' />
        </div>
      </div>
      <img id="binoc" src="../images/binoculars.png" alt="" />
      <img id="ny" src="../images/ny.jpg" alt="" />
    </div>
  );
};

export default Menu;
