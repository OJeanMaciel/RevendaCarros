import React from 'react';
import '../css/body.css';
import BodyHome from '../components/body_home';
import Headers from '../components/headers';
import Footer from '../components/footer';

function Home(){
    return (
        <div>
            <Headers />
            <BodyHome />
            <Footer />
        </div>
    )
}
export default Home;