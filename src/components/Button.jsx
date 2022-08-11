const Button = (props) => {
    return (
            <button style={{backgroundColor: props.color}}onClick={props.setIsOpen}className="btn" ><strong>{props.text}</strong></button>
    )
}

export default Button;