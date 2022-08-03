const Button = (props) => {
    const {confirm} = props
    return (
            <button onClick={props.setIsOpen}className="btn" ><strong>{props.text}</strong></button>
    )
}

export default Button;