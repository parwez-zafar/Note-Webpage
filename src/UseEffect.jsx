import React, { useEffect } from 'react';


const UseEffect = () => {
    const [num, setNum] = React.useState(0);
    const [nums, setNums] = React.useState(0);


    const click = () => {
        setNum(num + 1);
    }
    const click2 = () => {
        setNums(nums + 1);
    }

    useEffect(() => {
        // alert("you clicked me")
        document.title = `clicked ${num} times`
    }, [num]);

    return (
        <>
            <button onClick={click} >click me {num}</button>
            <br />
            <hr />

            <button onClick={click2} >click me {nums}</button>
        </>
    )
}


export default UseEffect;