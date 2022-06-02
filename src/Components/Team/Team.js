import React from 'react';

import '../../Style/zq-team.css';
class Team extends React.Component {

    constructor(props){
        super(props);
        this.mousehover2=this.mousehover2.bind(this);
        this.mousehover1=this.mousehover1.bind(this);
        this.mouseout2=this.mouseout2.bind(this);
        this.state={
            display:"image1"
        };
    }
mousehover2(){
   this.setState({display:"image2"});
}
mousehover1(){
    this.setState({display:"image1"});
}
mouseout2(){
    this.setState({display:"image1"});
}
render(){
    return (
        <div className='zq-contact'>
            <div className='zq-contact-container'>
                <div className='zq-left-section'>
                    <div className='zq-home-heading large-text team-text'>
                       Our Pillars
                    </div>
                    <div >{this.state.display==="image1"? <div className='member-details active'>
                        <div className='member-details-box'>
                        <div className='member-name'>Gaurav Maggu</div>
                        <div className='member-designation'>Director</div>
                        <div className='member-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt sem orci, aliquam mattis libero mattis vitae. Mauris venenatis, purus quis semper hendrerit, quam ipsum auctor urna, elementum sollicitudin libero libero ac eros. </div>
                        </div>
                    </div>:  <div className='member-details active'>
                        <div className='member-details-box'>
                        <div className='member-name'>Dilip Shejwani</div>
                        <div className='member-designation'>Director</div>
                        <div className='member-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt sem orci, aliquam mattis libero mattis vitae. Mauris venenatis, purus quis semper hendrerit, quam ipsum auctor urna, elementum sollicitudin libero libero ac eros. </div>
                        </div>
                        </div>
    }
                        </div>
                   </div>
                <div className='zq-right-section'>
                <img onMouseOver={this.mousehover1} id="member-image-1" className='member-image active' src="https://onebanc.ai/images/about-us-sameer.webp" alt="Gaurav Maggu"/>
                <img  onMouseOver={this.mousehover2} onMouseOut={this.mouseout2} id="member-image-2" className='member-image' src="https://onebanc.ai/images/about-us-ishita.webp" alt="Dilip Shejwani"/>
                </div>
            </div>
        </div>
    )
}
}

export default Team;