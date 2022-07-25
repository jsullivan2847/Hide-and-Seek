import { useState } from "react"

const ToDo = () => {

    //state to track new item input
    const [inputText, setInputText] = useState('')
    const [items, setItems] = useState(['sds'])

    //tracks the state of new item input
    function handleChange(event){
        const newValue = event.target.value
        setInputText(newValue)
    }

    function addItem(){
        setItems((prevItems => {
            return [...prevItems, inputText]
        }))
    }

    return (
        <div className="container">
            <h1>hello</h1>
                <label htmlFor=""> New item
                <input onChange={handleChange}type="text" name="item" />
                </label>
                <button onClick={addItem}>Add +</button>

            <div className="to-do">
                <ul>
                    {/* {list[0]? list : <>s</>} */}
                    {items.map((item, index) => {
                    return <li key={index}className="list">{item}</li>})} 
                </ul>
            </div>
        </div>
    )
}

export default ToDo;