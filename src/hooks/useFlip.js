import React, {useState} from 'react';

const useFlip = () => {
    const [state, setState] = useState(null);

    const flipCard = () => {
        setState(isFlip => !isFlip)
    }

    return [state, flipCard];
}

export default useFlip;