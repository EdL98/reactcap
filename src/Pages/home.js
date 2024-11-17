import './home.css';
import {Fragment} from "react"
import '../lang.js'
import { useTranslation } from 'react-i18next';

export default function Home(){
    const{t}=useTranslation();
    return (
        <Fragment>
        <br/>
        <h1 ><strong><img src="shi.jpg" alt="Shimano Singapore" width="50" height="60" hspace="50"/>{' '}{t("background")}</strong></h1>
        <hr/>
        
        <div class="newdiv">
        <h2>{t("home1")}</h2>
  
        <br/>

        <p>
            {t("problem_statement")}
        </p>
        </div>

        <br/>

        <div class="secdiv">
            <h3>{t("proposed_solution")}</h3>
            <br/>
            <div class="container">
                <figure>
                    <img src="waterm.jpg" alt="Water Meter" width="150" height="180" hspace="0"/>
                    <figcaption align="Center"><em>{t("wm")}</em></figcaption> 
                </figure>
                <div>
                <p align="left">{t("water_meter")}</p>
                <p align="middle"><strong>{t("challenges")}</strong></p>
                <p align="middle">
                <ol>
                    <li>{t("time_consume")}</li>
                    <li>{t("error")}</li>
                    <li>{t("location")}</li>
                    <li>{t("weather")}</li>
                </ol>
                </p>
                </div>
                
                <figure>
                    <img src="oc.png" alt="Optical Character Recognition (OCR)" width="150" height="180" hspace="0"/>
                    <figcaption align="Center"><em>{t("ocr")}</em><strong> (OCR)</strong></figcaption> 
                </figure>
                <figure>
                    <img src="opencv.png" alt="OpenCV" width="150" height="180" hspace="0"/>
                    <figcaption align="Center"><em>{t("comvis")}</em> <strong> (OpenCV)</strong></figcaption> 
                </figure>
            
                <div>
                    <p align="left">{t("desocr")}</p>
                    <p align="center"><strong>{t("benefits")}</strong></p>
                    <p align="center">
                    <ol>
                        <li>{t("inacc")}</li>
                        <li>{t("rtdc")}</li>
                        <li>{t("coste")}</li>
                        <li>{t("auto")}</li>
                        <li>{t("impacc")}</li>
                    </ol>
                    </p>
                    </div>

                
            </div>
        </div>


</Fragment>
            
    );
}