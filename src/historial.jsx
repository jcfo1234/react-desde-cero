import React from 'react';

const Historial = ({match, location, history}) => {
    return (
        <div>
            {JSON.stringify(match)}
        </div>
    );
}

export default Historial;