import React from 'react';
import Navbar from './nev';
import abbg from './images/aboutbg.png';
import bhimg from './images/bhawna.png';
import gurimage from './images/gurinder.png';
import yogimage from './images/yogesh.png';

function About() {
    return (
        <>
            <Navbar />
            <div className="about-container">
                <div className="hero-section">
                    {/* The background image is set here */}
                    
                </div>
                <div className="content-section">
                    <div className="text-section">
                        <h2>Bhawna Bansal</h2>
                        <h3>PhD, MTech, BTech – Specialized in Artificial Intelligence</h3>
                        <p className='dectext'>
                        She is working in the field of Mathematics and Artificial Intelligence from last 7 years. Her vision is to spread knowledge and inspire individuals towards entrepreneurship, educating growing minds in appropriate direction to become the innovative leaders of future with great critical thinking. She has been working in the field of 'AI in Healthcare ' from last 3 years, under the guidance of AI Experts and Ayurveda Practitioner. In this tenure, she got more than 5 papers published in renowned journals and was part of national and international AI conferences.
                        </p>
                    </div>
                    <div className="image-section">
                        <img src={bhimg} alt="Bhawna Bansal" />
                    </div>
                </div>
                <div className="content-section">
                    <div className="image-section2">
                        <img src={gurimage} alt="Dr. Gurinder Kaur Sodhi" />
                    </div>
                    <div className="text-section">
                        <h2>Dr. Gurinder Kaur Sodhi</h2>
                        <h3>PhD (ECE) from Desh Bhagat University, ME (ECE) from NITTTR</h3>
                        <p className='dectext'>
                            She has been working as an Assistant Professor and Head of Department in ECE department at Desh Bhagat University since 2014.
                            She has guided more than 20 students of MTech in the field of Image Processing, Wireless Communication, and Machine Learning.
                        </p>
                    </div>
                </div>
                <div className="content-section">
                    <div className="text-section">
                        <h2>Dr. Yogesh Bansal</h2>
                        <h3>BAMS from Baba Farid University of Health Sciences, Faridkot, Punjab. PhD from Guru Ravi Das Ayurvedic University, Hoshiarpur, Punjab</h3>
                        <p className='dectext'>
                            Founder of Shri Bala Ji Clinic and Physiotherapy Centre, Ludhiana.
                            Founder of Komal Nursing Home, Phillaur.
                            Founder of Dr. Bansal's Ayurvedic Kidney and Gastro Clinic.
                            He has been working in the field of Ayurveda for the last 15 years. His contributions to the medical field make a significant difference in the wellness of society.
                        </p>
                    </div>
                    <div className="image-section">
                        <img src={yogimage} alt="Dr. Yogesh Bansal" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
