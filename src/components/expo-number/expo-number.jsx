import { useState } from 'react';

const ExpoNumber = ({ exp }) => {

    const [value, setValue] = useState(1);

    const handleMulti = () => {
        console.log('Multi', exp);

        setValue(currentValue => currentValue * exp);
    };

    const handleReset = () => {
        console.log('Reset');

        setValue(1);
    };

    return (
        <>
            <h3>Exposant de {exp}</h3>
            <p>Valeur : {value}</p>
            <button onClick={handleMulti} >X {exp}</button>
            <button onClick={handleReset} >Reset</button>
        </>
    );
};

ExpoNumber.defaultProps = {
    exp: 2
};

export default ExpoNumber;