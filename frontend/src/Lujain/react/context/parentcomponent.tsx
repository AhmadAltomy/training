import React from 'react';
import ChildComponent from './childcomponent';

const ParentComponent = () => {
    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent />
        </div>
    );
}

export default ParentComponent;