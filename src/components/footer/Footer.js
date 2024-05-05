import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
        <div className="footer">
            <div className="box-container">
                
                <div className="box">
                    <a className="box-header" href="https://o9solutions.com/solutions/">Solution</a>
                    <a href="#">IBP</a>
                    <a href="#">Revenue Management</a>
                    <a href="#">Supply Chain Management</a>
                    <a href="#">Merchandising & Assortment Management</a>
                    <a>Supply Chain & Logistics for Retail</a>
                </div>
                
                <div className="box">
                    <a href="https://o9solutions.com/platform/" className="box-header">Platform</a>
                    <a href="#">Request a demo</a>
                    
                    <h2 className="box-header">Top Solutions</h2>
                    <a href="#">Demand Planning Software</a>
                    <a href="#">IBP Software</a>
                    <a href="#">S&OP Software</a>
                    <a href="#">AI/ML Forecasting</a>
                    <a href="#">Supply Chain Control Tower</a>
                    <a href="#">View all</a>
                </div>
                
                <div className="box">
                    <h2 className="box-header">Company</h2>
                    <a href="#">About</a>
                    <a href="#">Careers</a>
                    <a href="#">Partners</a>
                    <a href="#">Academy</a>
                    <a href="#">Events</a>
                    <a href="#">Blog</a>  
                    <a href="#">Contact</a>  
                </div>
                
                <div className="box">
                    <a href="https://o9solutions.com/aim10x/" className="aim10x"><img src="https://o9solutions.com/wp-content/uploads//2020/07/aim10x-white-2.svg" alt="aim 10 x" /></a>
                    <a href="#">Webinars</a>
                    <a href="#">Podcast</a>
                    <a href="#">Executive Council</a>
                    <a href="#">Innovators Network</a>
                    <a href="#">AIM10x Global Event</a>
                </div>
                
                <div className="box">
                    <a href="https://o9solutions.com/industries/" className="box-header">Industries</a>
                    <a href="#">Automotive</a>
                    <a href="#">Consumer Products</a>
                    <a href="#">Energy & Resources</a>
                    <a href="#">High-Tech & Semiconductor</a>
                    <a href="#">Industrial Manufacturing</a>
                    <a href="#">Life Sciences</a>  
                    <a href="#">Retail</a>  
                    <a href="#">Telecom</a> 
                </div>
                
            </div>
            
            <div className="credit">
                <a className="text-only">&copy; 2021 o9 Solutions, incl.</a>
                <a>Privacy policy</a>
                <a>Cookie policy</a>
                <a>Support</a>
                <a>o9 Guides</a>
                <a>Demo created by Praveen</a>
            </div>
        </div>
        )
    }
}

export default Footer;
