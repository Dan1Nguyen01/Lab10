import React from "react";
// import {IoMail} from "react-icons/Io";
import {CiMail} from "react-icons/ci";
import {AiOutlineLinkedin} from "react-icons/ai";
import {BsGithub} from "react-icons/bs"
export default function Header() {
        return (
            <main className="main-header p-3">
                     <img src="images/user.png" width="200px"/>
                    <div className="header-name" p-3>
                <h2 className="h2">Dan Nguyen</h2>
                <h3 className="h4">Software Development Student at SAIT (Southern Alberta Institute of Technology)</h3>
                <div className="header-tags p-3">
                        <a className="link-info p-3 h5" href="dannguyen0826@gmail.com" ><CiMail/>Email</a>
                        <a  className="link-info p-3 h5" href="https://www.linkedin.com/in/gia-nguyen-17463722a"><AiOutlineLinkedin/>LinkedIn</a>
                        <a  className="link-info p-3 h5" href="https://github.com/Dan1Nguyen01"><BsGithub/>GitHub</a>
                    </div>
                    </div>

                   

            </main>
            
            
        )

}