import React from 'react';
import './Home.css'; // Assuming you want to add additional custom styles

const Home = () => {
    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg border-0">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4 text-primary">Welcome to CodeMaster Academy</h2>
                            <p>Welcome to <strong>CodeMaster Academy</strong>, your premier destination for learning programming and related topics online. Whether you're a beginner looking to dive into coding or an experienced developer seeking to advance your skills, we have the resources and courses tailored just for you.</p>
                            <h4 className="text-center mt-4 text-secondary">Key Features</h4>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Comprehensive Courses:</strong> Explore a wide range of courses covering popular programming languages, frameworks, and technologies.</li>
                                <li className="list-group-item"><strong>Hands-On Learning:</strong> Practice coding with interactive exercises and real-world projects to reinforce your understanding.</li>
                                <li className="list-group-item"><strong>Expert Instructors:</strong> Learn from industry professionals who bring real-world experience and insights to your learning journey.</li>
                                <li className="list-group-item"><strong>Flexible Learning:</strong> Study at your own pace with our flexible schedule and access courses from anywhere, anytime.</li>
                                <li className="list-group-item"><strong>Community Support:</strong> Engage with a supportive community of learners and mentors to collaborate and grow together.</li>
                            </ul>
                            <div className="text-center mt-4">
                                <p>Get Started: Sign up today and embark on your journey to mastering programming and advancing your career.</p>
                                <a href="/register" className="btn btn-primary btn-lg">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
