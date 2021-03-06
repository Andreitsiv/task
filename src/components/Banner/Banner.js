import React from "react";
import './Banner.scss'
import Button from "../Button/Button";
import {useMediaQuery} from "react-responsive/src";
const Banner = () => {

    const isMobile=useMediaQuery({
        query:'(max-width:767px)'
    })
    const isTableOrMobile=useMediaQuery({
        query:'(min-width:768px)'
    })

    return (
        <div className='banner'>
            <div className='title'><h1>Test assignment<br/>
                for Frontend <br/>Developer position</h1></div>
            <div className='simple__text'>
                {isMobile&&<p>We kindly remind you that your test assignment
                    should be submitted as a link to github/bitbucket repository.</p>}
                {isTableOrMobile&&<p>We kindly remind you that your test assignment
                should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements.
                We look forward to your submission. Good luck! The photo has to scale in the banner
                area on the different screens</p>}</div>
            <Button className={"primary-btn"} label={"Sing up now"}/>
        </div>
    )
}
export default Banner