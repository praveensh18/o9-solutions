import React from 'react';
import './Newsroom.css';

class Newsroom extends React.Component {
    render() {
        return (
            <div className="discover-container">
                <div className="discover-wrapper">
                    <div className="discover-heading">
                        <h5><span><strong>Discover</strong> our newsroom</span></h5>
                    </div>
                    
                    <div className="discover-info">
                        <h2 className="basic-text"><strong>Get the latest insights </strong>into the world of the supply chain.</h2>
                    </div>
                    
                    <div className="discover-details">
                        <a href="https://o9solutions.com/trending/a-reflection-on-supply-chain-digitization-trends-in-the-metal-industry/" target="_blank" rel="noreferrer" className="discover-item">
                            <div className="discover-img">
                                <img src="https://o9solutions.com/wp-content/uploads/2021/12/metals-blog-2-1024x445.jpg.webp" alt="trending"/>
                            </div>
                            <div className="dicover-sub-text">
                                <div className="dicover-sub-link">Trending</div>
                                <p className="discover-text">A Reflection on Supply Chain Digitization Trends in the Metal Industry</p>
                            </div>
                        </a>
                        
                        <a href="https://o9solutions.com/trending/o9-and-googles-ai-ml-solution/" target="_blank" rel="noreferrer" className="discover-item">
                            <div className="discover-img">
                                <img src="https://o9solutions.com/wp-content/uploads/2021/12/vertex-blog-1024x445.jpg.webp" alt="retail forcasting" />
                            </div>
                            <div className="dicover-sub-text">
                            <div className="dicover-sub-link">Trending</div>
                            <p className="discover-text">o9 and Google’s AI/ML Solution to Accelerate and Improve CPG and Retail Forecasting</p>
                            </div>
                        </a>
                        
                        <a href="https://o9solutions.com/best-practices/global-logistics-trends/" target="_blank" rel="noreferrer" className="discover-item">
                            <div className="discover-img">
                                <img src="https://o9solutions.com/wp-content/uploads/2021/12/logistics-blog-1024x445.jpg.webp" alt="best practices"/>
                            </div>
                            <div className="dicover-sub-text">
                            <div className="dicover-sub-link">Best Practices</div>
                            <p className="discover-text">Global Logistics Trends: Turning Insights Into Actions</p>
                            </div>
                        </a>
                    </div>
                    
                    <div className="discover-more-info">
                        <a href="https://o9solutions.com/blog/" target="_blank" rel="noreferrer"><i className="fa fa-arrow-right"></i><span>Read our blog</span></a>
                        <a href="https://o9solutions.com/newsroom/" target="_blank" rel="noreferrer"><i className="fa fa-arrow-right"></i><span>Latest news</span></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsroom;