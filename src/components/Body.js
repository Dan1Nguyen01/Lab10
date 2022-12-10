import React from "react";
import WorkExperience from "./bodyComps/WorkExperience";
import Education from "./bodyComps/Education";
import TechSum from "./bodyComps/TechSum";
export default function Body() {
        return (
            <div className="body-main container">
                <div className="row">
                    <div className="col-md-6">
                    <WorkExperience/>
                    </div>

                    <div className="col-md-6">
                    <Education/>
                    </div>
                </div>

                
                   
                
                
                
                <TechSum/>
            </div>

        )

}