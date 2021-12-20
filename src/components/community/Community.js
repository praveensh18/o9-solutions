import React from 'react';
import './Community.css';

class Community extends React.Component {
    render() {
        return (
            <div className="community">
                <div className="community-wrapper">
                <div className="video-wrapper">
                    <video poster="https://fast.wistia.com/assets/images/blank.gif" controls>
                        <source src="https://fast.wistia.com/embed/medias/n6fzonndov/swatch" type="video/m3u8" />
                    </video>
                </div>
                
                <div className="community-text">
                    <h2 className="basic-text sub-text"><strong>aim</strong> for <strong className="text-10x">10x</strong> value improvement.</h2>
                    <p className="sub-text">Join the global community for digital transformation leaders in planning and decision-making.</p>
                    <a href="https://o9solutions.com/aim10x/" target="_blank" rel="noreferrer" className="more-info-btn">Visit aim10x community</a>
                </div>
                </div>
            </div>
        )
    }
}

export default Community;

