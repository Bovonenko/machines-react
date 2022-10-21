import { useState, useEffect } from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date());
    const options = {  year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  
    const refreshClock = () => {
        setDate(new Date());
    }
    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <span>
            {date.toLocaleDateString("en-GB", options)}
        </span>
    );
};

export default Clock;