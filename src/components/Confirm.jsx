const Button = ({active, text, handleConfirm}) => {
    return (
        <div>
            {active ? <button onClick={handleConfirm} className="btn confirm" ><strong>{text}</strong></button> : <></> }
        </div>
    )
}

export default Button;