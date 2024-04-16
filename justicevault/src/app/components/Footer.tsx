import * as React from "react";
export default function Footer() {
    
    return(
    <> 

    <div className="footer">
        <h2>Questions? Call 000-000-000-000</h2>

        <div className="row">
            <div className="col">
                <a href="#">Faq</a>
                <a href="#">Investor relations</a>
                <a href="#">Privacy</a>
                <a href="https://www.speedtest.net/" target="_blank">Speed Test</a>
            </div>
            <div className="col">
                <a href="#">Help Center</a>
                <a href="#">Jobs</a>
                <a href="#">Cookie Preferences</a>
                <a href="#">Legal notices</a>
            </div>
            <div className="col">
                <a href="#">Account</a>
                <a  href="https://docs.ipfs.tech/" target="_blank">IPFS</a>
                <a href="#">Corporate Information</a>
                
            </div>
            <div className="col">
                <a href="#">Media Center</a>
                <a href="#">Terms of Use</a>
                <a href="https://www.instagram.com/jijojohnyy/">Contact Us</a>
            
            </div>
        </div>
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/65ac8aa1c14bcab4f830e52efc821a2a5d4b120d4e969ba9ea0d46395f0bd3ea?apiKey=365cd9145bf64b76b402e523c91a3e5d&"
            className="shrink-0 w-40 max-w-full aspect-[5.88]"
          />
          
    </div>

    </>
    );
}