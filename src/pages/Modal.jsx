import { ReactDOM } from "react";


const Modal = ({open, onClose, children}) => {

    // const Modal_Styles = {
    //     position: 'fixed',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     backgroundColor: 'white',
    //     zIndex: 100
    // }
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
                <div className="how-to">
                <h1>{children}</h1>
                <button onClick={onClose}>Close Modal</button>
            </div>
            </div>
        )
    }
} 

export default Modal;