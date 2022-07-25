import { useState } from "react"
const Test = () => {

    //Mouse 

    const [color, setColor] = useState('white')
    const [textColor, setTextColor] = useState('black')

    function onMouseOver(){
        setColor('black')
        setTextColor('white')
    }
    function onMouseLeave(){
        setColor('white')
        setTextColor('black')
    }

    //Form

    const [fullName, setFullName] = useState({
        fName: '',
        lName: '',
    })
    
    function handleChange(event){
        const newValue = event.target.value
        const inputName = event.target.name 

        const {value, name} = event.target
            setFullName(prevValue => {
                if(name === 'fName'){
                    return {
                        fName:value,
                        lName:prevValue.lName
                    }
                }
                else if(name === 'lName'){
                    return{
                        fName:prevValue.fName,
                        lName:value
                    }
                }
            })

    }
    return(
        <div>
            <h1>Hello {fullName.fName} {fullName.lName}</h1>
            <form action="">
            <label htmlFor=""> First Name : 
            <input onChange={handleChange} 
            name="fName"
            type="text" 
            placeholder="what's your name?"
            value={fullName.fName}/>
            </label> 
            <label htmlFor=""> Last Name :
                <input onChange={handleChange}
                name="lName"
                type="text" 
                placeholder="last name"
                value={fullName.lName}/>
            </label>
            <button style={{backgroundColor: color, color: textColor}} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>Submit</button>
            </form>
        </div>
    )
}

export default Test