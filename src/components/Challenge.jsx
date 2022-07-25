import { useState } from "react"
const Challenge = () => {

    const [contact, setContact] = useState({
        first: "",
        last: "",
        email: ""
    })

    function handleChange(event){
        const {name, value} = event.target
        setContact(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }



    return <div className="container">
        <h1>Hello {contact.first} {contact.last}</h1>
        <p>{contact.email}</p>
        <form action="">
            <input onChange={handleChange}type="text" name="first"/>
            <input onChange={handleChange}type="text" name="last" />
            <input onChange={handleChange}type="text" name="email" />
            <button>submit</button>
        </form>
    </div>
}

export default Challenge