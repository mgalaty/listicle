import React, { useState } from 'react';
import { Text } from "react-native";

export const Chair = (props) => {
    const { theme } = props;  //object destructing
    const [isBig, setIsBig] = useState(false);
    console.log('isBig :>>',isBig);
    const changeState = () => {
        /* setIsBig(!isBig) */
        setIsBig(currentState => !currentState)
    }
    return (
        <Text style={{fontSize: isBig ? 24: 14, color: theme === 'dark' ? 'red' : 'purple' }} onPress={changeState}>This is chair</Text>
    )
}

/*  export default Chair; */
/* export { Chair }; */