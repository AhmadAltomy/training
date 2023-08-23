// App.js
import React from 'react';
import ParentComponent from './parentcomponent';
import CounterData from './counterdata';

const App = () => {
    return (
        <CounterData>
            <div>
                <ParentComponent />
            </div>
        </CounterData>
    );
}

export default App;




// we should call it in the App.tsx 