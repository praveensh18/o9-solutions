import React from 'react';
import './Capabilities.css';

const data = [
    {
        heading: 'Real Time Market Knowledge',
        content: 'Leading Indicators of Demand, External and Internal Data, Connecting the Dots, Creating an outside in view of Market, Customer, Competitor and Channel Intelligence to aid internal planning processes.'
    },
    {
        heading: 'ML/AI Powered Forecasting',
        content: 'Leading Indicator Driven, Greater Accuracy, Less Bias, Explainability, Greater Productivity and Improved Collaboration across Sales, Supply Chain and Finance around Forecasts and Gaps.'
    },
    {
        heading: 'Revenue Analytics, Planning & Gap Closure',
        content: 'Create and manage revenue plans across products, markets and channels and close gaps to plan by aligning Innovation, Pricing, Marketing, Promotions and Distribution initiatives and resources to market needs.'
    },
    {
        heading: 'Supply Chain Analytics, Planning & Control Tower',
        content: 'Respond to Demand changes and supply disruptions in real time with advanced Demand/Supply Matching capabilities, analytics and scenario evaluation all aided by the most advanced supply chain digital twin in the market.'
    },
    {
        heading: 'Digital IBP',
        content: 'Bring Financial, Commercial and Supply Chain plans and forecasts together, evaluate revenue gap closure proposals, supply chain feasibility and cost scenarios, and make P&L optimal decisions – Run all IBP  meetings on the system for better alignment, greater accountability.'
    },
]

class Capabilities extends React.Component {
    
    state = { selectedItem: null}
    
    toggle(i) {
        if(this.state.selectedItem === i) {
            return this.setState({selectedItem: null})
        }
        this.setState({selectedItem: i})
    }
    
    renderAccordian = () => {
        const active = this.state.selectedItem;
        return data.map((item, index) => (
            <div onClick={() => this.toggle(index)} className="panels" key={index}>
                <div className="panel-title">
                    <h4 className="panel-heading">{item.heading}</h4>
                    <i className={active === index ? 'fa fa-minus' : 'fa fa-plus'}></i>
                </div>
                <p className={active === index ? 'panel-content show' : 'panel-content'}>{item.content}</p>
            </div>
        ))
    }
    
    render() {
        return (
            <div className="capabilities-container">
                <div className="capabilities-text">
                    <h3 className="sub-text">Aim big, start small, iterate rapidly.</h3>
                    <p>Here are the Top 5 quick-win o9 capabilities that clients are starting with.</p>
                </div>
                <div className="capabilities-accordian">
                    {this.renderAccordian()}
                </div>
            </div>
        )
    }
}

export default Capabilities