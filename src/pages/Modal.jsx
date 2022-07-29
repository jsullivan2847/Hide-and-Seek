import { ReactDOM, useState } from "react";


const Modal = ({open, onClose, children}) => {
    const instructions = ['../images/Instructions_1.png', '../images/Instructions_2.png']
    const [image, setImage] = useState(instructions[0])

    // const Modal_Styles = {
    //     position: 'fixed',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     backgroundColor: 'white',
    //     zIndex: 100
    // }
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
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0, .7)',
        zIndex: 100
    }


    if(!open){
        return <></>
    }
    else{

        return (
            <div style={Overlay_Styles}>
                    <img className="how-to" onClick={handleClick} src={image} alt=""/>
            </div>
        )
    }
} 

export default Modal;