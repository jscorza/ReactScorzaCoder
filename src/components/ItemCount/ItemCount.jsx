import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ onAdd, stock, initial }) {

    const [count, setCount] = useState(initial);

    const onPlus = () => {
        if (count < stock)
            setCount(count + 1);
    };

    const onDecrement = () => {
        if (count > initial)
            setCount(count - 1);
    };
    return <div>
        <button style={{padding: "3px", margin: '7px'}} className="btn btn-3" onClick={onDecrement}>-</button>
        <span>{count}</span>
        <button style={{padding: "3px", margin: '7px'}}  className="btn btn-3"  onClick={onPlus}>+</button>
        <button className=" btn btn-success btn-lg" onClick={() => onAdd(count)}>Confirm purchase</button>
    </div>;
}

export default ItemCount;