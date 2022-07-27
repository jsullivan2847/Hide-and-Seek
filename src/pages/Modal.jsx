import { ReactDOM, useState } from "react";


const Modal = ({open, onClose, children}) => {
    const [image, setImage] = useState('../images/Instructions_1.png')

    // const Modal_Styles = {
    //     position: 'fixed',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     backgroundColor: 'white',
    //     zIndex: 100
    // }
    function handleClick(){
        setImage('../images/Instructions_2.png')
        if(image === '../images/Instructions_2.png' ){
            onClose();
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
                <div onClick={handleClick}className="how-to">
                    <img src={image} alt=""/>
            </div>
            </div>
        )
    }
} 

export default Modal;