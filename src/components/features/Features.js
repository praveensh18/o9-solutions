import React from 'react';
import './Features.css';

class Features extends React.Component {
    state = { toggleState: 1 }
    
    clickTab(index) {
        this.setState({toggleState: index})
    }
    
    render() {
        const currentTab = this.state.toggleState
        return (
            <div className="tabs-container">
                <div className="tabs-content">
                <h2 className="tabs-header">Why are global companies partnering with o9 for their Digital Transformation?</h2>
                <div className="tabs-section">
                    
                    <ul className="tabs-selection">
                        <li onClick={() => this.clickTab(1)} className={currentTab === 1 ? "tabs active-tab" : "tabs"}>The o9 digital brain platform</li>
                        <li onClick={() => this.clickTab(2)} className={currentTab === 2 ? "tabs active-tab" : "tabs"}>Fastest time-to-value</li>
                        <li onClick={() => this.clickTab(3)} className={currentTab === 3 ? "tabs active-tab" : "tabs"}>Adoption & Change made simpler</li>
                    </ul>
                    
                    <div className={currentTab === 1 ? "feature active-content" : "feature"}>
                        <div className="feature-graphic">
                            <img src="https://o9solutions.com/wp-content/uploads/2021/08/EKG-3D-cube-v1-1.svg" alt="Ekg 3d cube v1 (1)" />
                        </div>
                        <div className="feature-content">
                            <p>The o9 platform uniquely enables companies to make fast and better decisions – by providing one single platform for commercial, forecasting, supply chain, and financial planning. All powered by real-time data, from internal and external sources.</p>
                            <a href="https://o9solutions.com/platform/" target="_blank" rel="noreferrer" className="more-info-btn">About the platform</a>
                        </div>
                    </div>
                    
                    <div className={currentTab === 2 ? "feature active-content" : "feature"}>
                        <div className="feature-graphic">
                            <img src="https://o9solutions.com/wp-content/uploads/2021/10/Fast-time-to-value.jpg.webp" alt="Fast time to value" />
                        </div>
                        <div className="feature-content">
                            <p>Who has time for multi-year, big bang transformations? o9 makes transformation real with its agile, rapid and iterative delivery methodology supported by world class services and partners</p>
                            <a href="https://o9solutions.com/about/" target="_blank" rel="noreferrer" className="more-info-btn">Why o9</a>
                        </div>
                    </div>
                    
                    <div className={currentTab === 3 ? "feature active-content" : "feature"}>
                        <div className="feature-graphic">
                            <img src="https://o9solutions.com/wp-content/uploads/2021/10/Adoption-and-chage.jpg.webp" alt="Solutions" />
                        </div>
                        <div className="feature-content">
                            <p>User adoption, process changes, global rollouts are never easy. The o9 platform with amazing usability, embedded training features, makes global rollouts and enterprise wide adoption easier.</p>
                            <a href="https://o9solutions.com/solutions/" target="_blank" rel="noreferrer" className="more-info-btn">Solutions</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Features;