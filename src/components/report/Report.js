import React from 'react';
import './Report.css';

class Report extends React.Component {
    render() {
        return (
            <div className="report-container">
                <div className="report-wrapper">
                    <div className="report-img"></div>
                    <div className="report-text">
                        <p className="sub-text">o9 was positioned <strong>furthest to the right for completeness of vision</strong> in the Gartner February 2021 Magic Quadrant for Supply Chain Planning Solutions.</p>
                        <a href="https://o9solutions.com/gartner/" target="_blank" rel="noreferrer" className="more-info-btn">Read the report</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Report;