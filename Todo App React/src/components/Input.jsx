import React, {useState} from "react";

function Inputs(props){
    const [inputText, setInputText] = useState('');

    function handlechange(event){
        const value = event.target.value;
        setInputText(value);
      }

    return (
        <div>
            <input onChange={handlechange} type="text" value={inputText}/>
            <button onClick={() => {
                props.click(inputText);
                setInputText('');
            }}>
            <span>Add</span>
            </button>
        </div>
    )
}

export default Inputs;