import React from "react";

const HomeFistHeading = () => {
    return (
        <div className='zq-home-fh'>
            <div className="zq-home-fh-container">
                <div className='zq-left-section'>
                    <div className='zq-welcome'>
                        Welcome to Zenquip
                    </div>
                    <div className='zq-home-heading large-text'>
                        In quest to find One-Stop Solution for all your Mental Health Needs
                    </div>
                    <div className='za-home-detail'>
                        <p>
                            We are making a mobile “App” for behavioural intervention in Psychiatric patients/users. 
                        </p>
                        <p>
                            By this “App”, we aim to increase the adherence rate and follow-up among psychiatric patients/users. 
                        </p>
                    </div>
                    <div className='zq-learn-more-container'>
                        <input type='button' className='zq-learn-more' value = 'Learn More'/>
                    </div>
                </div>

                <div className='zq-right-section'>
                    <div className='zq-fh-image'>
                        <img src='src/Style/assets/svg-cuate.svg' alt='Mental Health'/>
                    </div>               
                </div>
            </div>
        </div>
    )
}

export default HomeFistHeading;