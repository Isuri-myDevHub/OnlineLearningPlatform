import React from 'react';

const Contact = () => {
    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Contact Us</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4>Contact Information</h4>
                                    <ul>
                                        <li><strong>Email:</strong> contact@yourplatform.com</li>
                                        <li><strong>Phone:</strong> +1-XXX-XXX-XXXX</li>
                                    </ul>
                                    <p>Connect with us on social media:</p>
                                    <ul>
                                        <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                                        <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                                        <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h4>Support Hours</h4>
                                    <p>Our support team is available Monday through Friday, from 9 AM to 6 PM (EST). We strive to respond to all inquiries promptly within one business day.</p>
                                    <h4>Location</h4>
                                    <p>[Your Platform Name] Headquarters<br />123 Programming Avenue<br />Tech City, USA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
