import React from 'react';
import Covid from './Covid';

class Home extends React.Component {
    render() {
        return (
            <div className="page-container" id="home-container">
                < Covid />
            </div>
        )
    }
}

export default Home;