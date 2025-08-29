import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {useEffect, useState} from "react";
import {heroVideo, smallHeroVideo} from "../utils";

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 768 ? smallHeroVideo : heroVideo);

    const handleVideoSrcSet = () => {
        if (window.innerWidth < 768) {
            setVideoSrc(smallHeroVideo);
        } else {
            setVideoSrc(heroVideo);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleVideoSrcSet);
        return () => {
            window.removeEventListener("resize", handleVideoSrcSet);
        };
    }, []);


    useGSAP(() => {
        gsap.to("#hero", {opacity: 1, duration: 4})
    }, [])

    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p id="hero" className="hero-title">iPhone 15 Pro</p>
                <div className="md:w-10/12 w-9/12">
                    <video className="pointer-events-none" autoPlay muted playsInline key={videoSrc}>
                        <source src={videoSrc}/>
                    </video>
                </div>
            </div>
        </section>
    )
}
export default Hero

