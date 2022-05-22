import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ToolPurchase = () => {
    const { toolId } = useParams();
    const [item, setItem] = useState({});
    return (
        <div>
            <h1>This is Tool Purchase</h1>
        </div>
    );
};

export default ToolPurchase;