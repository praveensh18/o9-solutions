import React from 'react';
import './Industries.css';

class Industries extends React.Component {
    render() {
        return (
            <div className="industries-container">
                <div className="industries-text">
                    <p>Amazing transformation use cases across industries. Find out more.</p>
                </div>
                <div className="industry-list">
                    <div className="retails">
                    <a href="https://o9solutions.com/case-studies/coffee-corporation/" target="_blank" rel="noreferrer">
                        <h2>Retail</h2>
                        <h3>AI/ML-powered store assortment, forecasting, & replenishment planning at scale</h3>
                        <p className="link-text">Read use case <i className="fa fa-fw fa-arrow-circle-right"></i></p>
                    </a>
                    </div>
                    <div className="industrial">
                    <a href="https://o9solutions.com/case-studies/renewable-energy-equipment/" target="_blank" rel="noreferrer">
                        <h2>Industrials</h2>
                        <h3>Project-pipeline driven demand and supply chain planning in BTO/CTO model synchronized on one platform</h3>
                        <p className="link-text">Read use case <i className="fa fa-fw fa-arrow-circle-right"></i></p>
                        </a>
                    </div>
                    <div className="cpg">
                    <a href="https://o9solutions.com/case-studies/beer-brand/" target="_blank" rel="noreferrer">
                        <h2>CPG</h2>
                        <h3>Commercial, supply chain and finance on a single connected IBP platform with real-time scenarios</h3>
                        <p className="link-text">Read use case <i className="fa fa-fw fa-arrow-circle-right"></i></p>
                        </a>
                    </div>
                    <div className="oil-gas">
                    <a href="https://o9solutions.com/case-studies/oil-and-gas/" target="_blank" rel="noreferrer">
                        <h2>Oil & Gas</h2>
                        <h3>Digital supply chain control tower to detect and respond to short-term changes in real-time</h3>
                        <p className="link-text">Read use case <i className="fa fa-fw fa-arrow-circle-right"></i></p>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Industries;