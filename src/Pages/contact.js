import "./contact.css"
import {Fragment} from "react"
import { useTranslation } from 'react-i18next';


export default function Contact() {
    const{t}=useTranslation();
    return (
        <Fragment>
            <h1><strong><img src="newcon.png" alt="Contact page" width="70" height="60" hspace="30"/>{t("contact")}</strong></h1>
            <h3><p style={{ textAlign: "center" }}><strong>{t("wwg")}</strong></p></h3>
            <hr />

            <div className="contact-container">
                <form action="https://api.web3forms.com/submit" method="POST" className="contact-left" id="contactForm">
                    <div className="contact-left-title">
                        <h2 class="gitw">{t("gitw")}</h2>
                        <hr />
                    </div>
                    <input type="hidden" name="access_key" value="631152c3-3bc8-4429-8c68-59616c1c7357" />
                    <input type="text" name="name" placeholder={t("name")} className="contact-inputs" required />
                    <input type="email" name="email" placeholder={t("email")} className="contact-inputs" required />
                    <textarea name="message" placeholder={t("message")} className="contact-inputs" required></textarea>
                    <button type="submit" class="sma">
                        {t("submit")}
                        <div class="logo1">
                        <img src="button.png" alt="Button" width="70" height="60" hspace="30" />
                        </div>
                    </button>
                </form>

                <div>
                    <img src="wch.jpeg" alt="We are here to help" class="die" />
                </div>
            </div>
        </Fragment>
    );
}
