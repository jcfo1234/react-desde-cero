import React from 'react';

const History = ({match, location, history}) => {
    return (
        <div>
            {JSON.stringify(match)}
        </div>
    );
}

export default History;