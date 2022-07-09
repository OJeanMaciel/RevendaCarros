import React from 'react';
import '../css/body.css';
import BodyHome from '../components/body_home';
import Headers from '../components/headers';

function Home(){
    return (
        <div>
            <Headers />
            <BodyHome />
        </div>
    )
}
export default Home;