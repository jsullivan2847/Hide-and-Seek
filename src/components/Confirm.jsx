const Button = ({active, text, confirm}) => {
    return (
        <div>
            {active ? <button onClick={confirm} className="btn confirm" ><strong>{text}</strong></button> : <></> }
        </div>
    )
}

export default Button;