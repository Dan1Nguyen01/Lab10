import React from "react";
// import {IoMail} from "react-icons/Io";
import {CiMail} from "react-icons/ci";
import {AiOutlineLinkedin} from "react-icons/ai";
import {BsGithub} from "react-icons/bs"
export default function Header() {
        return (
            <main className="main-header">
                     <img href="../images/user.png"/>
                    <div className="header-name">
                <h2>Dan Nguyen</h2>
                <h3>Software Development Student at SAIT (Southern Alberta Institute of Technology)</h3>
                <div className="header-tags">
                        <a className="" href="dannguyen0826@gmail.com"> <CiMail/>Email</a>
                        <a href="https://www.linkedin.com/in/gia-nguyen-17463722a/"> <AiOutlineLinkedin/>LinkedIn</a>
                        <a href="https://github.com/Dan1Nguyen01"> <BsGithub/>GitHub</a>
                    </div>
                    </div>

                   

            </main>
            
            
        )

}