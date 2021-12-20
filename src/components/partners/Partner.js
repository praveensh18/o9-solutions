import React from 'react';
import './Partner.css';

class Partner extends React.Component {
    render() {
        return(
            <div className="partner-container">
                <div className="partner-content">
                    <h2 className="basic-text">Amazing and growing <strong>network </strong> coming together to deliver to our global clients</h2>
                    <p className="sub-text">Our partner ecosystem combines industry-leading expertise and technology to help you achieve your digital transformation goals.</p>
                    <a href="https://o9solutions.com/partners/" className="more-info-btn ">View all partners</a>
                </div>
                
                <div className="partner-logos">
                    <img src="https://o9solutions.com/wp-content/uploads/2021/05/Partner-logos.svg" alt="partner logo"/>
                </div>
            </div>
        )
    }
}

export default Partner;