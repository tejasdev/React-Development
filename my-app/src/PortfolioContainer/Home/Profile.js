/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Profile.css';
// import Me from '/images/me.jpeg'


const Profile = () =>{
    return(
        <div className='intro'>
            <div className='intro-left'>
                <div>
                    <span className='intro-hi'>Hi, My Name is</span>
                    <span className='intro-name'>Tejas Devaraj</span>
                </div>
                <div className='intro-social'>
                    <a href='https://www.facebook.com/tejas.devaraj.52'> 
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='#'> 
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='#'> 
                        <i className='fa fa-google'></i>
                    </a>
                </div>
                <div className='intro-skill'>
                    <div className='intro-skill-item'>Software Enigneer</div>
                    <div className='intro-skill-item'>Web Developer</div>
                    <div className='intro-skill-item'>NLP Entusiast</div>
                </div>
                <div className='intro-description'>
                    Profile Description!
                </div>
            </div>
            <div className='intro-right'>
                {/* <img src={Me} className='intro-image'></img> */}
            </div>

        </div>
    )

};

export default Profile;