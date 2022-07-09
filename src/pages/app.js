import React from 'react';
import '../css/body.css';
import BodyApp from '../components/body_app';
import Headers from '../components/headers';

function App(){
    return (
        <div>
            <Headers />
            <BodyApp />
        </div>
    )
}
export default App;