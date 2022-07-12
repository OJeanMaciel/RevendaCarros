import React from 'react';
import '../css/body.css';
import BodyApp from '../components/body_app';
import Headers from '../components/headers';
import Footer from '../components/footer';

function App(){
    return (
        <div>
            <Headers />
            <BodyApp />
            <Footer />
        </div>
    )
}
export default App;