import React from 'react';
import './Jobs.css';

class Jobs extends React.Component {
    render() {
        return (
            <div className="job-container">
                <div className="job-description">
                    <div className="left-section">
                        <div className="job-logo">
                            <img src="https://o9solutions.com/wp-content/uploads/2021/05/badges-home-careers-1.png.webp" alt="job logo" />
                        </div>
                        <div className="job-content">
                            <h1>Want to make a difference?</h1>
                            <p className="basic-text">Join one of the fastest growing companies in enterprise software.</p>
                        </div>
                    </div>
                    <div className="right-section">
                        <a href="https://o9solutions.com/careers/" target="_blank" rel="noreferrer" className="more-info-btn">See jobs</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jobs;