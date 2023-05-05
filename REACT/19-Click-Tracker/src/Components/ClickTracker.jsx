import React, {useState} from 'react';

 const ClickTracker = () => {
    const [clickTracker, setClickTracker] = useState(0);

        const click = (event) => {
            setClickTracker(event.target.textContent);
        }

        return <>
            <button onClick={click}>First Button</button>
            <button onClick={click}>Second Button</button>
            <button onClick={click}>Third Button</button>
            <h1>Last click: {clickTracker}</h1>
        </>
}

export default ClickTracker;
