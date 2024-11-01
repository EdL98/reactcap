import './home.css';
import {Fragment} from "react"

export default function home(){
    return (
        <Fragment>
        <h1 ><strong><img src="shi.jpg" alt="Shimano Singapore" width="70" height="60" hspace="30"/>Background Of Project</strong></h1>
        <hr/>

        <div class="newdiv">
        <h2>Problem statement</h2>
        <br/>

        <p>In modern smart buildings and factories, staff are often required to manually
            check water meters to detect leaks and monitor water consumption. 
            This process, which can take up to two hours, is typically confined to specific areas such as female toilets, rooftops, and basements. However, in the digital age, this manual approach is becoming increasingly outdated. 
        </p>
        </div>

        <br/>

        <div class="secdiv">
            <h3>Proposed Solution</h3>
            <div class="container">
                <figure>
                    <img src="waterm.jpg" alt="Water Meter" width="150" height="180" hspace="0"/>
                    <figcaption align="Center"><em>Water Meter</em></figcaption> 
                </figure>
                <div>
                <p align="left">The water meter is used for measuring volume of water consumed by water-consuming entity.
                It is usually placed at point where water enters property, providing a means of accurate measurement
                of water usage for billing and monitoring purposes. Water meter is usually displayed in cubic meters or gallons.</p>
                <p><strong>Challenges of Manual Water Meter Reading</strong></p>
                <ol>
                    <li>Time Consuming</li>
                    <li>Prone to errors</li>
                    <li>Located in hard-to-reach areas</li>
                    <li>Adverse weather conditions</li>
                </ol>
                </div>
                
                <figure>
                    <img src="oc.png" alt="Optical Character Recognition (OCR)" width="150" height="180" hspace="0"/>
                    <figcaption align="Center"><em>Optical Character Recognition Technology</em><strong> (OCR)</strong></figcaption> 
                </figure>
                <figure>
                    <img src="opencv.png" alt="OpenCV" width="150" height="180" hspace="0"/>
                    <figcaption align="Center"><em>Open Source Computer vision</em> <strong> (OpenCV)</strong></figcaption> 
                </figure>
            
                <div>
                    <p align="left">OpenCV is used for image processing to increase the accuracy of the OCR program. </p>
                    <p align="left">OCR is a technology that is used to detect and convert text from 
                        images into machine-readable text. OCR software such as PyTesseract can recognise and intepret
                    numbers displayed on meter, converting them into digital data </p>
                    <p><strong>Benefits from these technologies</strong></p>
                    <ol>
                        <li>Increased Accurary</li>
                        <li>Real-Time Data Collection</li>
                        <li>Cost Efficiency</li>
                        <li>Automation</li>
                        <li>Improved Accessibility</li>
                    </ol>
                    </div>

                
            </div>
        </div>


</Fragment>
            
    );
}