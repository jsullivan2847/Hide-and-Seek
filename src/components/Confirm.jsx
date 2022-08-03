const Button = ({active, text}) => {
    return (
        <div>
            {active ? <button className="btn confirm" ><strong>{text}</strong></button> : <></> }
        </div>
    )
}

export default Button;