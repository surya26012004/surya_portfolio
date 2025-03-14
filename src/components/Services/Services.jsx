import React, { useState } from 'react';
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index)=>{
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className='uil uil-web-grid services__icon'></i>
                    <h3 className="services__title"> Website <br /> Development</h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(1)}>View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    
                    <h3 className="services__modal-title">Website Development</h3>
                    <p className="services__modal-description">
                        Service with around 1 year of experience. Providing quality work to clients and companies.
                    </p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">I develop the user interface.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Web page development.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Design and mockups of products for companies.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">I position your company brand.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">I securely deploy and monitor on AWS, Google Cloud, Wordpress.</p>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className='uil uil-arrow services__icon'></i>
                    <h3 className="services__title">MERN <br />Stack</h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(2)}>View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    
                    <h3 className="services__modal-title">MERN Stack</h3>
                    <p className="services__modal-description">
                        Service with around 1 year of experience. Providing quality work to clients and companies.
                    </p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">I develop the user interface.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">I develop the interactive front-end with React and Bootstrap.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">I develop the backend securely with MongoDB.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">I position your company brand .</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Design and mockups of products for companies.</p>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className='uil uil-edit services__icon'></i>
                    <h3 className="services__title">Blockchain <br /> Development</h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(3)}>View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    
                    <h3 className="services__modal-title">Blockchain Development</h3>
                    <p className="services__modal-description">
                        Service with more than 3 years of experience. Providing quality work to clients and companies.
                    </p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">I develop the user interface.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Website development.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Backend with Ethereum, Polygon and BSC chains.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">I develop secure smart contracts.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Customizable development of products for companies.</p>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
