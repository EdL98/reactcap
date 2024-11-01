import "./contact.css"
import {Fragment} from "react"




export default function Contact() {
    return (
        <Fragment>
            <h1><strong><img src="newcon.png" alt="Contact page" width="70" height="60" hspace="30"/>Contact Us</strong></h1>
            <h3><p style={{ textAlign: "center" }}><strong>We will get back to you soon</strong></p></h3>
            <hr />

            <div className="contact-container">
                <form action="https://api.web3forms.com/submit" method="POST" className="contact-left" id="contactForm">
                    <div className="contact-left-title">
                        <h2>Get in Touch With Us</h2>
                        <hr />
                    </div>
                    <input type="hidden" name="access_key" value="631152c3-3bc8-4429-8c68-59616c1c7357" />
                    <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required />
                    <input type="email" name="email" placeholder="Your Email" className="contact-inputs" required />
                    <textarea name="message" placeholder="Your Message" className="contact-inputs" required></textarea>
                    <button type="submit">
                        Submit
                        <div class="logo1">
                        <img src="button.png" alt="Button" width="70" height="60" hspace="30" />
                        </div>
                    </button>
                </form>

                <div>
                    <img src="wch.jpeg" alt="We are here to help" />
                </div>
            </div>
        </Fragment>
    );
}
