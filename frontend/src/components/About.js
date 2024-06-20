import React from 'react';
import './About.css'; // Assuming you want to add additional custom styles

const About = () => {
    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg border-0">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4 text-primary">About CodeMaster Academy</h2>
                            <p><strong>CodeMaster Academy</strong> is an online learning platform dedicated to providing high-quality education in programming and related fields. Our mission is to empower learners worldwide to achieve their career goals through accessible and engaging learning experiences.</p>
                            <p>We offer a diverse range of courses designed by industry experts, covering essential programming languages, software development frameworks, and cutting-edge technologies. Whether you are a novice looking to learn the basics or a seasoned professional seeking to deepen your knowledge, <strong>CodeMaster Academy</strong> has something for everyone.</p>
                            <p>Join thousands of learners who have chosen <strong>CodeMaster Academy</strong> to advance their skills, enhance their career prospects, and stay ahead in the rapidly evolving tech industry.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
