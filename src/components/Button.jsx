const Button = ({color, handleClick, text, classes, active}) => {
    return (
            active? <button style={{backgroundColor: color}}
            onClick={handleClick}
            className={classes}>
                <strong>{text}</strong>
                </button> : 
                <></>
    )
}

export default Button;