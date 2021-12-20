import React from 'react';
import './Benefits.css';

class Benefits extends React.Component {
    render() {
        return (
            <div className="benefit-content">
               <div className="benefit-header">
                    <h1>Why is the <span>o9 Digital Brain </span> the platform every company needs?</h1>
                    <p>Are your slow and siloed planning capabilities preventing you from detecting market changes, forecasting demand accurately, and driving integrated commercial, supply chain and financial plans and decisions at the speed and scale needed to compete in the digital age?</p>
               </div>
               <p className="tag-line"><span>The o9 Digital Brain </span>is the ultimate platform to transform planning and decision-making.</p>
               <div className="benefit-list">
                   <div className="benefit-item"><p>Leverages real-time data, both internal and external, to sense opportunities & risks</p></div>
                   <div className="benefit-item"><p>Uses analytics, AI, and algorithms to transform data into knowledge</p></div>
                   <div className="benefit-item"><p>Connects all planning on one single platform to enable true end-to-end decision-making</p></div>
               </div>
               <div className="digital-brain-link">
                   <a href="https://o9solutions.com/digital-brain/" className="more-info-btn" target="_blank">What is the digital brain?</a>
               </div>
            </div>
        )
    }
}

export default Benefits;