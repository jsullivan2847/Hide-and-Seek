import {useState } from "react";


const Modal = ({open, onClose}) => {
    const instructions = ['../images/Instructions_1.png', '../images/Instructions_2.png']
    const [image, setImage] = useState(instructions[0])

    function handleClick(){
        if(image === instructions[0]){
            setImage(instructions[1])
        }
        else{
            setImage(instructions[0])
            onClose()
        }
    }
    const Overlay_Styles = {
        position: 'fixed',
        height: '100vh',
        width: '100vw',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0, .7)',
        zIndex: 100
    }


    return ( open?  <div className="modal-background"> 
    <img className="how-to" onClick={handleClick} src={image} alt="Instructions"/> 
    </div> : <></> )

} 

export default Modal;