import { useState, useEffect } from 'react';

function Display(props) {

    const [display, setDisplay] = useState(null);

    const getDisplayData = async () => {
        const response = await fetch(props.URL + "display");

        const data = await response.json();

        setDisplay(data);
    }

    useEffect(() => (
        getDisplayData(), []
    ))

    const loaded = () => (
        <div>
            <h2>{display.name}</h2>
        </div>
    )

    return display ? loaded() : <h1>Loading...</h1>
  }
  
  export default Display;