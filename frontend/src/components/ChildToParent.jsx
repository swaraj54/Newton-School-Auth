
import React, { useState } from 'react';

const ChildToParent = (props) => {
    const [inputValue, setInputValue] = useState('');
    function handleChange(event) {
        setInputValue(event.target.value);
        props.onChange(event.target.value);
    }
    return (
        <div>
            <label>
                Input value:
                <input type="text" value={inputValue} onChange={handleChange} />
            </label>
        </div>
    );
}

export default ChildToParent;

